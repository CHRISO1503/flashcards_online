import { Card } from "../../routes/createDeck";

export default function CardList({
    cardArray,
    setCardArray,
}: {
    cardArray: Card[];
    setCardArray: (value: Card[]) => void;
}) {
    return (
        <div className="general-popup">
            <div className="popup " style={{ padding: "10px", margin: "auto" }}>
                <p>Display cards here please</p>
            </div>
        </div>
    );
}
