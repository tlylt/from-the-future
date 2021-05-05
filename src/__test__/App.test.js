import { render, screen } from '@testing-library/react';
import App from './../App';

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByRole('heading', {
    name: /from the future/i
  })).toBeInTheDocument();
  expect(screen.getByText(/Donate Your 5 Cents/)).toBeInTheDocument();
  expect(screen.getByRole('button', {
    name: /sort by/i
  })).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

