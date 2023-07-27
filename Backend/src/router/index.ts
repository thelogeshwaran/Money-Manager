import express, { Router } from "express";
import authentication from "./authentication";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
    authentication(router)
    users(router);
    router.get('/', (req, res) => {
        res.send('Welcome to application. ')
    })
    return router;
};

