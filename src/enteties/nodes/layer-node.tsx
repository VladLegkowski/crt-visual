import { CSSProperties, ReactNode, useId } from 'react';

type LayerNodeProps = {
  children: ReactNode;
};

export function LayerNode(props: LayerNodeProps) {
  const { children } = props;
  const titleId = useId();

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
      aria-labelledby={titleId}
    >
      <header>
        <h3 id={titleId} style={headingStyles}>
          {children}
        </h3>
      </header>
      <span style={handleStyles} aria-hidden="true" />
    </article>
  );
}
