import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Form', () => {
  test('Button should be disabled', () => {
    render(<App/>);
    const formButton = screen.getByTestId('form-button');
    expect(formButton).toBeInTheDocument();
    expect(formButton).toBeDisabled();
  });

  test('Button should enable when inputs is filled', () => {
    render(<App/>);
    const nameInput = screen.getByTestId('name-input');
    const birthDateInput = screen.getByTestId('birthDate-input');
    const formButton = screen.getByTestId('form-button');
    
    expect(formButton).toBeDisabled();

    userEvent.type(nameInput, 'Guilherme Polippo');
    fireEvent.change(birthDateInput, {target: {value: '1994-05-16'}})
    
    expect(nameInput).toHaveValue('Guilherme Polippo');
    expect(birthDateInput).toHaveValue('1994-05-16');

    expect(formButton).not.toBeDisabled();
  });
});