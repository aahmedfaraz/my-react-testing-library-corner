import React from 'react'
import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar';

describe('Navbar', () => {
    
    const navbarText = "Ahmed's ReacTesting 🥽🧪🔬⚗️";

    beforeEach(() => {
        render(<Navbar text={navbarText} />)
    })

    test('should render correct text in heading', () => {
        const heading = screen.getByTestId('nav-heading');
        expect(heading.textContent).toBe(navbarText);
    })
    
})