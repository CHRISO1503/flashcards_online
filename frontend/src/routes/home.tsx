import { useState, createContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "../components/loginPopup";
import TopBar from "../components/topBar";

export default function App() {
    const [loggingIn, setLoggingIn] = useState(true);

    function ShowLogin() {
        if (loggingIn) {
            return (
                <div className="login-popup">
                    <LoginPopup loggingIn={loggingIn} setLoginState={setLoggingIn} />
                </div>
            );
        } else return <></>;
    }

    return (
        <>
            <TopBar />
            {ShowLogin()}
            <div className={loggingIn ? "blur-content" : ""}>
                <Link
                    to="/login"
                    onClick={() => localStorage.setItem("jwt", "")}
                >
                    Log-in / Register
                </Link>
            </div>
        </>
    );
}
