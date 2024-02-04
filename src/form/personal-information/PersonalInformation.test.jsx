import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PersonalInformation from "./PersonalInformation";
import { Form } from "antd";

// jest.mock("antd", () => {
//   const actualAntd = jest.requireActual("antd");

//   return {
//     ...actualAntd,
//     Form: ({ children }) => <form>{children}</form>,
//     // Item: ({ children }) => <div>{children}</div>
//   };
// });

describe("PersonalInformation", () => {
  const mockForm = {
    setFieldsValue: jest.fn(),
    getFieldValue: jest.fn(),
  };

//   const mockForm2 = Form.useForm();

  // Render the component with the mocked form
  beforeEach(() => {

  });

  test("renders PersonalInformation component", () => {
    render(<PersonalInformation form={mockForm} />);

    // Check if the component renders without crashing
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Birth Place/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Birth Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
  });

//   it("renders the component", () => {
    // const form = {
    //   getFieldInstance: jest.fn(),
    //   scrollToField: jest.fn(),
    // };
    // render(<PersonalInformation />);
    // const personalInformation = screen.getByRole("form");
    // expect(personalInformation).toBeInTheDocument();
//   });

  // it("has the correct labels", () => {
  //     const form = {
  //         getFieldDecorator: jest.fn(),
  //         validateFields: jest.fn(),
  //     };
  //     render(<PersonalInformation form={form} />);

  //     const nameLabel = screen.getByText("Name");
  //     expect(nameLabel).toBeInTheDocument();

  //     const emailLabel = screen.getByText("Email");
  //     expect(emailLabel).toBeInTheDocument();

  //     const birthPlaceLabel = screen.getByText("Birth Place");
  //     expect(birthPlaceLabel).toBeInTheDocument();

  //     const birthDateLabel = screen.getByText("Birth Date");
  //     expect(birthDateLabel).toBeInTheDocument();

  //     const genderLabel = screen.getByText("Gender");
  //     expect(genderLabel).toBeInTheDocument();
  // });

  // it("has the correct input fields", () => {
  //     const form = {
  //         getFieldDecorator: jest.fn(),
  //         validateFields: jest.fn(),
  //     };
  //     render(<PersonalInformation form={form} />);

  //     const nameInput = screen.getByRole("textbox", { name: "Name" });
  //     expect(nameInput).toBeInTheDocument();

  //     const emailInput = screen.getByRole("textbox", { name: "Email" });
  //     expect(emailInput).toBeInTheDocument();

  //     const birthPlaceInput = screen.getByRole("textbox", { name: "Birth Place" });
  //     expect(birthPlaceInput).toBeInTheDocument();

  //     const birthDateInput = screen.getByRole("textbox", { name: "Birth Date" });
  //     expect(birthDateInput).toBeInTheDocument();

  //     const genderInput = screen.getByRole("radio", { name: "Gender" });
  //     expect(genderInput).toBeInTheDocument();
  // });

  // it("validates the form", () => {
  //     const form = Form.create();
  //     render(<PersonalInformation form={form} />);

  //     const personalInformation = screen.getByRole("form");
  //     personalInformation.onSub();

  //     const errors = personalInformation.querySelectorAll(".ant-form-item-explain-error");
  //     expect(errors.length).toBeGreaterThan(0);
  // });
});
