import React, { FC } from "react";

import {
  RecoilRoot,
} from 'recoil';

import "../src/css/main.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from "./pages/registration/Registration";

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
