import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TopBar({
    parentState = 0,
    updateParent = () => null,
    loginState = false,
}: {
    parentState?: number;
    updateParent?: (value: number) => void;
    loginState?: boolean;
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        let user = localStorage.getItem("currentUser");
        if (user === "" || user === null) {
            setCurrentUser("Guest");
        } else {
            setCurrentUser(user);
        }
    }, [loginState]);

    return (
        <div className="top-bar">
            <p
                style={{
                    color: "white",
                    marginLeft: "10px",
                    marginTop: "12px",
                }}
            >
                Logged in as {currentUser}
            </p>
            <h1 className="top-bar">Flashcards Online</h1>
            <button
                className="top-bar"
                onClick={() => {
                    localStorage.setItem("jwt", "");
                    localStorage.setItem("currentUser", "");
                    if (location.pathname != "/") {
                        navigate("/");
                    } else {
                        updateParent(parentState + 1);
                    }
                }}
            >
                Log out
            </button>
        </div>
    );
}
