import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Sample React Test', () => {
  it('renders a simple message', () => {
    render(<div>Hello Test</div>);
    expect(screen.getByText('Hello Test')).toBeInTheDocument();
  });
});
