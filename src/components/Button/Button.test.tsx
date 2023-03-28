import Button from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('should render the button with correct text', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Continue');
  });
});
