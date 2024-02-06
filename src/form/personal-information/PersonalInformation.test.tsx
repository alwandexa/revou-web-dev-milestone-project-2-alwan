import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import PersonalInformation from "./PersonalInformation";
import { Button, Form } from "antd";
import '@testing-library/jest-dom';

const PersonalTest = () => {
  return (
    <Form>
      <PersonalInformation />
      <Button type="primary" htmlType='submit'>
        Next
      </Button>
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

  it("renders PersonalInformation component", () => {
    render(<PersonalTest />);

    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Birthplace/i)).toBeInTheDocument();
    expect(screen.getByText(/Birthdate/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender/i)).toBeInTheDocument();
  });

  it("renders name field", () => {
    render(<PersonalTest />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it("renders validation message", () => {
    render(<PersonalTest />)

    fireEvent.click(screen.getByText("Next"));

    expect(screen.getByText("'Name' is required")).toBeInTheDocument();
  })
});
