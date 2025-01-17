import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    header="LLM"
    inputs={[
      { id: `${id}-system` },
      { id: `${id}-prompt` },
    ]}
    outputs={[{ id: `${id}-response` }]}
  >
    <span>This is an LLM Node</span>
  </BaseNode>
);
