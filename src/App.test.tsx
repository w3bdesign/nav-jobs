import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreProvider } from 'easy-peasy';

import store from './store/index';
import App from './App';

test('renders Venter', () => {
  render(<StoreProvider store={store}><App /></StoreProvider>);
  const linkElement = screen.getByText(/Venter/i);
  expect(linkElement).toBeInTheDocument();
});
