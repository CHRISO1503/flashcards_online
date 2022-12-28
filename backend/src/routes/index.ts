import { Router } from "express";
import userService from "../service/user";

const router = Router();
router.post("/api/register", async (req, res) => {
    try {
        await userService.register(req.body.userName);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.status(500).json("something went wrong");
    }
});
router.get("/api/test", (req, res) => {
    const data = { message: "hello world" };
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify(data));
});

export default router;
