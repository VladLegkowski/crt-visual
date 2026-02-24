import { ReactFlowProvider } from '@xyflow/react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import { DnDProvider } from './shared/context/dnd-context';

const container = document.querySelector('#root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(
  <ReactFlowProvider>
    <DnDProvider>
      <App />
    </DnDProvider>
  </ReactFlowProvider>
);
