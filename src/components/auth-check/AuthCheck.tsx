import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthCheck = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const session = localStorage.getItem("isLoggedIn");
        if (!session) {
            return navigate("/login", { state: { from: location } });
        }
    });

    return children;
};

export default AuthCheck;