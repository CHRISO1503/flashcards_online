import { DBCard } from "../../routes/manageDecks";

export default function CurrentCard({
    card,
    frontBack,
}: {
    card: DBCard;
    frontBack: boolean;
}) {
    return (
        <div className="general-popup">
            <div
                className="popup"
                style={{
                    padding: "10px",
                    margin: "auto",
                    marginTop: "150px",
                    height: "200px",
                }}
            >
                <p>{frontBack ? card.back : card.front}</p>
            </div>
        </div>
    );
}
