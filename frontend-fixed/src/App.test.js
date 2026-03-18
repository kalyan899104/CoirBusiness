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

test('renders Market Insight heading', () => {
  render(<App />);
  const marketHeading = screen.getByText(/Market Insight/i);
  expect(marketHeading).toBeInTheDocument();
});

test('renders Premium Markets block', () => {
  render(<App />);
  const premiumBlock = screen.getByText(/Premium Markets/i);
  expect(premiumBlock).toBeInTheDocument();
});

test('renders Pro Tip section', () => {
  render(<App />);
  const proTip = screen.getByText(/Pro Tip/i);
  expect(proTip).toBeInTheDocument();
});