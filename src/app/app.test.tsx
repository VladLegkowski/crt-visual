import { render, screen } from '@testing-library/react';
import { ReactFlowProvider } from '@xyflow/react';
import { describe, it, expect } from 'vitest';
import { DnDProvider } from '../shared/context/dnd-context';
import { App } from './app';

describe('App', () => {
  it('renders hello world message', () => {
    render(
      <ReactFlowProvider>
        <DnDProvider>
          <App />
        </DnDProvider>
      </ReactFlowProvider>
    );

    const heading = screen.getByText(/source/i);
    expect(heading).toBeInTheDocument();
  });
});
