/* eslint-disable no-undef */

/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call Register function when Register button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import RegisterInput from './RegisterInput';
import store from '../states';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterInput />
          </BrowserRouter>
        </Provider>,
      );
    });
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(nameInput, 'nametest');

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterInput />
          </BrowserRouter>
        </Provider>,
      );
    });
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'emailtest');

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterInput />
          </BrowserRouter>
        </Provider>,
      );
    });
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterInput register={mockRegister} />
        </BrowserRouter>
      </Provider>,
    );

    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nametest');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
