import { memo, useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Button, Card, Timeline } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

const LearningHistory = memo(() => {
    const [reverse, setReverse] = useState(false);
    const { t } = useTranslation();

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

    return (
        <Card bordered={false} className="criclebox h-full">
            <div className="timeline-box">
                <Title level={2}>{t("learning-history")}</Title>
                <Paragraph className="lastweek">
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
    )
})

export default LearningHistory;