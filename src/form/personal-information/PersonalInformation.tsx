import React from "react";
import { DatePicker, Form, Input, Radio, Space } from "antd";
import { useTranslation } from "react-i18next";
// import i18n from "../../internalization/i18n";

const PersonalInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Form.Item
        name="Name"
        label={t("name")}
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Email"
        label={t("email")}
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>

      <Space.Compact>
        <Form.Item
          name="Birthplace"
          label={t("birthplace")}
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Birthdate"
          label={t("birthdate")}
          rules={[{ type: "date", required: true }]}
        >
          <DatePicker placeholder=""/>
        </Form.Item>
      </Space.Compact>

      <Form.Item name="Gender" label={t("gender")} rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="Male">{t("male")}</Radio>
          <Radio value="Female">{t("female")}</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default PersonalInformation;
