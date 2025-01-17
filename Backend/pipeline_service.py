from collections import defaultdict

def count_nodes_edges(nodes, edges):
    return len(nodes), len(edges)

def check_dag(nodes, edges):
    adjacency = defaultdict(list)
    for edge in edges:
        if len(edge) == 2:
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