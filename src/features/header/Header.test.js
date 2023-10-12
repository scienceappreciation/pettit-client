import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header.js';


it('renders to the page', async() => {
    // Arrange
    render(<Header />);

    // Act
    const header = screen.getByRole('heading');

    // Assert
    expect(header).toBeInTheDocument();
});

it('contains a navigation skipping button', () => {
    // Arrange
    render(<Header />);

    // Act
    const skip_button = screen.getByRole('button', { name: "skip-to-content" })

    // Assert
    expect(skip_button).toBeInTheDocument();
});

it ('contains a mark indicating the page is a demo', async() => {
    // Arrange
    render(<Header />);

    // Act
    const demoMark = screen.getByRole('note', { name: "demo-mark" });

    // Assert
    expect(demoMark).toBeInTheDocument();
});

it ('contains a title', async() => {
    // Arrange
    render(<Header />);

    // Act
    const title = screen.getByLabelText('title')

    // Assert
    expect(title).toBeInTheDocument();
});




