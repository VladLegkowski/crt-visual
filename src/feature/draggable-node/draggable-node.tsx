import type { CSSProperties, ReactNode } from 'react';
import type { DragEvent as ReactDragEvent } from 'react';
import { useDnD } from '../../shared/context/dnd-context';

type DraggableNodeProps = {
  children: ReactNode;
  type: 'source' | 'layer';
};

function DraggableNode(props: DraggableNodeProps) {
  const { children, type } = props;
  const { setType } = useDnD();

  const draggableNodeStyles: CSSProperties = { cursor: 'grab' };

  const onDragStart = (event: ReactDragEvent<HTMLDivElement>) => {
    setType(type);
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div style={draggableNodeStyles} draggable onDragStart={onDragStart}>
      {children}
    </div>
  );
}

export { DraggableNode };
