import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Donate Your 5 Cents/)).toBeInTheDocument();
  expect(screen.getByRole('button', {
    name: /sort by/i
  })).toBeInTheDocument();
});
