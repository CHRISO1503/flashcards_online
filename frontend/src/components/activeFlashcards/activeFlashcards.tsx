import { useEffect, useState } from "react";
import { DBCard, DBDeck } from "../../routes/manageDecks";
import CheckAnswer from "./checkAnswer";
import CurrentCard from "./currentCard";
import InputCorrect from "./inputCorrect";

export default function ActiveFlashcards({
    deck,
    setDeck,
}: {
    deck: {
        deck: DBDeck;
        cards: DBCard[];
    };
    setDeck: (value: { deck: DBDeck; cards: DBCard[] } | undefined) => void;
}) {
    const [cardStack, setCardStack] = useState<DBCard[]>([]);
    const [completedCards, setCompletedCards] = useState<DBCard[]>([]);
    const [frontBack, setFrontBack] = useState(false);

    useEffect(() => {
        let cardStack = deck.cards;
        cardStack = shuffleCards(cardStack);
        setCardStack(cardStack.slice());
    }, []);

    function shuffleCards(array: DBCard[]) {
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }

    return (
        <>
            <h1 className="page-heading">{deck.deck.deckName}</h1>
            <div>
                {cardStack.length > 0 ? (
                    <CurrentCard card={cardStack[0]} frontBack={frontBack} />
                ) : (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <p style={{ color: "black" }}>
                            Congratulations, you have completed the deck!
                        </p>
                    </div>
                )}
            </div>
            {cardStack.length > 0 ? (
                <>
                    <InputCorrect
                        frontBack={frontBack}
                        setFrontBack={setFrontBack}
                        cardStack={cardStack}
                        setCardStack={setCardStack}
                        completedCards={completedCards}
                        setCompletedCards={setCompletedCards}
                    />
                    <CheckAnswer
                        frontBack={frontBack}
                        setFrontBack={setFrontBack}
                    />
                </>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "100px",
                    }}
                >
                    <input
                        type="button"
                        className="card-active"
                        style={{ width: "150px" }}
                        value="Return to decks"
                        onClick={() => {
                            setDeck(undefined);
                        }}
                    />
                </div>
            )}
        </>
    );
}
