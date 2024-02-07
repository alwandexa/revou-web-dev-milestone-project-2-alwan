import React, { FC } from "react";
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from "./pages/dashboard/Dashboard";
import Registration from "./pages/registration/Registration";
import "../src/css/main.css";

const App: FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
