import { useTranslation } from "react-i18next";
import { Col, Layout, Row } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout";

import DexaHeader from "../../components/dexa-header/DexaHeader";
import LearningHistory from "../../components/learning-history/LearningHistory";
import CoursesTable from "../../components/courses-table/CoursesTable";
import UserData from "../../components/user-data/UserData";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("users") as string)[localStorage.getItem("userIndex") as string];

    const { t } = useTranslation();

    return (
        <Layout>
            <Header>
                <DexaHeader />
            </Header>
            <Content>
                <div className="dashboard-content">
                    <h1>{t("greeting")}, {user.Name.toLocaleUpperCase()}!</h1>
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={16} >
                            <Row gutter={[24, 24]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                                    <UserData />
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                                    <CoursesTable />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} >
                            <LearningHistory />
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer>Revou-Dexa 2024</Footer>
        </Layout>
    )
}

export default Dashboard;