import type { CSSProperties } from 'react';
import type { NodeProps } from '@xyflow/react';
import { Handle, Position } from '@xyflow/react';


function LayerFlowNode(props: NodeProps) {
  const { selected } = props;
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
  
  const handleStyles: CSSProperties = {
    width: 12,
    height: 12,
    border: `2px solid ${selected ? '#ff0072' : '#ccc'}`,
    borderRadius: 999,
    background: '#fff',
  };

  return (
    <article style={nodeStyles} aria-label="Layer node">
      <Handle type="target" position={Position.Left} style={handleStyles} />
      <header>
        <h3 style={headingStyles}>Layer</h3>
      </header>
    </article>
  );
}

export { LayerFlowNode };
