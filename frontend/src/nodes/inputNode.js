// InputNode.js

import React, { useState } from 'react';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      data={data}
      header="Input"
      outputs={[{ id: `${id}-value` }]}
      style={{
        backgroundColor: '#34495E',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            id="name"
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={styles.inputField}
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="inputType" style={styles.label}>Type:</label>
          <select
            id="inputType"
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={styles.selectField}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#ECF0F1',
    marginBottom: '2px',
  },
  inputField: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #BDC3C7',
    backgroundColor: '#ECF0F1',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    width: '100%',
  },
  selectField: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #BDC3C7',
    backgroundColor: '#ECF0F1',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    width: '100%',
  },
};
