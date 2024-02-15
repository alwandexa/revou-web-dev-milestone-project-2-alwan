import { Button, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import i18n from "../../internalization/i18n";
import "../../css/header.css";
import { LogoutOutlined } from "@ant-design/icons";

const DexaHeader = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    const logOut = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <img src={process.env.PUBLIC_URL + "logo-white.svg"} alt="Company Logo" />
            <input type="search" placeholder={t("search-placeholder")} />
            <div>
                <Select
                    defaultValue={i18n.language}
                    onChange={(language) => changeLanguage(language)}
                    options={[
                        { value: 'en', label: 'EN' },
                        { value: 'id', label: 'ID' },]}
                />
                <Button type="primary" onClick={logOut} danger><LogoutOutlined style={{ fontSize: "1.5em" }} /></Button>
            </div>
        </>
    )
}

export default DexaHeader;