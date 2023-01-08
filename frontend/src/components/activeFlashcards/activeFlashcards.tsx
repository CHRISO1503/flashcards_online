import { DBCard, DBDeck } from "../../routes/manageDecks";

export default function activeFlashcards({
    deck,
}: {
    deck: {
        deck: DBDeck;
        cards: DBCard[];
    };
}) {
    return <h1 className="page-heading">{deck.deck.deckName}</h1>;
}
