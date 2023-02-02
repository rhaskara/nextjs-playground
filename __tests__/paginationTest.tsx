import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination', () => {
  it('renders correctly', () => {
    const onPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );
    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
    expect(getByText('Prev')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
  });

  it('calls onPageChange when clicking on a page number', () => {
    const onPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );
    fireEvent.click(getByText('3'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when clicking on the Prev button', () => {
    const onPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );
    fireEvent.click(getByText('Prev'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange when clicking on the Next button', () => {
    const onPageChange = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );
    fireEvent.click(getByText('Next'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
