import React from "react";
import { Select } from "antd";

import i18n from "../../internalization/i18n";

const LanguageSelector = () => {
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <Select
            defaultValue={i18n.language}
            onChange={(language) => changeLanguage(language)}
            options={[
                { value: 'en', label: 'EN' },
                { value: 'id', label: 'ID' },]}
        />
    )
}

export default LanguageSelector;