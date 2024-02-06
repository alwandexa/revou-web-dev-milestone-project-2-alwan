import React from 'react';
import { render, screen } from "@testing-library/react";
import PersonalInformation from "./PersonalInformation";
import { Form } from "antd";
import '@testing-library/jest-dom'

const PersonalTest = () => {
  return (
    <Form>
      <PersonalInformation />
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

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Birth Place")).toBeInTheDocument();
    expect(screen.getByText("Birth Date")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
  });

  it('renders name field', () => {
    render(<PersonalTest />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });
});
