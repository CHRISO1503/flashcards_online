import { useNavigate, useLocation } from "react-router-dom";

export default function TopBar({
    parentState = 0,
    updateParent = () => null,
}: {
    parentState?: number;
    updateParent?: (value: number) => void;
}) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="top-bar">
            <h1 className="top-bar">Flashcards Online</h1>
            <button
                className="top-bar"
                onClick={() => {
                    localStorage.setItem("jwt", "");
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
