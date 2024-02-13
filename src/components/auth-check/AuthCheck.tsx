import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthCheck = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const navigate = useNavigate();

    let component = children;

    const session = localStorage.getItem("isLoggedIn");

    if (!session) {
        component = <></>;
    }

    useEffect(() => {
        if (!session) {
            navigate("/login", { state: { from: location } });
        }
    });

    return component;
};

export default AuthCheck;