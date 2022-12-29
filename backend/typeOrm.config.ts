import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { migrationName1671806248117 } from "./database/migrations/1671806248117-migrationName";
import { addPasswords1672332371596 } from "./database/migrations/1672332371596-addPasswords";

config();

const configService = new ConfigService();

export default new DataSource({
    type: "postgres",
    host: configService.get("POSTGRES_HOST"),
    port: configService.get("POSTGRES_PORT"),
    username: configService.get("POSTGRES_USER"),
    password: configService.get("POSTGRES_PASSWORD"),
    database: configService.get("POSTGRES_DB"),
    entities: [],
    migrations: [migrationName1671806248117, addPasswords1672332371596],
});
