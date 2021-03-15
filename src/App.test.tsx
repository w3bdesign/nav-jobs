import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Venter', () => {
  render(<App />);
  const linkElement = screen.getByText(/Venter/i);
  expect(linkElement).toBeInTheDocument();
});
