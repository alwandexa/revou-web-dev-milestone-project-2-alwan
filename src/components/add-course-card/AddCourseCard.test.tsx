import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

import AddCourseCard from "./AddCourseCard";

describe("AddCourseCard", () => {
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

    it("renders course input field", () => {
        render(<MemoryRouter> <AddCourseCard /></ MemoryRouter>);
        expect(screen.getByLabelText(/course/i)).toBeInTheDocument();
    });

    it("renders instructor input field", () => {
        render(<MemoryRouter> <AddCourseCard /></ MemoryRouter>);
        expect(screen.getByLabelText(/instructor/i)).toBeInTheDocument();
    });

    it("renders add button", () => {
        render(<MemoryRouter> <AddCourseCard /></ MemoryRouter>);
        expect(screen.getByText(/add/i)).toBeInTheDocument();
    });

    it("renders input required validation message", async () => {
        render(<MemoryRouter> <AddCourseCard /></ MemoryRouter>);

        userEvent.click(screen.getAllByText(/add/i)[1]);

        await waitFor(() => {
            expect(screen.getByText("'Course' is required")).toBeInTheDocument();
        }, { timeout: 1000 })

        await waitFor(() => {
            expect(screen.getByText("'Instructor' is required")).toBeInTheDocument();
        }, { timeout: 1000 })
    })


    // it("calls handleSubmit when form is submitted", async () => {
    //     render(
    //         <MemoryRouter initialEntries={["/add-course"]}>
    //             <AddCourseCard />
    //         </MemoryRouter>
    //     );

    //     userEvent.type(screen.getByLabelText("course"), "Test Course");
    //     userEvent.type(screen.getByLabelText("instructor"), "Test Instructor");

    //     userEvent.click(screen.getByText("add"));

    //     await waitFor(() => {
    //         expect(screen.getByText("Redirected to /")).toBeInTheDocument();
    //     });
    // });
});
