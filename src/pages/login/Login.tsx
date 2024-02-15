import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import "../../css/login.css";
import LoginCard from "../../components/login-card/LoginCard";
import LanguageSelector from "../../components/language-selector/LanguageSelector";

const Login = () => {
    return (
        <>
            <Layout>
                <Content className="login-content">
                    <LoginCard />
                    <div className="login-language">
                        <LanguageSelector />
                    </div>
                </Content>
            </Layout>
        </>
    );
}

export default Login;