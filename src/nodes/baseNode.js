import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, header, inputs = [], outputs = [], children }) => {
  return (
    <div style={styles.node}>
      <div style={styles.header}>{header}</div>
      <div style={styles.content}>{children}</div>
      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={input.position || Position.Left}
          id={input.id}
          style={{ ...styles.handle, ...input.style }}
        />
      ))}
      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={output.position || Position.Right}
          id={output.id}
          style={{ ...styles.handle, ...output.style }}
        />
      ))}
    </div>
  );
};

const styles = {
  node: {
    width: 220,
    height: 150,
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid #c4c4c4',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#3b3b3b',
  },
  content: {
    fontSize: '14px',
    color: '#555',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  handle: {
    backgroundColor: '#4caf50',
    borderRadius: '50%',
    width: 10,
    height: 10,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
