export const SubmitButton = () => {
    return (
      <div style={styles.container}>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px', // spacing around the button
    },
    button: {
      padding: '12px 24px', // increased padding for a larger button
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#4CAF50', // vibrant green color
      border: 'none',
      borderRadius: '8px', // rounded corners
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // subtle shadow
      transition: 'all 0.3s ease', // smooth transition for hover effect
    },
    buttonHover: {
      backgroundColor: '#45a049', // darker green on hover
      transform: 'scale(1.05)', // subtle scaling effect
    }
  };
  
  // To add the hover effect using inline CSS in React
  