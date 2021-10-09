import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

import MaterialUIForm from '../MaterialUIForm';

describe('MaterialUIForm Component', () => {
    beforeEach(() => render(<MaterialUIForm />));
    afterEach(cleanup);

    test('should render MUI Button', () => {
        const muiButton = screen.getByTestId('mui-button');
        expect(muiButton).toBeInTheDocument();
        expect(muiButton).toHaveTextContent('Ahmed');
    })

    test('should have MUI Button working properly', () => {
        const muiButton = screen.getByTestId('mui-button');
        const text1 = screen.getByTestId('text1');

        expect(text1).toHaveTextContent('Ahmed');
        fireEvent.click(muiButton);
        expect(text1).toHaveTextContent('Faraz');
    })
    
    test('should have Google Icon button working properly when click on IconButton', () => {
        const iconButton = screen.getByTestId('google-icon-button');
        const text2 = screen.getByTestId('text2');

        expect(iconButton).toBeInTheDocument();
        expect(text2).toBeInTheDocument();
        expect(text2).toHaveTextContent('Ahmed2');

        fireEvent.click(iconButton);
        expect(text2).toHaveTextContent('Faraz2');
    })
    
    test('should have Google Icon button working properly when click on icon only', () => {
        const icon = screen.getByTestId('google-home-icon');
        const text2 = screen.getByTestId('text2');

        expect(icon).toBeInTheDocument();
        expect(icon).toHaveTextContent('home');
        expect(text2).toBeInTheDocument();
        expect(text2).toHaveTextContent('Ahmed2');

        fireEvent.click(icon);
        expect(text2).toHaveTextContent('Faraz2');
    })

    test('should have MUI Icon button working properly when click on IconButton', () => {
        const iconButton = screen.getByTestId('mui-icon-button');
        const text3 = screen.getByTestId('text3');

        expect(iconButton).toBeInTheDocument();
        expect(text3).toBeInTheDocument();
        expect(text3).toHaveTextContent('Ahmed3');

        fireEvent.click(iconButton);
        expect(text3).toHaveTextContent('Faraz3');
    })
    
    test('should have MUI Icon button working properly when click on icon only', () => {
        const icon = screen.getByTestId('mui-info-icon');
        const text3 = screen.getByTestId('text3');

        expect(icon).toBeInTheDocument();
        expect(text3).toBeInTheDocument();
        expect(text3).toHaveTextContent('Ahmed3');

        fireEvent.click(icon);
        expect(text3).toHaveTextContent('Faraz3');
    })
    
})