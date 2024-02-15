import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

import AddCourseCard from "./AddCourseCard";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(({ to }) => `Redirected to ${to}`),
}));

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
        expect(screen.getByLabelText("course")).toBeInTheDocument();
    });

    it("renders instructor input field", () => {
        render(<MemoryRouter> <AddCourseCard /></ MemoryRouter>);
        expect(screen.getByLabelText("instructor")).toBeInTheDocument();
    });

    it("renders add button", () => {
        render(<MemoryRouter> <AddCourseCard /></ MemoryRouter>);
        expect(screen.getByText("add")).toBeInTheDocument();
    });


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
