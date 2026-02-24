import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from './app';

describe('App', () => {
  it('renders hello world message', () => {
    render(<App />);
    
    const heading = screen.getByRole('heading', { name: /hello world/i });
    expect(heading).toBeInTheDocument();
    
    const welcomeText = screen.getByText(/welcome to your react 18 project starter!/i);
    expect(welcomeText).toBeInTheDocument();
  });
});