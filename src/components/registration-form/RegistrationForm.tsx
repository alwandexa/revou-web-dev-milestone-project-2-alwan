import React, { useState } from "react";
import { Button, Card, Flex, Form, Select, Steps } from "antd";
import Title from "antd/lib/typography/Title";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PersonalInformation from "../form/personal-information/PersonalInformation";
import AddressInformation from "../form/address-information/AddressInformation";
import AccountInformation from "../form/account-information/AccountInformation";
import FormReview from "../form/form-review/FormReview";

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} ' + t("is-required"),
    types: {
      email: '${label} ' + t("invalid"),
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const steps = [
    {
      title: t("personal-information"),
      content: (
        <Card>
          <PersonalInformation />
        </Card>
      ),
    },
    {
      title: t("address-information"),
      content: (
        <Card>
          <AddressInformation form={form} />
        </Card>
      ),
    },
    {
      title: t("account-information"),
      content: (
        <Card>
          <AccountInformation />
        </Card>
      ),
    },
    {
      title: t("review"),
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
        // console.log("Failed", err);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const submitForm = () => {
    form.submit();
  };

  const storeUser = () => {
    const bcrypt = require('bcryptjs');

    let userList = JSON.parse(localStorage.getItem("users") || '[]');
    let currentUser = form.getFieldsValue();

    currentUser.hash = bcrypt.hashSync(currentUser.password, 10);

    delete currentUser.password;
    delete currentUser.rePassword;

    userList.push(currentUser);

    localStorage.setItem('users', JSON.stringify(userList));
  }

  const handleSubmitForm = () => {
    storeUser();
    form.resetFields();
    navigate('/login');
  }

  const validationReRender = () => {
    const value = form.getFieldsError();

    Object.entries(value).forEach((field: any) => {
      if (field[1].errors.length !== 0) {
        form.validateFields([field[1].name]);
      }
    });
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      validationReRender();
    });
  };

  return (
    <>
      <div className="registration-form">
        <div className="form-header">
          <Title level={2}>
            {current === steps.length - 1 && i18n.language === "en" ? "Final " : ""}
            {t("step")}{" "}
            {current === steps.length - 1 && i18n.language === "id" ? "Terakhir" : ""}
            {current < steps.length - 1 ? current + 1 : ""}:{" "}
            {steps[current].title}
          </Title>
          <Select
            defaultValue={i18n.language}
            onChange={(language) => changeLanguage(language)}
            options={[
              { value: 'en', label: 'EN' },
              { value: 'id', label: 'ID' },]}
          />
        </div>
        <div className="step-content">
          <Form form={form} layout="vertical" onFinish={handleSubmitForm} disabled={current === steps.length - 1 ? true : false} validateMessages={validateMessages}>
            {steps[current].content}
          </Form>
        </div>
        <br />
        <Flex justify="center" gap={"1em"}>
          <Button disabled={current === 0} onClick={() => prev()}>
            {t("previous")}
          </Button>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              {t("next")}
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={submitForm}>
              {t("submit")}
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
