import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeckToEdit from "../components/manageDecksMenu/deckToEdit";
import TopBar from "../components/topBar";

export interface DBCard {
    id: number;
    cardNumber: number;
    front: string;
    back: string;
}
export interface DBDeck {
    id: number;
    deckName: string;
}

export default function ManageDecks() {
    const [userDecks, setUserDecks] = useState(
        [] as { deck: DBDeck; cards: DBCard[] }[]
    );
    const [lookedForDecks, setLookedForDecks] = useState(false);

    useEffect(() => {
        getDecks();
    }, []);

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
            <h1 className="page-heading">Manage decks</h1>
            {userDecks.length > 0 ? (
                userDecks.map((deck, i) => (
                    <div
                        key={i}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <DeckToEdit deck={deck} />
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
