import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActiveFlashcards from "../components/activeFlashcards/activeFlashcards";
import DeckToEdit from "../components/manageDecksMenu/deckToEdit";
import TopBar from "../components/topBar";
import { DBDeck, DBCard } from "./manageDecks";

export default function OpenDeck() {
    const [userDecks, setUserDecks] = useState(
        [] as { deck: DBDeck; cards: DBCard[] }[]
    );
    const [lookedForDecks, setLookedForDecks] = useState(false);
    const [activeDeck, setActiveDeck] = useState<{
        deck: DBDeck;
        cards: DBCard[];
    }>();

    useEffect(() => {
        getDecks();
    }, []);

    useEffect(() => {
        activeDeck
            ? console.log(activeDeck.deck.deckName)
            : console.log(activeDeck);
    }, [activeDeck]);

    async function getDecks() {
        const username = localStorage.getItem("currentUser");
        await fetch("/api/get-user-decks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLookedForDecks(true);
                setUserDecks(data);
            });
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
            {activeDeck ? <></> : <h1 className="page-heading">Choose deck</h1>}
            {activeDeck ? (
                <ActiveFlashcards deck={activeDeck} />
            ) : userDecks.length > 0 ? (
                userDecks.map((deck, i) => (
                    <div
                        key={i}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <DeckToEdit setActiveDeck={setActiveDeck} deck={deck} />
                    </div>
                ))
            ) : lookedForDecks ? (
                <Link to="/create-deck">Create a deck to get started</Link>
            ) : (
                <p>Loading decks...</p>
            )}

            <TopBar />
        </div>
    );
}
