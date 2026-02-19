import { Request, Response } from "express"
import * as playersService from "../services/players-service"
import { HTTPResponsePlayersModel } from "../models/http-response-model";

export const getAllPlayersController = async (req: Request, res: Response) => {
    const response = await playersService.listAllPlayersService();
    res.status(response.status).json(response.data);
};

export const getPlayerByIdController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const response = await playersService.findPlayerByIdService(id);
    res.status(response.status).json(response.data);
};

export const postPlayerController = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const response = await playersService.registerNewPlayerService(bodyValue)
    res.status(response.status).json(response.data);
};

export const deletePlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const response = await playersService.deletePlayerByIdService(id);
    res.status(response.status).json(response.data);
};

export const patchPlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const bodyValue = req.body;
    const response = await playersService.updatePlayerByIdService(id, bodyValue);
    res.status(response.status).json(response.data);
}