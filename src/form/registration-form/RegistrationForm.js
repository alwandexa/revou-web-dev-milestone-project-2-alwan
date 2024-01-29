import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import PersonalInformation from "../personal-information/PersonalInformation";
import AddressInformation from "../address-information/AddressInformation";
import AccountInformation from "../account-information/AccountInformation";
import {
  FileDoneOutlined,
  HomeOutlined,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";

const RegistrationForm = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Personal Information",
      status: "finish",
      icon: <UserOutlined />,
      content: <PersonalInformation />,
    },
    {
      title: "Address Information",
      status: "finish",
      icon: <HomeOutlined />,
      content: <AddressInformation />,
    },
    {
      title: "Account Information",
      status: "wait",
      icon: <KeyOutlined />,
      content: <AccountInformation />,
    },
    {
      title: "Done",
      status: "wait",
      icon: <FileDoneOutlined />,
      content: "Sudah selesai",
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
      <div>
        {current > 0 && <Button onClick={() => prev()}>Previous</Button>}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};
export default RegistrationForm;
