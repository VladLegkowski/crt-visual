import type { ReactNode } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { DnDProvider } from '../shared/context/dnd-context';
import { compose, UnaryFunction } from '../shared/helpers/compose';

type ComponentFactory = () => ReactNode;

const withDnDAndReactFlow: UnaryFunction<ComponentFactory> = (component) => () => {
  return (
    <ReactFlowProvider>
      <DnDProvider>{component()}</DnDProvider>
    </ReactFlowProvider>
  );
};

export const withProviders = compose<ComponentFactory>(withDnDAndReactFlow);
