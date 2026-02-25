import { CSSProperties, useCallback, useMemo, useRef } from 'react';
import type { DragEvent as ReactDragEvent } from 'react';
import type { Edge, Connection, Node } from '@xyflow/react';
import {
  Background,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { LayerFlowNode } from '../enteties/nodes/flow/layer-flow-node';
import { SourceFlowNode } from '../enteties/nodes/flow/source-flow-node';

import { LayerNode } from '../enteties/nodes/aside/layer-node';
import { SourceNode } from '../enteties/nodes/aside/source-node';
import { DraggableNode } from '../feature/draggable-node/draggable-node';
import { withProviders } from '../providers/with-providers';
import { useDnD } from '../shared/context/dnd-context';
import { SidePanel } from '../shared/ui/side-panel/side-panel';

function AppContent() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { screenToFlowPosition } = useReactFlow();
  const { type, setType } = useDnD();

  const nodeTypes = useMemo(
    () => ({
      source: SourceFlowNode,
      layer: LayerFlowNode,
    }),
    []
  );

  const idRef = useRef(0);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event: ReactDragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: ReactDragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!type) return;

      const getId = () => `dndnode_${idRef.current++}`;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => [...nds, newNode]);
    },
    [screenToFlowPosition, setNodes, type]
  );

  const onDragStart = (event: ReactDragEvent<HTMLDivElement>) => {
    setType(type);
    if (type != null) {
      event.dataTransfer.setData('application/reactflow', type);
    }
    event.dataTransfer.effectAllowed = 'move';
  };

  const appStyles: CSSProperties = {
    display: 'flex',
  };

  const mainStyles: CSSProperties = {
    width: '100%',
  };

  return (
    <div style={appStyles}>
      <SidePanel>
        <DraggableNode type="source">
          <SourceNode>Source</SourceNode>
        </DraggableNode>
        <DraggableNode type="layer">
          <LayerNode>Layer</LayerNode>
        </DraggableNode>
      </SidePanel>

      <main id="main-content" style={mainStyles} tabIndex={-1} ref={reactFlowWrapper}>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onDragStart={onDragStart}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
        >
          <Background />
        </ReactFlow>
      </main>
    </div>
  );
}

const AppWithProviders = withProviders(() => <AppContent />);

export function App() {
  return AppWithProviders();
}
