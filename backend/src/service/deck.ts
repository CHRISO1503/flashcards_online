import { AppDataSource } from "../data-source";
import { Card } from "../entity/Card";
import { Deck } from "../entity/Deck";
import { User } from "../entity/User";

class DeckService {
    async createDeck(
        userName: string,
        deckName: string,
        cards: { front: string; back: string }[],
        prevDeckName: string
    ) {
        const userRepo = AppDataSource.getRepository(User);
        const deckRepo = AppDataSource.getRepository(Deck);
        const cardRepo = AppDataSource.getRepository(Card);
        userName = userName.toUpperCase();
        const user = await userRepo.findOne({ where: { userName: userName } });
        let duplicateDecks;
        if (prevDeckName === null) {
            duplicateDecks = await deckRepo.find({
                where: { deckName: deckName, user: user },
            });
            if (duplicateDecks.length > 0) {
                return {
                    code: 400,
                    message: `User already has a deck named ${deckName}`,
                };
            }
        } else {
            duplicateDecks = await deckRepo.find({
                where: { deckName: prevDeckName, user: user },
            });
            if (duplicateDecks.length > 0) {
                await cardRepo.delete({ deck: duplicateDecks[0] });
                await deckRepo.delete({ deckName: prevDeckName, user: user });
                deckName = prevDeckName;
                console.log("overwriting");
            }
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

    async getUserDecks(userName: string) {
        let response = [] as { deck: Deck; cards: Card[] }[];
        const userRepo = AppDataSource.getRepository(User);
        const deckRepo = AppDataSource.getRepository(Deck);
        const cardRepo = AppDataSource.getRepository(Card);
        userName = userName.toUpperCase();
        const user = await userRepo.findOne({ where: { userName: userName } });
        const userDecks = await deckRepo.find({ where: { user: user } });
        for (const deck of userDecks) {
            const cards = await cardRepo.find({ where: { deck: deck } });
            response.push({ deck: deck, cards: cards });
        }
        return {
            code: 200,
            message: "User decks fetched successfully",
            response: response,
        };
    }
}

export default new DeckService();
