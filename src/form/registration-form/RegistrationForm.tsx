import React, { useState } from "react";
import { Button, Card, Flex, Form, Steps } from "antd";
import Title from "antd/lib/typography/Title";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import PersonalInformation from "../personal-information/PersonalInformation";
import AddressInformation from "../address-information/AddressInformation";
import AccountInformation from "../account-information/AccountInformation";
import FormReview from "../form-review/FormReview";
import { registeredData } from "../../recoil/atom/RegisteredData";

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const setRegisteredFormData = useSetRecoilState(registeredData)
  const navigate = useNavigate();

  const steps = [
    {
      title: "Personal Information",
      content: (
        <Card>
          <PersonalInformation />
        </Card>
      ),
    },
    {
      title: "Address Information",
      content: (
        <Card>
          <AddressInformation />
        </Card>
      ),
    },
    {
      title: "Account Information",
      content: (
        <Card>
          <AccountInformation />
        </Card>
      ),
    },
    {
      title: "Review",
      content: <FormReview />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const next = () => {
    form
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      }).catch((err) => {
        console.log("Failed", err);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const submitForm = () => {
    form.submit();
  };

  const handleSubmitForm = () => {
    setRegisteredFormData(form.getFieldsValue());
    form.resetFields();
    navigate('/');
  }

  return (
    <>
      <div className="registration-form">
        <Title level={2}>
          {current === steps.length - 1 ? "Final " : ""}Step{" "}
          {current < steps.length - 1 ? current + 1 : ""}:{" "}
          {steps[current].title}
        </Title>
        <div className="step-content">
          <Form form={form} layout="vertical" onFinish={handleSubmitForm} disabled={current === steps.length - 1 ? true : false}>
            {steps[current].content}
          </Form>
        </div>
        <br />
        <Flex justify="center" gap={"1em"}>
          <Button disabled={current === 0} onClick={() => prev()}>
            Previous
          </Button>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={submitForm}>
              Submit
            </Button>
          )}
        </Flex>
        <br />
        <Steps
          progressDot
          current={current}
          items={items}
          labelPlacement="vertical"
          responsive={true}
        />
      </div>
    </>
  );
};

export default RegistrationForm;
