import express from "express";
import { playersRouter } from "./routes/players-router";
import { clubsRouter } from "./routes/clubs-router";
import cors from "cors";

export function createApp() {
    const app = express();

    app.use(express.json());

    app.use("/api/players", playersRouter);
    app.use("/api/clubs", clubsRouter);
    app.use(cors());

    return app
}