export default function TopBar({
    setLoginState,
    currentUser,
    setCurrentUser,
}: {
    setLoginState: (value: boolean) => void;
    currentUser: string;
    setCurrentUser: (value: string) => void;
}) {
    return (
        <div className="top-bar">
            <p className="top-bar">Logged in as {currentUser}</p>
            <h1 className="top-bar">Flashcards Online</h1>
            <button
                className="top-bar"
                onClick={() => {
                    setCurrentUser("Guest");
                    setLoginState(true);
                    localStorage.setItem("jwt", "");
                }}
            >
                Log out
            </button>
        </div>
    );
}
