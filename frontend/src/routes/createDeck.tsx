import { useState, useEffect } from "react";
import TopBar from "../components/topBar";
import DefineCard from "../components/createDeckMenu/defineCard";
import CardList from "../components/createDeckMenu/cardList";
import DefineDeckName from "../components/createDeckMenu/defineDeckName";

export interface Card {
    front: string;
    back: string;
}

export default function CreateDeck() {
    const [deckName, setDeckName] = useState("");
    const [currentCard, setCurrentCard] = useState<Card>({
        front: "",
        back: "",
    });
    const [cardArray, setCardArray] = useState([] as Card[]);

    // useEffect on currentcard which adds it to the cardarray. Input errors handled in defineCard.tsx
    useEffect(() => {
        let cards = cardArray;
        cards.push(currentCard);
        setCardArray(cards);
    }, [currentCard]);

    return (
        <div
            style={{
                position: "absolute",
                display: "flex",
                top: "0px",
                width: "100vw",
                height: "100vh",
                flexDirection: "column",
            }}
        >
            <h1 className="page-heading">Create a deck</h1>
            <DefineDeckName setDeckName={setDeckName} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <CardList cardArray={cardArray} setCardArray={setCardArray} />
                <DefineCard setCurrentCard={setCurrentCard} />
            </div>
            <TopBar />
        </div>
    );
}
