import { smokeTest } from "../smoke-test";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(async (connection) => {
        await smokeTest(connection);
    })
    .catch((error) => console.log(error));
