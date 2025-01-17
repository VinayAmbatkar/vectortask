import React, { useState } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      data={data}
      header="Text"
      outputs={[{ id: `${id}-output` }]}
    >
      <label>Text:</label>
      <input
        type="text"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
      />
    </BaseNode>
  );
};
