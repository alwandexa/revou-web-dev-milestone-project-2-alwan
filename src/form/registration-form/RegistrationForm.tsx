import React, { useState } from "react";

import { Button, Card, Flex, Form, message, Steps } from "antd";
import Title from "antd/lib/typography/Title";

import PersonalInformation from "../personal-information/PersonalInformation";
import AddressInformation from "../address-information/AddressInformation";
import AccountInformation from "../account-information/AccountInformation";
import FormReview from "../form-review/FormReview";

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Personal Information",
      content: (
        <Card>
          <PersonalInformation form={form} />
        </Card>
      ),
    },
    {
      title: "Address Information",
      content: (
        <Card>
          <AddressInformation form={form} />
        </Card>
      ),
    },
    {
      title: "Account Information",
      content: (
        <Card>
          <AccountInformation form={form} />
        </Card>
      ),
    },
    {
      title: "Review",
      content: <FormReview form={form} />,
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
      })
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const submitForm = () => {
    setCurrent(0);
    form.resetFields();
    message.success("Registered successfully!");
  };

  return (
    <>
      <div className="registration-form">
        <Title level={2}>
          {current === steps.length - 1 ? "Final " : ""}Step{" "}
          {current < steps.length - 1 ? current + 1 : ""}:{" "}
          {steps[current].title}
        </Title>
        <div className="step-content">{steps[current].content}</div>
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
            <Button type="primary" htmlType="submit" onClick={submitForm}>
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
