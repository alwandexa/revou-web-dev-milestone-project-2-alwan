import React from 'react';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PersonalInformation from "./PersonalInformation";
import { Button, Form } from "antd";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const PersonalTest = () => {
  return (
    <Form>
      <PersonalInformation />
      <Button htmlType='submit'>submit</Button>
    </Form>)
}

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

  it("renders name component", () => {
    render(<PersonalTest />);

    expect(screen.getByText(/name/i)).toBeInTheDocument();
  });

  it("renders email component", () => {
    render(<PersonalTest />);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });

  it("renders birthplace component", () => {
    render(<PersonalTest />);

    expect(screen.getByText(/birthplace/i)).toBeInTheDocument();
  });

  it("renders birthdate component", () => {
    render(<PersonalTest />);

    expect(screen.getByText(/birthdate/i)).toBeInTheDocument();
  });

  it("renders gender component", () => {
    render(<PersonalTest />);

    expect(screen.getByText(/gender/i)).toBeInTheDocument();
  });

  it("renders input required validation message", async () => {
    render(<PersonalTest />);

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(screen.getByText("'Name' is required")).toBeInTheDocument();
    }, { timeout: 1000 })

    await waitFor(() => {
      expect(screen.getByText("'Email' is required")).toBeInTheDocument();
    }, { timeout: 1000 })

    await waitFor(() => {
      expect(screen.getByText("'Birthplace' is required")).toBeInTheDocument();
    }, { timeout: 1000 })

    await waitFor(() => {
      expect(screen.getByText("'Birthdate' is required")).toBeInTheDocument();
    }, { timeout: 1000 })

    await waitFor(() => {
      expect(screen.getByText("'Gender' is required")).toBeInTheDocument();
    }, { timeout: 1000 })
  })

  it("renders email invalid validation message", async () => {
    render(<PersonalTest />);

    userEvent.type(screen.getByLabelText(/email/i), "test");

    expect(screen.getByLabelText(/email/i)).toHaveValue("test");

    await waitFor(() => {
      expect(screen.getByText("'Email' is not a valid email")).toBeInTheDocument();
    }, { timeout: 1000 })
  })
});
