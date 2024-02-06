import { Button, Layout, Select } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useRecoilValue } from "recoil";
import { registeredData } from "../../recoil/atom/RegisteredData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../internalization/i18n";;

const DexaHeader = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <a href="/">
                <img src={process.env.PUBLIC_URL + "logo-white.png"} alt="Company Logo" />
            </a>
            <input type="search" placeholder={t("search-placeholder")} />
            <div className="header-Button-holder">
                <Button className="Button white-Button">{t("sign-in")}</Button>
                <Button className="Button black-Button">{t("sign-up")}</Button>
                <Select
                    defaultValue="en"
                    onChange={(language) => changeLanguage(language)}
                    options={[
                        { value: 'en', label: 'EN' },
                        { value: 'id', label: 'ID' },]} />
            </div>
        </>
    )
}

const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
};

const Dashboard = () => {
    const user = useRecoilValue(registeredData);
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    useEffect(() => {
        if (user["Name"] === "") {
            navigate("/registration");
        }
    });

    useEffect(() => {
        console.log("Dashboard");
        console.log(user);
    });

    return (
        <Layout>
            <Header>
                <DexaHeader />
            </Header>
            <Content>
                <h1>{t("greeting")} {user.Name.toLocaleUpperCase()}!</h1>
            </Content>
            <Footer>Revou-Dexa 2024</Footer>
        </Layout>
    )
}

export default Dashboard;