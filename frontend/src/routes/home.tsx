import { useState, createContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "../components/loginPopup";
import TopBar from "../components/topBar";

export default function App() {
    const [loggingIn, setLoggingIn] = useState(true);
    const [currentUser, setCurrentUser] = useState("guest");

    function ShowLogin() {
        if (loggingIn) {
            return (
                <div className="login-popup">
                    <LoginPopup
                        setLoginState={setLoggingIn}
                        setCurrentUser={setCurrentUser}
                    />
                </div>
            );
        } else return <></>;
    }

    return (
        <>
            <TopBar
                setLoginState={setLoggingIn}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
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
