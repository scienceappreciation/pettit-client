import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './Footer.js';


it('renders to the page', () => {
    // Arrange
    render(<Footer />);

    // Act
    const footer = screen.getByRole('contentinfo');

    // Assert
    expect(footer).toBeInTheDocument();
});

it('contains copyright information', () => {
    // Arrange
    render(<Footer />);

    // Act
    const footer = screen.getByRole('contentinfo');

    // Assert
    expect(footer.textContent).toMatch(/Copyright|©/gi);
});

it('contains a back to top button', () => {
    // Arrange
    render(<Footer />);

    // Act
    const backButton = screen.getByRole('button', { name: 'to-top' });

    // Assert
    expect(backButton).toBeInTheDocument();
});




