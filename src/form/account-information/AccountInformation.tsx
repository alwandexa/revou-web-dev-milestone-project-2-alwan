import React from 'react';

import { Form, Input } from "antd";

const AccountInformation = () => {
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");

  return (
    <>
      <Form.Item
        name="Username"
        label="Username"
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Password"
        label="Password"
        rules={[{ type: "string", pattern: validPassword, message: "Password don't meet requirement", required: true }]}
      >
        <Input.Password placeholder="Password must contain at least 8 characters, a-z, A-Z, 1-9, and !@#$%" />
      </Form.Item>

      <Form.Item
        name="Re-Password"
        label="Re-Password"
        dependencies={["Password"]}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("Password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Password that you entered do not match")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Enter password again" />
      </Form.Item></>
  );
};

export default AccountInformation;
