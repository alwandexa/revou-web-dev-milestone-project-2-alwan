import { FC } from "react";
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from "./pages/dashboard/Dashboard";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import AddCourse from "./pages/add-course/AddCourse";
import AuthCheck from "./components/auth-check/AuthCheck";
import "../src/css/main.css";

const App: FC = () => {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route index path="/" element={<AuthCheck ><Dashboard /></AuthCheck >} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-course" element={<AuthCheck ><AddCourse /></AuthCheck>} />
          <Route path="/*" element={<AuthCheck ><Dashboard /></AuthCheck >} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
