import { Card, Form } from "antd";
import PersonalInformation from "../personal-information/PersonalInformation";
import AddressInformation from "../address-information/AddressInformation";
import AccountInformation from "../account-information/AccountInformation";
import Title from "antd/lib/typography/Title";
import React, { FC } from "react";

interface FormReviewProps {
  form: any;
}

const FormReview: FC<FormReviewProps> = ({ form }) => {
  return (
    <Form layout="vertical" disabled={true}>
      <Title level={3}>Personal Information</Title>
      <Card>
        <PersonalInformation form={form} />
      </Card>
      <Title level={3}>Address Information</Title>
      <Card>
        <AddressInformation form={form} />
      </Card>
      <Title level={3}>Account Information</Title>
      <Card>
        <AccountInformation form={form} />
      </Card>
    </Form>
  );
};

export default FormReview;
