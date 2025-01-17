import React from 'react';
import { useStore } from './store';

const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      // Extract node IDs and edge connections
      const nodesList = nodes.map(node => node.id);
      const edgesList = edges.map(edge => [edge.source, edge.target]);

      // Send POST request to backend
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes: nodesList, edges: edgesList }),
      });

      if (response.ok) {
        const data = await response.json();
        // Display alert with the results
        alert(`Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
      } else {
        alert('Error submitting pipeline.');
      }
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('An error occurred while submitting the pipeline.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <button type="button" style={styles.button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;