import { AppDataSource } from "./data-source";
import app from "./app";

const portNumber = 5000;

AppDataSource.initialize()
    .then(async (connection) => {
        await connection.runMigrations();
        app.listen(portNumber, () =>
            console.log(`server listening on ${portNumber}`)
        );
    })
    .catch((error) => console.log(error));
