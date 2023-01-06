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
    const [userErrorMessage, setUserErrorMessage] = useState("");

    useEffect(() => {
        if (currentCard.front == "" && currentCard.back == "") {
            return;
        }
        let cards = cardArray;
        cards.push(currentCard);
        setCardArray(cards.slice());
    }, [currentCard]);

    async function createDeck() {
        if (deckName == "") {
            setUserErrorMessage(
                "Your deck needs a name before it can be created!"
            );
            return;
        }
        let user = localStorage.getItem("currentUser");
        await fetch("/api/create-deck", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: user,
                deckName: deckName,
                cards: cardArray,
            }),
        })
            .then((response) => {
                if (response.status == 200) {
                    setUserErrorMessage("Deck created!");
                }
                return response.json();
            })
            .then((data) => console.log(data));
    }

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
            <button className="create-deck" onClick={createDeck}>
                Create deck
            </button>
            <p
                className="page-heading"
                style={{ fontSize: "1em", margin: "none" }}
            >
                {userErrorMessage}
            </p>
            <TopBar />
        </div>
    );
}
