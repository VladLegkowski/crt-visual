import { CSSProperties, ReactNode, useId } from 'react';

type SidePanelProps = {
  children: ReactNode;
  title?: string;
};

export function SidePanel(props: SidePanelProps) {
  const { children } = props;
  const titleId = useId();

  const panelStyles: CSSProperties = {
    width: '25%',
    height: '100vh',
    borderRight: '2px solid #ccc',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  };

  return (
    <aside style={panelStyles} aria-labelledby={titleId}>
      {children}
    </aside>
  );
}