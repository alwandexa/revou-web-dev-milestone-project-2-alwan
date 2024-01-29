import { Form, Input } from "antd";

const AddressInformation = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item
        name="Street Adress"
        label="Street Adress"
        rules={[{ type: "text", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="City"
        label="City"
        rules={[{ type: "text", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="State"
        label="State"
        rules={[{ type: "text", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="ZIP Code"
        label="ZIP Code"
        rules={[{ type: "text", required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default AddressInformation;
