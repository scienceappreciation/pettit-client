import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ShareButton from './ShareButton.js';


it('renders to the page', () => {
    // Arrange
    render(<ShareButton />);

    // Act
    const share = screen.getByRole('button', { name: /Share/i });

    // Assert
    expect(share).toBeInTheDocument();
});

it('renders a share menu when clicked', async () => {
     // Arrange
     render(<ShareButton />);

     // Act
     const share = screen.getByRole('button', { name: /Share/i });
     user.click(share);

     await screen.findByRole("menu", { name: /Share/i });
 
     // Assert
     expect(screen.getByRole("menu", { name: /Share/i })).toBeInTheDocument();
});

it('menu has a close button', async () => {
    // Arrange
    render(<ShareButton />);

    // Act
    const share = screen.getByRole('button', { name: /Share/i });
    user.click(share);

    await screen.findByRole("menu", { name: /Share/i });
    const close = screen.getByRole('button', { name: /close/i });

    // Assert
    expect(close).toBeInTheDocument();
});