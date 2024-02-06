import { Form, Input } from "antd";
import { useTranslation } from 'react-i18next';

const AccountInformation = () => {
  const { t } = useTranslation();
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");

  return (
    <>
      <Form.Item
        name="Username"
        label={t("username")}
        rules={[{ type: "string", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Password"
        label={t("password")}
        rules={[{ type: "string", pattern: validPassword, message: t("password-validation"), required: true }]}
      >
        <Input.Password placeholder={t("password-placeholder")} />
      </Form.Item>

      <Form.Item
        name="Re-Password"
        label={t("re-password")}
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
                new Error(t("password-not-match"))
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder={t("re-password-placeholder")} />
      </Form.Item></>
  );
};

export default AccountInformation;
