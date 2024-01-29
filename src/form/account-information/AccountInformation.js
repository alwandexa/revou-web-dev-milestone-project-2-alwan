import { Form, Input } from "antd";

const AccountInformation = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item
        name="Username"
        label="Username"
        rules={[{ type: "text", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Password"
        label="Password"
        rules={[{ type: "password", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Re-Password"
        label="Re-Password"
        rules={[{ type: "password", required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default AccountInformation;
