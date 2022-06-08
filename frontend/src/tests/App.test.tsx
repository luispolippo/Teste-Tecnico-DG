import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Home page', () => {
  test('Should render page title', () => {
    render(<App/>);
    const pageTitle = screen.getByText(/DG Solutions/);
    expect(pageTitle).toBeInTheDocument();
  });

  test('Should render inputs', () => {
    render(<App/>);
    const nameInput = screen.getByTestId('name-input');
    const dateBirthInput = screen.getByTestId('birthDate-input');
    expect(nameInput).toBeInTheDocument();
    expect(dateBirthInput).toBeInTheDocument();
  });

  test('Should render table', () => {
    render(<App/>);
    const table = screen.getByTestId('table');
    const idHead = screen.getByTestId('table-id-head');
    const nameHead = screen.getByTestId('table-name-head');
    const ageHead = screen.getByTestId('table-age-head');
    expect(table).toBeInTheDocument();
    expect(idHead).toBeInTheDocument();
    expect(nameHead).toBeInTheDocument();
    expect(ageHead).toBeInTheDocument();
  });
});