import { CSSProperties } from 'react';
import { LayerNode } from '../enteties/nodes/layer-node';
import { SourceNode } from '../enteties/nodes/source-node';
import { DraggableNode } from '../feature/draggable-node/draggable-node';
import { DnDProvider } from '../shared/context/dnd-context';
import { SidePanel } from '../shared/ui/side-panel/side-panel';

export function App() {
  const appStyles: CSSProperties = {
    display: 'flex',
  };

  return (
    <DnDProvider>
      <div style={appStyles}>
        <SidePanel>
          <DraggableNode type="source">
            <SourceNode>Source</SourceNode>
          </DraggableNode>
          <DraggableNode type="layer">
            <LayerNode>Layer</LayerNode>
          </DraggableNode>
        </SidePanel>

        <main id="main-content" tabIndex={-1}>
          <div>Main content</div>
        </main>
      </div>
    </DnDProvider>
  );
}
