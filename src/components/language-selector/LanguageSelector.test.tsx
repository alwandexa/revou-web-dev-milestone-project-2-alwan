import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSelector from "./LanguageSelector";
import i18n from "../../internalization/i18n";
import "@testing-library/jest-dom";

describe("LanguageSelector", () => {
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

  beforeEach(() => {
    i18n.changeLanguage("en");
  });

  test("renders select with default English option", () => {
    render(<LanguageSelector />);
    expect(screen.getByTitle(/en/i)).toBeInTheDocument();
  });

  test("changes language to Indonesian when ID option selected", () => {
    render(<LanguageSelector />);

    userEvent.click(screen.getByRole("combobox"));
    userEvent.click(screen.getByTitle(/id/i));

    expect(i18n.language).toBe("id");
  });
});
