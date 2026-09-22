import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from './contact';

describe('Contact', () => {
  it('shows the work-with-me callout and contact details', () => {
    render(<Contact />);

    expect(screen.getByText(/let's work together/i)).toBeInTheDocument();
    expect(screen.getByText(/available for freelance work/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });
});
