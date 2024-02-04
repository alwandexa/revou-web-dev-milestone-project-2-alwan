import React, { FC } from 'react';

import { Form, Input, Select, Space } from "antd";

interface AddressInformationProps {
  form: any;
}

const AddressInformation: FC<AddressInformationProps> = ({ form }) => {
  return (
    <Form
      form={form}
      layout="vertical"
    >
      <Form.Item
        name="Street Adress"
        label="Street Adress"
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>

      <Space>
        <Form.Item
          name="City"
          label="City"
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="State"
          label="State"
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="ZIP Code"
          label="ZIP Code"
          rules={[{ type: "string", required: true }]}
        >
          <Input type="number" />
        </Form.Item>
      </Space>

      <Form.Item
        name="Country"
        label="Country"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="Indonesia">Indonesia</Select.Option>
          <Select.Option value="America">America</Select.Option>
          <Select.Option value="China">China</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default AddressInformation;
