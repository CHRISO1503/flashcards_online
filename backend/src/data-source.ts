import "reflect-metadata"
import { DataSource } from "typeorm"
import { Deck } from "./entity/Deck"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "LNHmlfI3zd7nGRsyRRbY",
    database: "flashcards_online",
    synchronize: false,
    logging: false,
    entities: [User, Deck],
    migrations: [],
    subscribers: [],
})
