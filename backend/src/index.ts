import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize()
    .then(async (connection) => {
        await connection.runMigrations();
        app.listen(5000, () => console.log("server listening on 5000"));
    })
    .catch((error) => console.log(error));
