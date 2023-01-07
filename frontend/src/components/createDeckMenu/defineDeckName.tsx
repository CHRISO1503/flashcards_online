export default function SetDeckName({
    placeholder,
    setDeckName,
}: {
    placeholder?: string;
    setDeckName: (value: string) => void;
}) {
    return (
        <div className="general-popup">
            <div
                className="popup"
                style={{
                    padding: "10px",
                    paddingTop: "0px",
                    margin: "auto",
                    height: "100px",
                    width: "850px",
                }}
            >
                <form style={{ marginTop: "20px" }}>
                    <label
                        style={{
                            color: "black",
                            left: "100px",
                            margin: "30px",
                        }}
                    >
                        Deck name <br />
                        <input
                            type="text"
                            className="form-style"
                            placeholder={placeholder}
                            style={{ width: "90%", marginTop: "10px" }}
                            onChange={(e) => setDeckName(e.target.value)}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
}
