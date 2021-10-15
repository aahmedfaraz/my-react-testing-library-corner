import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from '../Form';

describe('Form Component', () => {
    
    beforeEach(() => {
        jest.useFakeTimers();
        render(<Form />)
    });
    afterEach(() => {
        jest.useRealTimers();
        cleanup();
    });

    // Test 1
    test('should render all the fieldsets', () => {
        const fieldSets = screen.getAllByRole('group');
        expect(fieldSets).toHaveLength(8);
    })

    // Test 2
    test('should have username section working fine', () => {
        const username = screen.getByTestId('username');
        const usernameBadge = screen.getByTestId('username-badge');

        expect(username).toBeInTheDocument();
        expect(usernameBadge).toBeInTheDocument();

        expect(usernameBadge).toHaveTextContent('No Status');
        fireEvent.change(username, {target: {value: 'abc'}});
        expect(usernameBadge).toHaveTextContent('Incorrect');
        fireEvent.change(username, {target: {value: 'ahmed'}});
        expect(usernameBadge).toHaveTextContent('Correct');
        fireEvent.change(username, {target: {value: 'ahmed01'}});
        expect(usernameBadge).toHaveTextContent('Correct');
        fireEvent.change(username, {target: {value: 'ahmed-faraz-12345'}});
        expect(usernameBadge).toHaveTextContent('Incorrect');
        fireEvent.change(username, {target: {value: ''}});
        expect(usernameBadge).toHaveTextContent('No Status');
    });
    
    // Test 3
    test('should have email section working fine', () => {
        const email = screen.getByTestId('email');
        const emailBadge = screen.getByTestId('email-badge');

        expect(email).toBeInTheDocument();
        expect(emailBadge).toBeInTheDocument();

        expect(emailBadge).toHaveTextContent('No Status');
        fireEvent.change(email, {target: {value: 'ahmedfaraz@.com'}});
        expect(emailBadge).toHaveTextContent('Incorrect');
        fireEvent.change(email, {target: {value: 'ahmedfaraz.contact@gmail.com'}});
        expect(emailBadge).toHaveTextContent('Correct');
        fireEvent.change(email, {target: {value: 'ahmedfaraz838383@gmail.com'}});
        expect(emailBadge).toHaveTextContent('Correct');
        fireEvent.change(email, {target: {value: 'abc@yahoo.com'}});
        expect(emailBadge).toHaveTextContent('Correct');
        fireEvent.change(email, {target: {value: 'abc23@email.com'}});
        expect(emailBadge).toHaveTextContent('Correct');
        fireEvent.change(email, {target: {value: 'ahmed@23@gmail.com'}});
        expect(emailBadge).toHaveTextContent('Incorrect');
        fireEvent.change(email, {target: {value: ''}});
        expect(emailBadge).toHaveTextContent('No Status');
    });

    // Test 4
    test('should have phone section working fine', () => {
        const phone = screen.getByTestId('phone');
        const phoneBadge = screen.getByTestId('phone-badge');

        expect(phone).toBeInTheDocument();
        expect(phoneBadge).toBeInTheDocument();

        expect(phoneBadge).toHaveTextContent('No Status');
        fireEvent.change(phone, {target: {value: '11111111111'}});
        expect(phoneBadge).toHaveTextContent('Incorrect');
        fireEvent.change(phone, {target: {value: '03111111111'}});
        expect(phoneBadge).toHaveTextContent('Correct');
        fireEvent.change(phone, {target: {value: '03222222222'}});
        expect(phoneBadge).toHaveTextContent('Correct');
        fireEvent.change(phone, {target: {value: '03aaaaaaaaa'}});
        expect(phoneBadge).toHaveTextContent('Incorrect');
        fireEvent.change(phone, {target: {value: '00111111111'}});
        expect(phoneBadge).toHaveTextContent('Incorrect');
        fireEvent.change(phone, {target: {value: '02111111111'}});
        expect(phoneBadge).toHaveTextContent('Incorrect');
        fireEvent.change(phone, {target: {value: ''}});
        expect(phoneBadge).toHaveTextContent('No Status');
    });

    // Test 5
    test('should have password section working fine', () => {
        const password = screen.getByTestId('password');
        const passwordBadge = screen.getByTestId('password-badge');

        expect(password).toBeInTheDocument();
        expect(passwordBadge).toBeInTheDocument();

        expect(passwordBadge).toHaveTextContent('No Status');
        fireEvent.change(password, {target: {value: 'ahmed123+'}});
        expect(passwordBadge).toHaveTextContent('Incorrect');
        fireEvent.change(password, {target: {value: 'ahmed123@_-faraz123'}});
        expect(passwordBadge).toHaveTextContent('Correct');
        fireEvent.change(password, {target: {value: '@_-ahmed123'}});
        expect(passwordBadge).toHaveTextContent('Correct');
        fireEvent.change(password, {target: {value: '*+-%$£^'}});
        expect(passwordBadge).toHaveTextContent('Incorrect');
        fireEvent.change(password, {target: {value: 'abc+-'}});
        expect(passwordBadge).toHaveTextContent('Incorrect');
        fireEvent.change(password, {target: {value: 'abc abc abc'}});
        expect(passwordBadge).toHaveTextContent('Incorrect');
        fireEvent.change(password, {target: {value: ''}});
        expect(passwordBadge).toHaveTextContent('No Status');
    });

    // Test 6
    test('should have occupation section working fine', () => {
        const occupation : any = screen.getAllByTestId('occupation');
        const occupationBadge = screen.getByTestId('occupation-badge');

        occupation.forEach( (radio : any) => expect(radio).toBeInTheDocument());
        expect(occupationBadge).toBeInTheDocument();

        expect(occupationBadge).toHaveTextContent('No Status');
        fireEvent.click(occupation[0]);
        expect(occupation[0].checked).toBe(true);
        expect(occupation[1].checked).toBe(false);
        expect(occupation[occupation.length - 1].checked).toBe(false);
        expect(occupationBadge).toHaveTextContent('Correct');

        fireEvent.click(occupation[1]);
        expect(occupation[0].checked).toBe(false);
        expect(occupation[1].checked).toBe(true);
        expect(occupation[occupation.length - 1].checked).toBe(false);
        expect(occupationBadge).toHaveTextContent('Correct');

        fireEvent.click(occupation[occupation.length - 1]);
        expect(occupation[0].checked).toBe(false);
        expect(occupation[1].checked).toBe(false);
        expect(occupation[occupation.length - 1].checked).toBe(true);
        expect(occupationBadge).toHaveTextContent('Incorrect');

        fireEvent.click(occupation[0]);
        expect(occupation[0].checked).toBe(true);
        expect(occupation[1].checked).toBe(false);
        expect(occupation[occupation.length - 1].checked).toBe(false);
        expect(occupationBadge).toHaveTextContent('Correct');
    });
    
    // Test 7
    test('should have hobbies section working fine', () => {
        const hobbies = screen.getAllByTestId('hobbies');
        const hobbiesBadge = screen.getByTestId('hobbies-badge');

        hobbies.forEach((checkbox:any) => expect(checkbox).toBeInTheDocument());
        expect(hobbiesBadge).toBeInTheDocument()

        expect(hobbiesBadge).toHaveTextContent('No Status');
        // Checked boxes => f f f f
        // Check 0 - [Checked boxes => t f f f]
        fireEvent.click(hobbies[0]);
        expect(hobbiesBadge).toHaveTextContent('Correct');
        // Check 1 - [Checked boxes => t t f f]
        fireEvent.click(hobbies[1]);
        expect(hobbiesBadge).toHaveTextContent('Correct');
        // Uncheck 0 - [Checked boxes => f t f f]
        fireEvent.click(hobbies[0]);
        expect(hobbiesBadge).toHaveTextContent('Correct');
        // Uncheck 1 - [Checked boxes => f f f f]
        fireEvent.click(hobbies[1]);
        expect(hobbiesBadge).toHaveTextContent('No Status');
        // Check 2 - [Checked boxes => f f t f]
        fireEvent.click(hobbies[2]);
        expect(hobbiesBadge).toHaveTextContent('Correct');
        // Check anonymous - [Checked boxes => f f t t]
        fireEvent.click(hobbies[hobbies.length - 1]);
        expect(hobbiesBadge).toHaveTextContent('Incorrect');
        // Check 0 - [Checked boxes => t f t t]
        fireEvent.click(hobbies[0]);
        expect(hobbiesBadge).toHaveTextContent('Incorrect');
        // Uncheck 2 - [Checked boxes => t f f t]
        fireEvent.click(hobbies[2]);
        expect(hobbiesBadge).toHaveTextContent('Incorrect');
        // Uncheck anonymous - [Checked boxes => t f f f]
        fireEvent.click(hobbies[hobbies.length - 1]);
        expect(hobbiesBadge).toHaveTextContent('Correct');
        // Uncheck 0 - [Checked boxes => f f f f]
        fireEvent.click(hobbies[0]);
        expect(hobbiesBadge).toHaveTextContent('No Status');
    })

    // Test 8
    test('should have click-event section working fine', () => {
        let greetingButton = screen.getByTestId('click-event-greeting');
        let morningButton = screen.getByTestId('click-event-morning');
        let afternoonButton = screen.getByTestId('click-event-afternoon');
        let textHeading : any = screen.getByTestId('click-event-text');

        expect(textHeading).toHaveTextContent('Click any button.');

        fireEvent.click(greetingButton);
        expect(textHeading).toHaveTextContent('👋 Hi there Champ.');

        fireEvent.click(morningButton);
        expect(textHeading).toHaveTextContent('🌄 Good Morning Champ.');

        fireEvent.click(afternoonButton);
        expect(textHeading).toHaveTextContent('☀️ Good Afternoon Champ.');
    })

    // Test 9 
    test('should have timer-button section working fine', () => {
        let button = screen.getByTestId('timer-button');
        let text = screen.getByTestId('timer-text');

        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();

        expect(text).toHaveTextContent("");
        fireEvent.click(button);
        jest.advanceTimersByTime(5000);
        expect(text).toHaveTextContent("👋 Hi there Champ.");
    })

})