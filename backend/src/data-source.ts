import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Deck } from "./entity/Deck";
import { User } from "./entity/User";
import { Card } from "./entity/Card";
import { migrationName1671806248117 } from "../database/migrations/1671806248117-migrationName";
import { addPasswords1672332371596 } from "../database/migrations/1672332371596-addPasswords";
import { migrations1672949798582 } from "../database/migrations/1672949798582-migrations";
import { migrations1673026279026 } from "../database/migrations/1673026279026-migrations";
import { migrations1673109817825 } from "../database/migrations/1673109817825-migrations";

const DEPLOYED = true;
let dataSourceSettings: DataSourceOptions;

if (DEPLOYED) {
    dataSourceSettings = {
        type: "postgres",
        host: "dpg-cf53g8ta4992g5g02lig-a",
        port: 5432,
        username: "flashcards_online_user",
        password: "8wu6vB4PXB2fBlfWIBfDou0VkdupgD74",
        database: "flashcards_online",
        synchronize: false,
        logging: false,
        entities: [User, Deck, Card],
        migrations: [
            migrationName1671806248117,
            addPasswords1672332371596,
            migrations1672949798582,
            migrations1673026279026,
            migrations1673109817825,
        ],
        subscribers: [],
    };
} else {
    dataSourceSettings = {
        type: "postgres",
        host: "localhost",
        port: 5433,
        username: "postgres",
        password: "LNHmlfI3zd7nGRsyRRbY",
        database: "flashcards_online",
        synchronize: false,
        logging: false,
        entities: [User, Deck, Card],
        migrations: [
            migrationName1671806248117,
            addPasswords1672332371596,
            migrations1672949798582,
            migrations1673026279026,
            migrations1673109817825,
        ],
        subscribers: [],
    };
}

export const AppDataSource = new DataSource(dataSourceSettings);
