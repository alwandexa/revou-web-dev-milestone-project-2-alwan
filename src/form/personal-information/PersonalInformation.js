import { Form, Input } from "antd";

const PersonalInformation = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[{ type: "text", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="birthDate"
        label="Birth Date"
        rules={[{ type: "date", required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PersonalInformation;
