import "reflect-metadata";
import { DataSource } from "typeorm";
import { Deck } from "./entity/Deck";
import { User } from "./entity/User";
import { migrationName1671806248117 } from "../database/migrations/1671806248117-migrationName";
import { addPasswords1672332371596 } from "../database/migrations/1672332371596-addPasswords";

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
    migrations: [migrationName1671806248117, addPasswords1672332371596],
    subscribers: [],
});