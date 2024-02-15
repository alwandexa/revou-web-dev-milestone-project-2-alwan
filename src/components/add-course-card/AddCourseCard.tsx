import { Button, Card, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AddCourseCard = () => {
    const [form] = Form.useForm();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const addCourse = () => {
        const userIndex = localStorage.getItem("userIndex") as string;
        let courses = JSON.parse(localStorage.getItem("courses") || "[]");

        let userCourse = courses[userIndex] || [];

        userCourse.push({
            course_name: form.getFieldValue("Course"),
            instructor: form.getFieldValue("Instructor"),
            enroll_date: new Date().toLocaleDateString(),
        });

        courses[userIndex] = userCourse;

        localStorage.setItem("courses", JSON.stringify(courses));
    }

    const handleSubmit = () => {
        addCourse();
        navigate("/");
    };
    return (
        <Card className="add-course-card">
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
                <div className="add-button-holder">
                    <Button type="primary" htmlType="submit">
                        {t("add")}
                    </Button>
                </div>
            </Form>
        </Card>
    )
}

export default AddCourseCard;