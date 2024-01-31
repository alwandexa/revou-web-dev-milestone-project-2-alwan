import React, { FC } from 'react';
import { Form, Input } from "antd";

interface AccountInformationProps {
  form: any;
}

const AccountInformation: FC<AccountInformationProps> = ({ form }) => {
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");

  return (
    <Form form={form} layout="vertical">
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
        rules={[{ type: "string", pattern: validPassword, required: true }]}
      >
        <Input.Password placeholder="Password must contain a-z, A-Z, 1-9, and !@#$%" />
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
                new Error("The password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Enter password again" />
      </Form.Item>
    </Form>
  );
};

export default AccountInformation;
