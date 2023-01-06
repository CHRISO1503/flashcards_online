import { Router } from "express";
import userService from "../service/user";
import deckService from "../service/deck";

const router = Router();

router.post("/api/register", async (req, res) => {
    try {
        let response = await userService.register(
            req.body.username,
            req.body.password
        );
        res.status(response.code).json(response.message);
    } catch (err) {
        console.log(err);
        res.status(500).json("Something went wrong");
    }
});

router.post("/api/login", async (req, res) => {
    try {
        let response = await userService.login(
            req.body.username,
            req.body.password
        );
        res.status(response.code).json({
            message: response.message,
            token: response.token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json("Something went wrong");
    }
});

router.post("/api/create-deck", async (req, res) => {
    try {
        let response = await deckService.createDeck(
            req.body.user,
            req.body.deckName,
            req.body.cards
        );
        res.status(response.code).json(response.message);
    } catch (err) {
        console.log(err);
        res.status(500).json("Something went wrong");
    }
});

export default router;
