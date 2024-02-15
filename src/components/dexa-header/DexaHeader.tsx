import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LogoutOutlined } from "@ant-design/icons";

import LanguageSelector from "../language-selector/LanguageSelector";
import "../../css/header.css";

const DexaHeader = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <>
            <img src={process.env.PUBLIC_URL + "logo-white.svg"} alt="Company Logo" />
            <input type="search" placeholder={t("search-placeholder")} />
            <div>
                <LanguageSelector />
                <Button type="primary" onClick={logOut} danger><LogoutOutlined style={{ fontSize: "1.5em" }} /></Button>
            </div>
        </>
    )
}

export default DexaHeader;