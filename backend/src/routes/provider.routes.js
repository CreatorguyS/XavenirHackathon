import express from "express";
import upload from "../middlewares/multer.middleware.js";
import {
    chooseDistributor,
    giveRating,
    loginProvider,
    logoutProvider,
    registerProvider,
    showRecepients,
    supplyFood,
} from "../controllers/provider.controller.js";
import isAuthenticated from "../middlewares/auth.middleware.js";
import { getHistory } from "../controllers/distributor.controller.js";

const app = express.Router();

app.post("/register", upload.single("avatar"), registerProvider);
app.post("/login", loginProvider);
app.get("/logout", logoutProvider);

app.use(isAuthenticated);
app.post("/supply", upload.single("foodPhoto"), supplyFood);

app.post("/recepients", showRecepients);
app.post("/choose-distributor", chooseDistributor);
app.post("/give-rating", giveRating);
app.get("/history", getHistory);

export default app;
