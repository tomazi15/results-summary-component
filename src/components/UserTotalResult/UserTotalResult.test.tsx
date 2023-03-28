import UserTotalResult from './UserTotalResult';
import { render, screen } from '@testing-library/react';

describe('UserTotalResult', () => {
  test('should render the Total result card with correct elements', async () => {
    render(<UserTotalResult />);

    const title = await screen.findByText(/Your Result/i);
    const score = await screen.findByText(/of 100/i);
    const cardFooterText = screen.getByText('higher than 65%', {
      exact: false,
    });

    expect(title).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(cardFooterText).toBeInTheDocument();
  });
});
