import type { CSSProperties } from 'react';
import { Handle, type NodeProps, Position } from '@xyflow/react';

function SourceFlowNode(props: NodeProps) {
  const { selected } = props;
  console.log(props);
  const nodeStyles: CSSProperties = {
    position: 'relative',
    width: 160,
    minHeight: 70,
    border: `2px solid ${selected ? '#ff0072' : '#ccc'}`,
    borderRadius: 10,
    boxSizing: 'border-box',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  };

  const headingStyles: CSSProperties = {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.2,
    fontWeight: 600,
  };

  const inputStyles: CSSProperties = {
    height: 20,
    width: '100%',
    border: '2px solid #ccc',
    borderRadius: 6,
    boxSizing: 'border-box',
  };

  const handleStyles: CSSProperties = {
    width: 12,
    height: 12,
    border: `2px solid ${selected ? '#ff0072' : '#ccc'}`,
    borderRadius: 999,
    background: '#fff',
  };

  return (
    <article style={nodeStyles} aria-label="Source node">
      <Handle type="source" position={Position.Right} style={handleStyles} />
      <header>
        <h3 style={headingStyles}>Source</h3>
      </header>
      <input style={inputStyles} placeholder="Type…" />
    </article>
  );
}

export { SourceFlowNode };
