import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

import MaterialUIForm from '../MaterialUIForm';

describe('MaterialUIForm Component', () => {
    beforeEach(() => render(<MaterialUIForm />));
    afterEach(cleanup);

    // Field set 1
    // mui-button 3
    // mui-button-text

    // Field set 2
    // icon-heading 2
    // mat-done mat-info mat-check
    // mui-info mui-add mui-account
    
    // Field set 3
    // mat-icon-button
    // mat-home-icon
    // mat-icon-button-text

    // Field set 4
    // mui-icon-button
    // mui-info-icon
    // mui-icon-button-text
    
    // Field set 5
    // card 2
    // card-header
    // card-react-button
    // card-action-area
    // card-media

    // Field set 6
    // list-list-item 4
    // list-list-item-icon 4
    // list-list-item-text 4

    
    // Field set 7
    // modal-open-button
    // modal
    // modal-title
    // modal-text
    // modal-close-button
    
    // Field set 8
    // drawer-open-button
    // drawer
    // drawer-list-item 4
    // drawer-list-item-icon 4
    // drawer-list-item-text 4
})