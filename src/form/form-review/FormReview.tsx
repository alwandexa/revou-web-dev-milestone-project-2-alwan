import React from "react";

import { Card } from "antd";
import Title from "antd/lib/typography/Title";

import PersonalInformation from "../personal-information/PersonalInformation";
import AddressInformation from "../address-information/AddressInformation";
import AccountInformation from "../account-information/AccountInformation";

const FormReview = () => {
  return (
    <>
      <Title level={3}>Personal Information</Title>
      <Card>
        <PersonalInformation />
      </Card>
      <Title level={3}>Address Information</Title>
      <Card>
        <AddressInformation />
      </Card>
      <Title level={3}>Account Information</Title>
      <Card>
        <AccountInformation />
      </Card>
    </>
  );
};

export default FormReview;
