import { useState, useEffect } from "react";
import TopBar from "../components/topBar";
import DefineCard from "../components/createDeckMenu/defineCard";
import CardList from "../components/createDeckMenu/cardList";
import DefineDeckName from "../components/createDeckMenu/defineDeckName";
import { useLocation } from "react-router-dom";

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
    const [editingDeck, setEditingDeck] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (currentCard.front == "" && currentCard.back == "") {
            return;
        }
        let cards = cardArray;
        cards.push(currentCard);
        setCardArray(cards.slice());
    }, [currentCard]);

    useEffect(() => {
        if (location.state !== null) {
            let cards = [] as Card[];
            for (const card of location.state.deck.cards) {
                cards.push({
                    front: card.front,
                    back: card.back,
                });
            }
            setCardArray(cards.slice());
            setEditingDeck(true);
        }
    }, []);

    async function createDeck() {
        if (deckName == "" && !editingDeck) {
            setUserErrorMessage(
                "Your deck needs a name before it can be created!"
            );
            return;
        }
        const user = localStorage.getItem("currentUser");
        console.log(
            JSON.stringify({
                user: user,
                deckName: deckName,
                cards: cardArray,
                prevDeckName: editingDeck
                    ? location.state.deck.deck.deckName
                    : null,
            })
        );
        await fetch("/api/create-deck", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: user,
                deckName: deckName,
                cards: cardArray,
                prevDeckName: editingDeck
                    ? location.state.deck.deck.deckName
                    : null,
            }),
        })
            .then((response) => {
                if (response.status == 200) {
                    setUserErrorMessage("Deck created!");
                }
                return response.json();
            })
            .then((data) => {});
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
            <h1 className="page-heading">
                {editingDeck ? "Edit deck" : "Create a deck"}
            </h1>
            {editingDeck ? (
                <DefineDeckName
                    placeholder={location.state.deck.deck.deckName}
                    setDeckName={setDeckName}
                />
            ) : (
                <DefineDeckName
                    placeholder="Name your deck here"
                    setDeckName={setDeckName}
                />
            )}

            <div style={{ display: "flex", justifyContent: "center" }}>
                <CardList cardArray={cardArray} setCardArray={setCardArray} />
                <DefineCard setCurrentCard={setCurrentCard} />
            </div>
            <button className="create-deck" onClick={createDeck}>
                {editingDeck ? "Save changes" : "Create deck"}
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
