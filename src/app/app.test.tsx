import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from './app';

describe('App', () => {
  it('renders hello world message', () => {
    render(<App />);
    
    const heading = screen.getByText(/main content/i);
    expect(heading).toBeInTheDocument();
  });
});