import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountInformation from "./AccountInformation";
import '@testing-library/jest-dom';
import { Form } from "antd";

const AccountInformationTest = () => {
  return (
    <Form>
      <AccountInformation />
      <button type="submit">submit</button>
    </Form>
  );
};

describe("AccountInformation", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
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

  it("renders username input", () => {
    render(<AccountInformationTest />);
    expect(screen.getByLabelText("username")).toBeInTheDocument();
  });

  it("renders password input", () => {
    render(<AccountInformationTest />);
    expect(screen.getByLabelText("password")).toBeInTheDocument();
  });

  it("renders confirm password input", () => {
    render(<AccountInformationTest />);
    expect(screen.getByLabelText("re-password")).toBeInTheDocument();
  });

  it("shows error if passwords don't match", async () => {
    render(<AccountInformationTest />);

    const passwordInput = screen.getByLabelText("password");
    const confirmPasswordInput = screen.getByLabelText("re-password");

    userEvent.type(passwordInput, "password123");
    userEvent.type(confirmPasswordInput, "password456");

    expect(
      await screen.findByText("password-not-match")
    ).toBeInTheDocument();
  });

  it("shows error if password is invalid format", async () => {
    render(<AccountInformationTest />);

    const passwordInput = screen.getByLabelText("password");

    userEvent.type(passwordInput, "invalid");

    expect(
      await screen.findByText("password-validation")
    ).toBeInTheDocument();
  });
});
