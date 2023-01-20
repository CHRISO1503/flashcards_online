import * as express from "express";
import * as cors from "cors";
import router from "./routes";
import { Request } from "express";

const app = express();

app.use(cors<Request>());
app.use(express.json());
app.use(router);

export default app;
