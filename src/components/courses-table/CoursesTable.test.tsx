import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import CoursesTable from "./CoursesTable";

describe("CoursesTable", () => {
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
    localStorage.setItem(
      "courses",
      JSON.stringify([
        [
          {
            key: "1",
            course_name: "Course 1",
            instructor: "Instructor 1",
            enroll_date: new Date(),
          },
        ],
      ])
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("renders courses table", () => {
    render(
      <MemoryRouter>
        <CoursesTable />
      </MemoryRouter>
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders add course button", () => {
    render(
      <MemoryRouter>
        <CoursesTable />
      </MemoryRouter>
    );

    expect(screen.getByRole("add-course-button")).toBeInTheDocument();
  });
});
