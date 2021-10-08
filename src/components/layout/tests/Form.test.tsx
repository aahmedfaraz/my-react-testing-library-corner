import React from 'react'
import { render, screen } from '@testing-library/react';

import Form from '../Form';

describe('Form Component', () => {
    beforeEach(() => {
        render(<Form />);
    })

    test('should render all the fieldsets', () => {
        const fieldSets = screen.getAllByRole('group');
        expect(fieldSets).not.toHaveLength(6);
        expect(fieldSets).toHaveLength(7);
        expect(fieldSets).not.toHaveLength(8);
    })
    
})