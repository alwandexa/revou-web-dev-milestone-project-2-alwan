import React from 'react';
import { render, screen } from "@testing-library/react";
import UserData from "./UserData";
import '@testing-library/jest-dom';

describe("UserData", () => {
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
      "users",
      JSON.stringify([
        {
          Name: "bambang",
          City: "semarang",
          Birthdate: new Date("2000-02-21"),
          Birthplace: "jakarta",
        },
      ])
    );

    localStorage.setItem("userIndex", "0");
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("renders user name", () => {
    render(<UserData />);
    expect(screen.getByText(/bambang/i)).toBeInTheDocument();
  });

  it("renders user city", () => {
    render(<UserData />);
    expect(screen.getByText(/semarang/i)).toBeInTheDocument();
  });

//   it("renders formatted birthdate", () => {
//       render(<UserData />);
//       expect(screen.getByDisplayValue("2/21/2000")).toBeInTheDocument();
//   });

  it("renders user birthplace", () => {
    render(<UserData />);
    expect(screen.getByText(/jakarta/i)).toBeInTheDocument();
  });
});
