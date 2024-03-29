import React from 'react';
import { useState } from "react";
import { Alert, Button, Card, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
    const [form] = Form.useForm();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const checkCredential = () => {
        const bcrypt = require('bcryptjs');
        const users = JSON.parse(localStorage.getItem("users") as string);
        let check = false;

        users.forEach((user: any, index: number) => {
            if(user.username) {
                const checkUsername = form.getFieldValue("username") === user.username;
                const checkHash = bcrypt.compareSync(form.getFieldValue("password"), user.hash);

                if (checkUsername && checkHash) {
                    check = true;
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("userIndex", index.toString());
                    navigate("/");
                }
            }
        });

        if (!check) {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 2000);
        }
    }

    return (
        <Card className="login-card">
            <img src={process.env.PUBLIC_URL + "logo-white.svg"} alt="Company Logo" />
            <h1>{t("sign-in")}</h1>
            <p>{t("new-to-dexademy")} <a href="/registration">{t("create-account")}</a></p>
            {visible && <Alert className="login-alert" message="Check your username or password" type="error" showIcon />}
            <Form form={form} layout="vertical" onFinish={checkCredential} hideRequiredMark>
                <Form.Item
                    name="username"
                    label={t("username")}
                    rules={[{ type: "string", required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={t("password")}
                    rules={[{ type: "string", required: true }]}
                >
                    <Input.Password />
                </Form.Item>
                <p>
                    <input type="checkbox" name="" id="" />{t("keep-me-signed-in")}
                </p>
                <Button htmlType="submit" role="submit-button" className="login-button">{t("sign-in")}</Button>
            </Form>
            <p>{t("need-to-find")} <a href="/">{t("your-password")}</a></p>
        </Card>
    )
}

export default LoginCard;