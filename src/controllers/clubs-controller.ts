import { Request, Response } from "express";
import { getClubsService } from "../services/club-service";


export const getClubsController = async (req: Request, res: Response) => {
    const response = await getClubsService();
    res.status(response.status).json(response.data);
}