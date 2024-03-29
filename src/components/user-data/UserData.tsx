import React from 'react';
import { Card } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { useTranslation } from "react-i18next";

const UserData = () => {
    const { t } = useTranslation();

    let user = JSON.parse(localStorage.getItem("users") as string)[localStorage.getItem("userIndex") as string];

    const date = new Date(user.Birthdate);

    return (
        <Card>
            <Title level={2}>{t("your-data")}</Title>
            <Paragraph>
                <Title level={4}>{t("name")}</Title>
                {user.Name}
                <Title level={4}>{t("address")}</Title>
                {user.City}
                <Title level={4}>{t("birthdate")}</Title>
                {date.toLocaleDateString()}
                <Title level={4}>{t("birthplace")}</Title>
                {user.Birthplace}
            </Paragraph>
        </Card>
    )
}

export default UserData;