export default function CheckAnswer({
    frontBack,
    setFrontBack,
}: {
    frontBack: boolean;
    setFrontBack: (value: boolean) => void;
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
            }}
        >
            <input
                type="button"
                className="card-active"
                style={{ width: "150px" }}
                onClick={() => setFrontBack(!frontBack)}
                value={frontBack ? "Show front" : "Check answer"}
            />
        </div>
    );
}
