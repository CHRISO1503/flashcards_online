import { FormEvent, useState } from "react";
import CardInput from "./cardInput";
import { Card } from "../../routes/createDeck";

export default function DefineCard({
    setCurrentCard,
}: {
    setCurrentCard: (value: Card) => void;
}) {
    const [frontOfCard, setFrontOfCard] = useState("");
    const [backOfCard, setBackOfCard] = useState("");

    function addCard(e: FormEvent, front: string, back: string) {
        e.preventDefault();
        setCurrentCard({ front: front, back: back });
        setFrontOfCard("");
        setBackOfCard("");
    }

    return (
        <div className="general-popup">
            <div className="popup" style={{ padding: "10px", margin: "auto" }}>
                <h2 style={{ marginBottom: "40px", textAlign: "center" }}>
                    Add a card
                </h2>
                <form onSubmit={(e) => addCard(e, frontOfCard, backOfCard)}>
                    <CardInput
                        value={frontOfCard}
                        setValue={setFrontOfCard}
                        label={"Front of card"}
                    />
                    <CardInput
                        value={backOfCard}
                        setValue={setBackOfCard}
                        label={"Back of card"}
                    />
                    <input
                        type="submit"
                        value={"Add"}
                        className="form-style login"
                        style={{
                            marginRight: "none",
                            marginTop: "20px",
                            marginLeft: "auto",
                        }}
                    />
                </form>
            </div>
        </div>
    );
}
