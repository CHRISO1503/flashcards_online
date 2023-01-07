import { DBDeck, DBCard } from "../../routes/manageDecks";
import { useNavigate } from "react-router-dom";

export default function DeckToEdit({
    deck,
}: {
    deck: {
        deck: DBDeck;
        cards: DBCard[];
    };
}) {
    const navigate = useNavigate();
    return (
        <button
            className="card-menu"
            style={{
                height: "200px",
                justifyContent: "center",
                fontSize: "3em",
                margin: "auto",
                marginTop: "5px",
                marginBottom: "5px",
                overflow: "hidden",
                padding: "10px",
            }}
            onClick={() => navigate("/create-deck", { state: { deck } })}
        >
            <div style={{ width: "100%", textAlign: "center" }}>
                {deck.deck.deckName}
            </div>
        </button>
    );
}
