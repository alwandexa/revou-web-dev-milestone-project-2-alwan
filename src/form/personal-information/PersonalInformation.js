import { DatePicker, Form, Input, Radio, Space } from "antd";

const PersonalInformation = ({ form }) => {
  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="Name"
        label="Name"
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Email"
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>

      <Space.Compact>
        <Form.Item
          name="Birth Place"
          label="Birth Place"
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Birth Date"
          label="Birth Date"
          rules={[{ type: "date", required: true }]}
        >
          <DatePicker />
        </Form.Item>
      </Space.Compact>
    </Form>
  );
};

export default PersonalInformation;
