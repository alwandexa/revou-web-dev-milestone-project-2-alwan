import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import DexaHeader from "./DexaHeader";

describe("DexaHeader", () => {
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

  test("renders logo image", () => {
        render(
      <MemoryRouter>
        <DexaHeader />
      </MemoryRouter>
    );

    const logoImage = screen.getByAltText(/company logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  test("renders search input", () => {
        render(
      <MemoryRouter>
        <DexaHeader />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  test("renders language selector", () => {
        render(
      <MemoryRouter>
        <DexaHeader />
      </MemoryRouter>
    );

    const languageSelector = screen.getByText(/en/i);
    expect(languageSelector).toBeInTheDocument();
  });

  test("renders logout button", () => {
        render(
      <MemoryRouter>
        <DexaHeader />
      </MemoryRouter>
    );

    const logoutButton = screen.getByRole("button", { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
  });

  test("clicking logout button navigates to home page", () => {
    render(
      <MemoryRouter>
        <DexaHeader />
      </MemoryRouter>
    );

    const logoutButton = screen.getByRole("button", { name: /logout/i });

    userEvent.click(logoutButton);

    expect(window.location.pathname).toBe("/");
  });
});
