import React from 'react';
import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom'; // Commented out for now
import Quiz from './Quiz';

test('renders quiz title', () => {
    render(<Quiz />);
    const titleElement = screen.getByText(/My Questions/i);
    expect(titleElement).toBeInTheDocument();
});
