import { render, screen } from '@testing-library/react';
import AuthPage from './AuthPage';

test('renders app name', () => {
  render(<AuthPage />);
  const header = screen.getByText(/word-leapp/i);
  expect(header).toBeInTheDocument();
});

test('renders button', () => {
  render(<AuthPage />);

  const button = screen.getAllByRole('button');
  expect(button.length).toBe(2);
});
