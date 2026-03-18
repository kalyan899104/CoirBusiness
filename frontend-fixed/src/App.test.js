import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Sri Ecovibe Substrates/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders products section heading', () => {
  render(<App />);
  const productsHeading = screen.getByText(/Our Products/i);
  expect(productsHeading).toBeInTheDocument();
});