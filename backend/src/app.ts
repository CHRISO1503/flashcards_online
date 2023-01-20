import * as express from "express";
import router from "./routes";

const cors = require("cors");
const app = express();

app.use(cors);
app.use(express.json());
app.use(router);

export default app;
