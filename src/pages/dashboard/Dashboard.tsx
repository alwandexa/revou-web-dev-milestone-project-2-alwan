import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { Button, Card, Col, Layout, Row, Timeline } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { MenuFoldOutlined } from "@ant-design/icons";

import { registeredData } from "../../recoil/atom/RegisteredData";
import DexaHeader from "../../components/dexa-header/DexaHeader";

const Dashboard = () => {
    const user = useRecoilValue(registeredData);
    const [reverse, setReverse] = useState(false);

    const { t } = useTranslation();

    const navigate = useNavigate();

    useEffect(() => {
        if (user["Name"] === "") {
            navigate("/registration");
        }
    });

    const timelineList = [
        {
            title: "Intro to React",
            time: "09 JUN 7:20 PM",
            color: "green",
        },
        {
            title: "Advance CSS",
            time: "08 JUN 12:20 PM",
            color: "green",
        },
        {
            title: "Advance HTML",
            time: "04 JUN 3:10 PM",
        },
        {
            title: "CSS Fundamental",
            time: "02 JUN 2:45 PM",
        },
        {
            title: "HTML Fundamental",
            time: "18 MAY 1:30 PM",
        },
        {
            title: "Intro to Web Development",
            time: "14 MAY 3:30 PM",
            color: "gray",
        },
    ];

    const date = new Date(user.Birthdate);

    return (
        <Layout>
            <Header>
                <DexaHeader t={t} />
            </Header>
            <Content>
                <div className="dashboard-content">
                    <h1>{t("greeting")}, {user.Name.toLocaleUpperCase()}!</h1>

                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={16} className="">
                            <Card>
                                <Title level={2}>{t("your-data")}</Title>
                                <Paragraph>
                                    <Title level={4}>{t("name")}</Title>
                                    {user.Name}
                                    <Title level={4}>{t("address")}</Title>
                                    {user.City}
                                    <Title level={4}>{t("birthdate")}</Title>
                                    {(date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear()}
                                    <Title level={4}>{t("birthplace")}</Title>
                                    {user.Birthplace}
                                </Paragraph>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} className="">
                            <Card bordered={false} className="criclebox h-full">
                                <div className="timeline-box">
                                    <Title level={2}>{t("learning-history")}</Title>
                                    <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                                        {t("this-month")} <span>20%</span>
                                    </Paragraph>

                                    <Timeline
                                        className="timelinelist"
                                        reverse={reverse}
                                    >
                                        {timelineList.map((t, index) => (
                                            <Timeline.Item color={t.color} key={index}>
                                                <Title level={5}>{t.title}</Title>
                                                <p>{t.time}</p>
                                            </Timeline.Item>
                                        ))}
                                    </Timeline>
                                    <Button
                                        type="primary"
                                        className="reverse-button"
                                        onClick={() => setReverse(!reverse)}
                                    >
                                        {<MenuFoldOutlined />} {t("reverse")}
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer>Revou-Dexa 2024</Footer>
        </Layout>
    )
}

export default Dashboard;