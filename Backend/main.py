from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List
from collections import defaultdict

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[str]
    edges: List[List[str]]

def is_dag(nodes, edges):
    adjacency = defaultdict(list)
    for edge in edges:
        if len(edge) != 2:
            continue  # Invalid edge format
        adjacency[edge[0]].append(edge[1])
    
    visited = set()
    recursion_stack = set()
    
    def dfs(node):
        if node in recursion_stack:
            return False
        if node in visited:
            return True
        visited.add(node)
        recursion_stack.add(node)
        for neighbor in adjacency[node]:
            if not dfs(neighbor):
                return False
        recursion_stack.remove(node)
        return True
    
    for node in nodes:
        if node not in visited:
            if not dfs(node):
                return False
    return True

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    try:
        data = await request.json()
        pipeline_data = PipelineData(**data)
        num_nodes = len(pipeline_data.nodes)
        num_edges = len(pipeline_data.edges)
        is_dag_result = is_dag(pipeline_data.nodes, pipeline_data.edges)
        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": is_dag_result
        }
    except Exception as e:
        return {"error": str(e)}