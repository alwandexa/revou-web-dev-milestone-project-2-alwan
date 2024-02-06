import { Form, Input, Select, Space } from "antd";
import { useTranslation } from 'react-i18next';

const AddressInformation = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Form.Item
        name="Street Adress"
        label={t("street-adress")}
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>

      <Space>
        <Form.Item
          name="City"
          label={t("city")}
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="State"
          label={t("state")}
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="ZIP Code"
          label={t("zip-code")}
          rules={[{ type: "string", required: true }]}
        >
          <Input type="number" />
        </Form.Item>
      </Space>

      <Form.Item
        name="Country"
        label={t("country")}
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
    </>
  );
};

export default AddressInformation;
