import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

import MaterialUIForm from '../MaterialUIForm';

describe('MaterialUIForm Component', () => {
    beforeEach(() => render(<MaterialUIForm />));
    afterEach(cleanup);

    // Field set 1
    test('should render MUI buttons, text and functionalities.', () => {
        const buttons = screen.getAllByTestId('mui-button');
        const text = screen.getByTestId('mui-button-text');

        buttons.forEach(button => expect(button).toBeInTheDocument());
        expect(text).toBeInTheDocument();

        expect(text).toHaveTextContent('Click any button.');
        fireEvent.click(buttons[0]);
        expect(text).toHaveTextContent('👋 Hi there Champ.');
        fireEvent.click(buttons[1]);
        expect(text).toHaveTextContent('🌄 Good Morning Champ.');
        fireEvent.click(buttons[2]);
        expect(text).toHaveTextContent('☀️ Good Afternoon Champ.');
    });
    

    // Field set 2
    test('should render all Material and MUI Icons.', () => {
        const headings = screen.getAllByTestId('icon-heading');
        const matIcons = screen.getAllByTestId('mat-icon');
        const muiIcons = screen.getAllByTestId('mui-icon');

        headings.forEach(heading => expect(heading).toBeInTheDocument());
        matIcons.forEach(icon => expect(icon).toBeInTheDocument());
        muiIcons.forEach(icon => expect(icon).toBeInTheDocument());
    });
    
    
    // Field set 3
    // Clicking IconButton
    test('should render Material Icon with proper functionality on clicking button.', () => {
        const iconButton = screen.getByTestId('mat-icon-button');
        const text = screen.getByTestId('mat-icon-button-text');

        expect(iconButton).toBeInTheDocument();
        expect(text).toBeInTheDocument();

        expect(text).toHaveTextContent('This is default text.');
        fireEvent.click(iconButton);
        expect(text).toHaveTextContent('This is 🏠Home icon.');
    });
    // Clicking Icon
    test('should render Material Icon with proper functionality on clicking icon.', () => {
        const icon = screen.getByTestId('mat-home-icon');
        const text = screen.getByTestId('mat-icon-button-text');
        expect(icon).toBeInTheDocument();
        expect(text).toBeInTheDocument();

        expect(text).toHaveTextContent('This is default text.');
        fireEvent.click(icon);
        expect(text).toHaveTextContent('This is 🏠Home icon.');
    });

    // Field set 4
    // Clicking IconButton
    test('should render Material Icon with proper functionality on clicking button.', () => {
        const iconButton = screen.getByTestId('mui-icon-button');
        const text = screen.getByTestId('mui-icon-button-text');

        expect(iconButton).toBeInTheDocument();
        expect(text).toBeInTheDocument();

        expect(text).toHaveTextContent('This is default text.');
        fireEvent.click(iconButton);
        expect(text).toHaveTextContent('This is ℹ️ Info icon');
    });
    // Clicking Icon
    test('should render Material Icon with proper functionality on clicking icon.', () => {
        const icon = screen.getByTestId('mui-info-icon');
        const text = screen.getByTestId('mui-icon-button-text');
        expect(icon).toBeInTheDocument();
        expect(text).toBeInTheDocument();

        expect(text).toHaveTextContent('This is default text.');
        fireEvent.click(icon);
        expect(text).toHaveTextContent('This is ℹ️ Info icon');
    });
    
    // Field set 5
    // card 2
    // card-header
    // card-react-button
    // card-action-area
    // card-media
    test('should render both cards', () => {
        const cards = screen.getAllByTestId('card');
        cards.forEach(card => expect(card).toBeInTheDocument());
    })
    test('should render first card\'s header and button, and button functionality.', () => {
        const cardHeader = screen.getByTestId('card-header');
        const cardButton = screen.getByTestId('card-react-button');

        expect(cardHeader).toHaveTextContent('React');
        expect(cardButton).toBeInTheDocument();

        expect(cardButton).toHaveAttribute('href', 'https://reactjs.org/');
    })
    test('should render second card\'s action area and media, and button functionality.', () => {
        const cardActionArea = screen.getByTestId('card-action-area');
        const cardMedia = screen.getByTestId('card-media');

        expect(cardActionArea).toBeInTheDocument();
        expect(cardMedia).toBeInTheDocument();

        expect(cardActionArea).toHaveAttribute('href','https://en.wikipedia.org/wiki/Andromeda_Galaxy');
        expect(cardMedia).toHaveAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg');
    })
    
    // Field set 6
    test('should render all list items, icons and texts', () => {
        const listItems = screen.getAllByTestId('list-list-item');
        const listItemIcons = screen.getAllByTestId('list-list-item-icon');
        const listItemTexts = screen.getAllByTestId('list-list-item-text');

        listItems.forEach(item => expect(item).toBeInTheDocument());
        listItemIcons.forEach(icon => expect(icon).toBeInTheDocument());
        listItemTexts.forEach(text => expect(text).toBeInTheDocument());

        listItemTexts.forEach((text, index) => expect(text).toHaveTextContent(`User ${index + 1}`));
    })
    
    // Field set 7
    test('should render modal when clicking button else it should be hidden', () => {
        const modalOpenButton = screen.getByTestId('modal-open-button');
        
        // Button should render but not modal
        expect(modalOpenButton).toBeInTheDocument();
        expect(screen.queryByTestId('modal')).toBeNull();
        
        // EVENT - Open modal
        fireEvent.click(modalOpenButton);

        // Get title text closeButton
        const modalCloseButton : any = screen.queryByTestId('modal-close-button');

        // Modal and elements should be visible
        expect(screen.queryByTestId('modal')).toBeVisible();
        expect(screen.queryByTestId('modal-title')).toBeVisible();
        expect(screen.queryByTestId('modal-text')).toBeVisible();
        expect(screen.queryByTestId('modal-close-button')).toBeVisible();
        // with correct text
        expect(screen.queryByTestId('modal-title')).toHaveTextContent('Demo Modal');
        expect(screen.queryByTestId('modal-text')).toHaveTextContent('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatibus maxime sint praesentium tempore, reprehenderit quasi ut nesciunt odit perspiciatis?');
        
        // EVENT - Close Modal
        fireEvent.click(modalCloseButton);
        expect(screen.queryByTestId('modal')).toBeVisible();
        // OR
        expect(screen.queryByTestId('modal')).toBeInTheDocument();
        // but inner elements will be gone
        expect(screen.queryByTestId('modal-title')).not.toBeVisible();
        expect(screen.queryByTestId('modal-text')).not.toBeVisible();
        expect(screen.queryByTestId('modal-close-button')).not.toBeVisible();
    })
    
    // Field set 8
    test('should render modal when clicking button else it should be hidden', () => {
        const drawerOpenButton = screen.getByTestId('drawer-open-button');
        
        // Button should render but not drawer
        expect(drawerOpenButton).toBeInTheDocument();
        expect(screen.queryByTestId('drawer')).toBeNull();
        expect(screen.queryAllByTestId('drawer-list-item')).toHaveLength(0);
        expect(screen.queryAllByTestId('drawer-list-item-icon')).toHaveLength(0);
        expect(screen.queryAllByTestId('drawer-list-item-text')).toHaveLength(0);
        
        // EVENT - Open drawer
        fireEvent.click(drawerOpenButton);

        expect(screen.queryByTestId('drawer')).toBeInTheDocument();
        expect(screen.queryAllByTestId('drawer-list-item')).toHaveLength(4);
        expect(screen.queryAllByTestId('drawer-list-item-icon')).toHaveLength(4);
        expect(screen.queryAllByTestId('drawer-list-item-text')).toHaveLength(4);
    })
    
})