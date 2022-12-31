import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "../components/loginPopup";
import TopBar from "../components/topBar";
import CardsMenu from "../components/cardsMenu";

export default function App() {
    //TEMPORARILY SET DEFAULT STATE TO FALSE
    const [loggingIn, setLoggingIn] = useState(false);
    const [blurContent, setBlurContent] = useState(false);
    const [currentUser, setCurrentUser] = useState("Guest");

    useEffect(() => {
        setBlurContent(loggingIn);
    }, [loggingIn]);

    function ShowLoginPopup() {
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
            <div className={blurContent ? "blur-content" : ""}>
                <div className="cards-menu-container">
                    <CardsMenu disableContent={blurContent}/>
                </div>
            </div>
            {ShowLoginPopup()}
        </>
    );
}
