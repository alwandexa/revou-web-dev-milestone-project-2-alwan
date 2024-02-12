import { Button, Card, Form, Input, Layout } from "antd";
import DexaHeader from "../../components/dexa-header/DexaHeader";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useTranslation } from "react-i18next";

import "../../css/add-item.css";

const AddCourse = () => {
    const [form] = Form.useForm();
    const { t } = useTranslation();

    const handleSubmit = () => {
        localStorage.setItem("course", form.getFieldValue("Course"));
        localStorage.setItem("instructor", form.getFieldValue("Instructor"));
        localStorage.setItem("enroll-date", new Date().toLocaleDateString());

        console.log(localStorage.getItem("course"));
        console.log(localStorage.getItem("instructor"));
        console.log(localStorage.getItem("enroll-date"))
    };

    return (
        <Layout>
            <Header>
                <DexaHeader t={t} />
            </Header>
            <Content className="add-item-content">
                <Card className="add-item-card">
                    <h1>{t("add-course")}</h1>
                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                        <Form.Item
                            name="Course"
                            label={t("course")}
                            rules={[{ type: "string", required: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="Instructor"
                            label={t("instructor")}
                            rules={[{ type: "string", required: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            {t("add")}
                        </Button>
                    </Form>
                </Card>
            </Content>
            <Footer>Revou-Dexa 2024</Footer>
        </Layout>
    );
};

export default AddCourse;