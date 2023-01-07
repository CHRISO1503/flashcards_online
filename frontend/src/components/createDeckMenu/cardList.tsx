import { Card } from "../../routes/createDeck";

export default function CardList({
    height,
    cardArray,
    setCardArray,
}: {
    height?: number;
    cardArray: Card[];
    setCardArray: (value: Card[]) => void;
}) {
    function removeCard(i: number) {
        let cards = cardArray;
        cards.splice(i, 1);
        setCardArray(cards.slice());
    }

    return (
        <div className="general-popup">
            <div
                className="popup"
                style={{
                    padding: "10px",
                    margin: "auto",
                    overflowY: "scroll",
                    height: height,
                }}
            >
                <h2 style={{ marginBottom: "40px", textAlign: "center" }}>
                    Deck preview
                </h2>
                <table className="deckTable">
                    <thead>
                        <tr>
                            <th>
                                <div style={{ width: "35px" }}>Id</div>
                            </th>
                            <th>
                                <div>Front</div>
                            </th>
                            <th>
                                <div>Back</div>
                            </th>
                            <th>
                                <div style={{ width: "35px" }}></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ overflow: "scroll" }}>
                        {cardArray.map((card, i) => (
                            <tr key={i}>
                                <th>
                                    <div style={{ width: "50px" }}>{i + 1}</div>
                                </th>
                                <th>
                                    <div
                                        style={{
                                            overflow: "hidden",
                                            width: "150px",
                                        }}
                                    >
                                        {card.front}
                                    </div>
                                </th>
                                <th>
                                    <div>{card.back}</div>
                                </th>
                                <th>
                                    <input
                                        key={i}
                                        className="remove"
                                        type="button"
                                        value="X"
                                        onClick={() => removeCard(i)}
                                    />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
