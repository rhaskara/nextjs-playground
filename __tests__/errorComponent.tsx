import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from '../components/ErrorComponent';

describe('ErrorComponent', () => {
  it('renders error message and reload button', () => {
    const message = 'Error: Something went wrong';
    const { getByTestId } = render(<ErrorComponent message={message} />);

    expect(getByTestId('error-message')).toBeInTheDocument();
    expect(getByTestId('error-reload-button')).toBeInTheDocument();
  });
});