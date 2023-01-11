import { DBCard } from "../../routes/manageDecks";

export default function CurrentCard({
    card,
    frontBack,
}: {
    card?: DBCard;
    frontBack: boolean;
}) {
    return (
        <div className="general-popup">
            <div
                className="popup"
                style={{
                    padding: "10px",
                    margin: "auto",
                    marginTop: "100px",
                    height: "200px",
                    textAlign: "center",
                    fontSize: "2.5em",
                    lineHeight: "1em",
                    justifyContent: "center",
                    overflow: "auto",
                }}
            >
                <div style={{ maxHeight: "200px" }}>
                    {card ? (frontBack ? card.back : card.front) : ""}
                </div>
            </div>
        </div>
    );
}
