import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoginCard from './LoginCard';
import { MemoryRouter } from 'react-router-dom';

describe("PersonalInformation", () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });

    it("renders username component", () => {
        render(<MemoryRouter><LoginCard /></MemoryRouter>);

        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    });

    it("renders password component", () => {
        render(<MemoryRouter><LoginCard /></MemoryRouter>);

        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    // it('should display error message when invalid username is entered', async () => {
    //     render(<MemoryRouter><LoginCard /></MemoryRouter>);

    //     const usernameInput = screen.getByLabelText('username');
    //     userEvent.type(usernameInput, 'invalidusername');

    //     const passwordInput = screen.getByLabelText('password');
    //     userEvent.type(passwordInput, 'validpassword');

    //     const submitButton = screen.getByRole('submit-button');
    //     userEvent.click(submitButton);

    //     console.log(submitButton)

    //     await waitFor(() => {
    //         const errorMessage = screen.getByText('Check your username or password');
    //         expect(errorMessage).toBeInTheDocument();
    //     }, { timeout: 2000 });
    // });
});
