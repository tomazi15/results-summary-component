import UserSkillResult from './UserSkillResult';
import { render, screen } from '@testing-library/react';

describe('UserSkillResult', () => {
  test('should render summery section with all the elements', async () => {
    const scoreDataProps = [
      {
        category: 'Verbal',
        score: 61,
        icon: '../../../assets/images/icon-verbal.svg',
      },
      {
        category: 'Visual',
        score: 72,
        icon: '../../../assets/images/icon-visual.svg',
      },
    ];

    render(<UserSkillResult scoreData={scoreDataProps} />);

    const title = await screen.findByText(/Summary/i);
    const verbalScore = await screen.findByText(/Verbal/i);
    const visualScore = await screen.findByText(/Visual/i);

    expect(title).toBeInTheDocument();
    expect(verbalScore).toBeInTheDocument();
    expect(visualScore).toBeInTheDocument();
  });
});
