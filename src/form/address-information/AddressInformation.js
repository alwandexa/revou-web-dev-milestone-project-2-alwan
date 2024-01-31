import { Form, Input, Select, Space } from "antd";
import { Option } from "antd/es/mentions";

const AddressInformation = ({ form }) => {
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
          rules={[{ type: "any", required: true }]}
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
            message: "Please select your favourite colors!",
          },
        ]}
      >
        <Select>
          <Option value="Indonesia">Indonesia</Option>
          <Option value="America">America</Option>
          <Option value="China">China</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default AddressInformation;
