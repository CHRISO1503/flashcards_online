import * as express from "express";
import router from "./routes";
import { Request } from "express";
import cors = require("cors");

const app = express();

app.use(cors<Request>());
app.use(express.json());
app.use(router);

export default app;
