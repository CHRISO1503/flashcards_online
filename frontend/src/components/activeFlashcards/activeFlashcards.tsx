import { useEffect, useState } from "react";
import { DBCard, DBDeck } from "../../routes/manageDecks";
import CurrentCard from "./currentCard";

export default function ActiveFlashcards({
    deck,
}: {
    deck: {
        deck: DBDeck;
        cards: DBCard[];
    };
}) {
    const [cardStack, setCardStack] = useState<DBCard[]>();
    const [completedCards, setCompletedCards] = useState<DBCard[]>();
    const [frontBack, setFrontBack] = useState(false);

    useEffect(() => {
        let cardStack = deck.cards;
        cardStack = shuffleCards(cardStack);
        setCardStack(cardStack);
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
                {cardStack ? (
                    <CurrentCard card={cardStack[0]} frontBack={frontBack} />
                ) : (
                    <></>
                )}
            </div>
            <button onClick={() => setFrontBack(!frontBack)}>Check</button>
        </>
    );
}
