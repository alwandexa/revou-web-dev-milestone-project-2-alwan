import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import "../src/css/main.css";
import RegistrationForm from "./form/registration-form/RegistrationForm";
import SideInfo from "./side-info/SideInfo";
import React, { FC } from "react";

const App: FC = () => {
  return (
    <Layout>
      <Content>
        <div className="main-content">
          <SideInfo />
          <RegistrationForm />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
