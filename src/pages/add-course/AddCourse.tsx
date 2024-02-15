import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import DexaHeader from "../../components/dexa-header/DexaHeader";
import AddCourseCard from "../../components/add-course-card/AddCourseCard";
import "../../css/add-course.css";

const AddCourse = () => {
    return (
        <Layout>
            <Header>
                <DexaHeader />
            </Header>
            <Content className="add-course-content">
                <AddCourseCard />
            </Content>
            <Footer>Revou-Dexa 2024</Footer>
        </Layout>
    );
};

export default AddCourse;