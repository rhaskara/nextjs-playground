import React from 'react';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import StoryCard from '../components/StoryCard';

afterEach(cleanup);

const setError = jest.fn();

test('renders story card component with data', async () => {
  const { getByTestId, getByText } = render(<StoryCard id={1} setError={setError} />);
  await waitFor(() => getByText(/By:/i));

  const storyCard = getByTestId('story-card');
  const title = getByTestId('story-title');
  const poster = getByTestId('story-subtitle');

  expect(storyCard).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(poster).toBeInTheDocument();
});

describe('StoryCard', () => {
  it('opens the external link in a new tab', () => {
    const { getByTestId } = render(<StoryCard id={123} setError={setError} />);
    const link = getByTestId('story-link') as HTMLAnchorElement;

    fireEvent.click(link);

    expect(link.target).toBe('_blank');
  });
});