import { HTTPResponsePlayersModel } from "../models/http-response-model";
import { PlayersModel } from "../models/players-model";
import * as playersRepository from "../repositories/players-repository"
import { StatusCode } from "../utils/status-code";

export const listAllPlayersService = async (): Promise<HTTPResponsePlayersModel> => {
    const response: HTTPResponsePlayersModel = {
        status: 0,
        data: []
    };
    const data = await playersRepository.listAllPlayersRepository();
    response.status = data.length === 0? response.status = StatusCode.NoContent : response.status = StatusCode.OK;
    response.data = data
    return response
};

export const findPlayerByIdService = async (id: number): Promise<HTTPResponsePlayersModel> => {
    const response: HTTPResponsePlayersModel = {
        status: 0,
        data: []
    };
    const data = await playersRepository.findPlayerByIdRepository(id);
    response.status = !data? response.status = StatusCode.NoContent : response.status = StatusCode.OK;
    response.data = data;
    return response
};

export const registerNewPlayerService = async (newPlayer: PlayersModel): Promise<HTTPResponsePlayersModel> => {
    const response: HTTPResponsePlayersModel = {
        status: 0,
        data: []
    };
    const existId = await playersRepository.findPlayerByIdRepository(newPlayer.id);
    if (!existId) {
        const data = await playersRepository.registerNewPlayerRepository(newPlayer);
        response.status = StatusCode.Created;
        response.data = data;
    } else if (existId) {
        response.status = StatusCode.BadRequest;
        response.data = {message: "ID already exists"};
    };
    return response
};

export const deletePlayerByIdService = async (id: number) => {
    const response: HTTPResponsePlayersModel = {
        status: 0,
        data: []
    };
    const existId = await playersRepository.findPlayerByIdRepository(id);
    if (existId) {
        const data = await playersRepository.deletePlayerByIdRepository(id);
        response.status = StatusCode.OK;
        response.data = data;
    } else if (!existId) {
        response.status = StatusCode.BadRequest;
        response.data = {message: "ID not found"};
    };
    
    return response
};

export const updatePlayerByIdService = async (id: number, playerDataUpdate: PlayersModel) => {
    const response: HTTPResponsePlayersModel = {
        status: 0,
        data: []
    };
    const existId = await playersRepository.findPlayerByIdRepository(id);
    if (existId) {
        const data = await playersRepository.updatePlayerByIdRepository(id, playerDataUpdate);
        response.status = StatusCode.OK;
        response.data = data;
    } else if (!existId) {
        response.status = StatusCode.BadRequest;
        response.data = {message: "ID not found"};
    };

    return response
};