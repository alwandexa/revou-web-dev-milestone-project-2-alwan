import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import "../../css/login.css";
import LoginCard from "../../components/login-card/LoginCard";

const Login = () => {
    return (
        <>
            <Layout>
                <Content className="login-content">
                    <LoginCard />
                </Content>
            </Layout>
        </>
    );
}

export default Login;