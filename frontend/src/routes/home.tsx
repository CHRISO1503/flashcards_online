import { useState } from "react";
import { useEffect } from "react";
import LoginPopup from "../components/loginPopup";
import TopBar from "../components/topBar";
import CardsMenu from "../components/cardsMenu/cardsMenu";

export default function App() {
    const [loggingIn, setLoggingIn] = useState(false);
    const [blurContent, setBlurContent] = useState(false);
    const [state, updateState] = useState(0);

    useEffect(() => {
        if (
            localStorage.getItem("jwt") == "" ||
            localStorage.getItem("jwt") == null
        ) {
            console.log("LOGGED OUT")
            setLoggingIn(true);
        }
    });

    useEffect(() => {
        setBlurContent(loggingIn);
    }, [loggingIn]);

    function showLoginPopup() {
        if (loggingIn) {
            return (
                <div className="login-popup">
                    <LoginPopup setLoginState={setLoggingIn} />
                </div>
            );
        } else return <></>;
    }

    return (
        <>
            <div className={blurContent ? "blur-content" : ""}>
                <div className="cards-menu-container">
                    <CardsMenu disableContent={blurContent} />
                </div>
            </div>
            {showLoginPopup()}
            <TopBar parentState={state} updateParent={updateState} />
        </>
    );
}
