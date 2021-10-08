import React from 'react'
import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar';

describe('Navbar', () => {
    
    const navbarText = "Ahmed's ReacTesting 🥽🧪🔬⚗️";
    const githubLinkOfRepo = 'https://github.com/aahmedfaraz/my-react-testing-library-corner';

    beforeEach(() => {
        render(<Navbar text={navbarText} />)
    })

    test('should render correct text in heading', () => {
        const heading = screen.getByTestId('nav-heading');
        expect(heading.textContent).toBe(navbarText);
    })

    test('should render github link', () => {
        const githubLink = screen.getByTestId('github-link');
        expect(githubLink).toBeInTheDocument();
    })

    test('should render github link with correct href', () => {
        const githubLink = screen.getByTestId('github-link');
        expect(githubLink).toHaveAttribute('href', githubLinkOfRepo);
    })

    test('should render navbar links', () => {
        const navLinks = screen.queryAllByTestId('nav-link');
        expect(navLinks.length).toEqual(4);
    })
    
})