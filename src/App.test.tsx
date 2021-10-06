import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  
  beforeEach(() => {
    render(<App />);
  })

  test('should render itself', () => {
    const appContainer = screen.getByTestId('app');
    expect(appContainer).toBeInTheDocument();
  });

  test('should render nav', () => {
    const navbar = screen.getByTestId('nav');
    expect(navbar).toBeInTheDocument();
  });
  
})

