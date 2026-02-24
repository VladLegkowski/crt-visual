import { CSSProperties, DragEvent, ReactNode, SetStateAction } from 'react';
import { useDnD } from '../../shared/context/dnd-context';

type DraggableNodeProps = {
  children: ReactNode;
  type: 'source' | 'layer';
};

function DraggableNode(props: DraggableNodeProps) {
  const { children, type } = props;
  const { setType } = useDnD();
  
  const draggableNodeStyles: CSSProperties = {
    cursor: 'grab'
  };

  const onDragStart = (
    event: DragEvent<HTMLDivElement>,
    nodeType: SetStateAction<string | null>
  ) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div style={draggableNodeStyles} onDragStart={(event) => onDragStart(event, type)} draggable>
      {children}
    </div>
  );
}

export { DraggableNode };
