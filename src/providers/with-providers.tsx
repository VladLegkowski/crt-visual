import type { ReactNode } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { DnDProvider } from '../shared/context/dnd-context';

type UnaryFunction<T> = (argument: T) => T;

function compose<T>(...fns: Array<UnaryFunction<T>>): UnaryFunction<T> {
  return (input: T) => {
    let result = input;

    for (let index = fns.length - 1; index >= 0; index -= 1) {
      const fn = fns[index];
      result = fn(result);
    }

    return result;
  };
}

type ComponentFactory = () => ReactNode;

const withDnDAndReactFlow: UnaryFunction<ComponentFactory> = (component) => () => {
  return (
    <ReactFlowProvider>
      <DnDProvider>{component()}</DnDProvider>
    </ReactFlowProvider>
  );
};

export const withProviders = compose<ComponentFactory>(withDnDAndReactFlow);
