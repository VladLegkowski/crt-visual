import { CSSProperties, ReactNode } from 'react';

type SourceNodeProps = {
  children: ReactNode;
};

function SourceNode(props: SourceNodeProps) {
  const { children } = props;

  const nodeStyles: CSSProperties = {
    position: 'relative',
    width: 160,
    minHeight: 70,
    border: '2px solid #ccc',
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
    position: 'absolute',
    top: '50%',
    right: -7,
    transform: 'translateY(-50%)',
    width: 12,
    height: 12,
    border: '2px solid #ccc',
    borderRadius: 999,
    boxSizing: 'border-box',
  };

  return (
    <article
      className="react-flow__node react-flow__node-source"
      style={nodeStyles}
      aria-label="Source node"
    >
      <header>
        <h3 style={headingStyles}>{children}</h3>
      </header>
      <div style={inputStyles} aria-hidden="true" />
      <span style={handleStyles} aria-hidden="true" />
    </article>
  );
}

export { SourceNode };
