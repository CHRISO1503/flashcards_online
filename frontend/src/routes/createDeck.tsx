import TopBar from "../components/topBar";

export default function CreateDeck() {

    return (
        <div style={{ position: "absolute", display: "flex", top: "0px" }}>
            <h1 className="page-heading">Create a deck</h1>
            <div className="login-popup">
                <div className="popup" style={{ padding: "10px" }}>
                    <form>
                        <label style={{ color: "black" }}>
                            Deck name: <br />
                            <input
                                type="text"
                                className="form-style"
                                style={{ width: "90%" }}
                            />
                        </label>
                        <input
                            type="submit"
                            value={"Create"}
                            className="form-style login"
                            style={{
                                marginRight: "none",
                                marginTop: "10px",
                                marginLeft: "auto",
                            }}
                        />
                    </form>
                </div>
            </div>
            <TopBar />
        </div>
    );
}
