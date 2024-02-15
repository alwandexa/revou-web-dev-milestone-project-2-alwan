import React from "react";
import { render, screen } from "@testing-library/react";
import LearningHistory from "./LearningHistory";
import "@testing-library/jest-dom";

describe("LearningHistory", () => {
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

  test("renders timeline items", () => {
    render(<LearningHistory />);
    const timelineItems = screen.getAllByRole("listitem");
    expect(timelineItems).toHaveLength(6);
  });

  test("renders timeline item titles", () => {
    render(<LearningHistory />);
    expect(screen.getByText(/Intro to React/i)).toBeInTheDocument();
    expect(screen.getByText(/Advance CSS/i)).toBeInTheDocument();
    expect(screen.getByText(/Advance HTML/i)).toBeInTheDocument();
  });

  test("renders reverse button", () => {
    render(<LearningHistory />);
    expect(
      screen.getByRole("button", { name: /reverse/i })
    ).toBeInTheDocument();
  });

  test("clicking reverse button toggles timeline order", () => {
    render(<LearningHistory />);
    const button = screen.getByRole("button", { name: /reverse/i });

    button.click();
    expect(screen.getByText(/Intro to Web Development/i)).toBeInTheDocument();

    button.click();
    expect(screen.getByText(/Intro to React/i)).toBeInTheDocument();
  });
});
