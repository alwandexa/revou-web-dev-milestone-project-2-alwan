import React from "react";
import { render, screen } from "@testing-library/react";
import SideInfo from "./SideInfo";
import '@testing-library/jest-dom';

describe("SideInfo", () => {
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

  test("renders title", () => {
    render(<SideInfo />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent(/DexaDemy/i);
  });

  test("renders registration text", () => {
    render(<SideInfo />);
    expect(screen.getByText(/registration/i)).toBeInTheDocument();
  });

  test("renders button with correct text", () => {
    render(<SideInfo />);
    expect(screen.getByRole("button")).toHaveTextContent(/why-choose-us/i);
  });
});
