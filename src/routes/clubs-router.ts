import express from "express";
import { getClubsController } from "../controllers/clubs-controller";

export const clubsRouter = express.Router();

clubsRouter.get("/", getClubsController);