import express from "express";
import * as playersController from "../controllers/players-controller";

export const playersRouter = express.Router();

playersRouter.get("/", playersController.getAllPlayersController);
playersRouter.get("/:id", playersController.getPlayerByIdController);
playersRouter.post("/", playersController.postPlayerController);
playersRouter.delete("/:id", playersController.deletePlayerController);
playersRouter.patch("/:id", playersController.patchPlayerController);