import React, { memo } from "react";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { useTranslation } from "react-i18next";

import PersonalInformation from "../personal-information/PersonalInformation";
import AddressInformation from "../address-information/AddressInformation";
import AccountInformation from "../account-information/AccountInformation";

const FormReview = memo(() => {
  const { t } = useTranslation();

  return (
    <>
      <Title level={3}>{t("personal-information")}</Title>
      <Card>
        <PersonalInformation />
      </Card>
      <Title level={3}>{t("personal-information")}</Title>
      <Card>
        <AddressInformation form={"review"} />
      </Card>
      <Title level={3}>{t("account-information")}</Title>
      <Card>
        <AccountInformation />
      </Card>
    </>
  );
});

export default FormReview;
