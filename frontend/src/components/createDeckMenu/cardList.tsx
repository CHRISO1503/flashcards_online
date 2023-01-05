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
            <div
                className="popup"
                style={{ padding: "10px", margin: "auto", overflowY: "scroll" }}
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
                                <div style={{ width: "35px" }}>X</div>
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
                                        className="remove"
                                        type="button"
                                        value="X"
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
