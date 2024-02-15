import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Table, TableProps } from "antd";
import Title from "antd/lib/typography/Title";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface DataType {
    key: string;
    course_name: string;
    instructor: string;
    enroll_date: Date;
}

const CoursesTable = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const columns: TableProps<DataType>["columns"] = [
        {
            title: t("course"),
            dataIndex: "course_name",
            key: "course_name",
        },
        {
            title: t("instructor"),
            dataIndex: "instructor",
            key: "instructor",
        },
        {
            title: t("enrollment-date"),
            dataIndex: "enroll_date",
            key: "enroll_date",
        },
    ];

    const userIndex = localStorage.getItem("userIndex") || 0;
    const userData = JSON.parse(localStorage.getItem("courses") as string) || [];

    let data: DataType[] = userData[userIndex];

    if(data){
        data.map((item, index) => {
            item.key = index.toString();
            return item;
        });
    }

    const handleAddButton = () => {
        navigate("/add-course");
    };

    return (
        <Card>
            <div className="button-holder">
                <Title level={2}>{t("your-courses")}</Title>
                <Button type="primary" role="add-course-button" onClick={handleAddButton}>
                    <PlusOutlined style={{ fontSize: "1.5em" }} />
                </Button>
            </div>
            <Table columns={columns} dataSource={data} />
        </Card>
    );
};

export default CoursesTable;