import { DataSource } from "typeorm";
import { Deck } from "./src/entity/Deck";
import { User } from "./src/entity/User";

export async function smokeTest(connection: DataSource) {
    const user = new User();
    user.userName = "bob";
    await connection.manager.save(user);

    const deck = new Deck();
    deck.deckName = "deckbelongingtobob";
    deck.user = user;
    await connection.manager.save(deck);
}
