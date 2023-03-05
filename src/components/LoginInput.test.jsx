/* eslint-disable no-undef */

/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { act } from 'react-dom/test-utils';
import LoginInput from './LoginInput';
import store from '../states';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginInput />
        </BrowserRouter>
      </Provider>,
    );
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'emailtest');

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginInput />
        </BrowserRouter>
      </Provider>,
    );
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  // it('should call login function when login button is clicked', async () => {
  //   // Arrange
  //   const mockLogin = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <LoginInput />
  //       </BrowserRouter>
  //     </Provider>,
  //   );

  //   const emailInput = await screen.getByPlaceholderText('Email');
  //   await userEvent.type(emailInput, 'emailtest');
  //   const passwordInput = await screen.getByPlaceholderText('Password');
  //   await userEvent.type(passwordInput, 'passwordtest');
  //   const loginButton = await screen.getByRole('button', { name: 'Login' });

  //   // Action
  //   await userEvent.click(loginButton);

  //   // Assert
  //   expect(mockLogin).toBeCalledWith({
  //     email: 'emailtest',
  //     password: 'passwordtest',
  //   });
  // });
});
