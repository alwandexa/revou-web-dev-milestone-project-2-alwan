import { Select } from "antd";

import i18n from "../../internalization/i18n";
import "../../css/header.css";

const DexaHeader = ({ t }: any) => {
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <img src={process.env.PUBLIC_URL + "logo-white.png"} alt="Company Logo" />
            <input type="search" placeholder={t("search-placeholder")} />
            <Select
                defaultValue={i18n.language}
                onChange={(language) => changeLanguage(language)}
                options={[
                    { value: 'en', label: 'EN' },
                    { value: 'id', label: 'ID' },]}
            />
        </>
    )
}

export default DexaHeader;