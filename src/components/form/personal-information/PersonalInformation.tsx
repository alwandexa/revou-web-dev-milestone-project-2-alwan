import React, { memo } from "react";
import { DatePicker, Form, Input, Radio, Space } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from 'dayjs';

const PersonalInformation = memo(() => {
  const { t } = useTranslation();

  const now = dayjs();
  const eighteenYearsAgo = now.subtract(18, 'year');

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
          <DatePicker
            placeholder=""
            disabledDate={date => !date || date.isAfter(new Date())}
            defaultPickerValue={eighteenYearsAgo}
          />
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
});

export default PersonalInformation;
