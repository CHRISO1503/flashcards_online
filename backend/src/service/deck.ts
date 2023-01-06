import { AppDataSource } from "../data-source";
import { Card } from "../entity/Card";
import { Deck } from "../entity/Deck";
import { User } from "../entity/User";

class DeckService {
    async createDeck(
        userName: string,
        deckName: string,
        cards: { front: string; back: string }[]
    ) {
        const userRepo = AppDataSource.getRepository(User);
        const deckRepo = AppDataSource.getRepository(Deck);
        const cardRepo = AppDataSource.getRepository(Card);
        userName = userName.toUpperCase();
        const user = await userRepo.findOne({ where: { userName: userName } });
        const sameNameDecks = await deckRepo.find({
            where: { deckName: deckName, user: user },
        });
        if (sameNameDecks.length > 0) {
            return {
                code: 400,
                message: `User already has a deck named ${deckName}`,
            };
        }
        const deck = new Deck();
        deck.deckName = deckName;
        deck.user = user;
        deckRepo.save(deck);
        for (let i = 0; i < cards.length; i++) {
            const currentCard = new Card();
            currentCard.cardNumber = i;
            currentCard.front = cards[i].front;
            currentCard.back = cards[i].back;
            currentCard.deck = deck;
            cardRepo.save(currentCard);
        }
        return { code: 200, message: "Deck created" };
    }
}

export default new DeckService();
