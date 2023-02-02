import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from '../components/ErrorComponent';

describe('ErrorComponent', () => {
  it('renders error message and reload button', () => {
    const message = 'Error: Something went wrong';
    const { getByTestId } = render(<ErrorComponent message={message} />);

    const errorContainer = getByTestId('error-container');
    expect(errorContainer).toMatchInlineSnapshot(`
      <div
        class="styles__ErrorContainer-sc-lk27l2-0 fqTTev"
        data-testid="error-container"
      >
        <h3
          class="styles__ErrorText-sc-lk27l2-1 hHPurl"
          data-testid="error-message"
        >
          Error: Something went wrong
        </h3>
        <button
          class="styles__ReloadButton-sc-lk27l2-2 fYjxZY"
          data-testid="error-reload-button"
        >
          Reload
        </button>
      </div>
    `);
    expect(getByTestId('error-message')).toBeInTheDocument();
    expect(getByTestId('error-reload-button')).toBeInTheDocument();
  });
});