import * as express from "express";
import * as cors from "cors";
import router from "./routes";

const app = express();

app.use(cors);
app.use(express.json());
app.use(router);

export default app;
