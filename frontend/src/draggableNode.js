// draggableNode.js

export const DraggableNode = ({ type, label, customStyles }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = 'grab';
    // Optionally, reset any custom styles on drag end
    event.target.style.transition = 'all 0.3s ease';
  };

  const defaultStyles = {
    cursor: 'grab',
    minWidth: '80px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#1C2536',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const nodeStyles = { ...defaultStyles, ...customStyles };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => onDragEnd(event)}
      style={nodeStyles}
      draggable
    >
      <span style={{ color: '#fff' }}>{label}</span>
    </div>
  );
};
