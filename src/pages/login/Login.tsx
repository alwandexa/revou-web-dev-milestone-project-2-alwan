import { Button, Card, Form, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";

const Login = () => {
    const [form] = Form.useForm();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const checkCredential = () => {
        const bcrypt = require('bcryptjs');
        const users = JSON.parse(localStorage.getItem("users") as string);
        let check = false;

        users.forEach((user: any, index: number) => {
            const checkUsername = form.getFieldValue("username") === user.username;
            const checkHash = bcrypt.compareSync(form.getFieldValue("password"), user.hash);

            if (checkUsername && checkHash) {
                check = true;
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userIndex", index.toString());
                navigate("/");
            }
        });

        if (!check) {
            alert(t("wrong-username-or-password"));
        }
    }

    return (
        <>
            <Layout>
                <Content className="login-content">
                    <Card className="login-card">
                        <img src={process.env.PUBLIC_URL + "logo-white.png"} alt="Company Logo" />
                        <h1>{t("sign-in")}</h1>
                        <p>{t("new-to-dexademy")} <a href="/registration">{t("create-account")}</a></p>
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
                            <Button htmlType="submit" className="login-button">{t("sign-in")}</Button>
                        </Form>
                        <p>{t("need-to-find")} <a href="/">{t("your-password")}</a></p>
                    </Card>
                </Content>
            </Layout>
        </>
    );
}

export default Login;