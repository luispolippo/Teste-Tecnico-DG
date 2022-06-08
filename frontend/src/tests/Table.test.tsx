import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Table', () => {
  test('Should render users correctly', async () => {

    mockedAxios.get.mockResolvedValue({
      data: [
        { id: 1, name: 'João', age: 16 },
        { id: 2, name: 'José', age: 25 },
        { id: 3, name: 'Guilherme', age: 28 },
      ]
    });

    render(<App/>);

    const userId0 = await screen.findByTestId('id-table-cell-0');
    const userName0 = await screen.findByTestId('name-table-cell-0');
    const userAge0 = await screen.findByTestId('age-table-cell-0');

    expect(userName0).toBeInTheDocument();
    expect(userId0).toBeInTheDocument();
    expect(userAge0).toBeInTheDocument();
    expect(userId0).toHaveTextContent('1');
    expect(userName0).toHaveTextContent('João');
    expect(userAge0).toHaveTextContent('16');

    const userId1 = screen.getByTestId('id-table-cell-1');
    const userName1 = screen.getByTestId('name-table-cell-1');
    const userAge1 = screen.getByTestId('age-table-cell-1');

    expect(userName1).toBeInTheDocument();
    expect(userId1).toBeInTheDocument();
    expect(userAge1).toBeInTheDocument();
    expect(userId1).toHaveTextContent('2');
    expect(userName1).toHaveTextContent('José');
    expect(userAge1).toHaveTextContent('25');

    const userId2 = screen.getByTestId('id-table-cell-2');
    const userName2 = screen.getByTestId('name-table-cell-2');
    const userAge2 = screen.getByTestId('age-table-cell-2');

    expect(userName2).toBeInTheDocument();
    expect(userId2).toBeInTheDocument();
    expect(userAge2).toBeInTheDocument();
    expect(userId2).toHaveTextContent('3');
    expect(userName2).toHaveTextContent('Guilherme');
    expect(userAge2).toHaveTextContent('28');

  });
});