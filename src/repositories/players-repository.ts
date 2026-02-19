import { playersData } from "../data/players-data";
import { PlayersModel } from "../models/players-model";


export const listAllPlayersRepository = async () => {
    const data = playersData;
    return data
};

export const findPlayerByIdRepository = async (id: number) => {
    const data = playersData.find((player) => player.id === id);
    return data
};

export const registerNewPlayerRepository = async (newPlayer: PlayersModel) => {
    playersData.push(newPlayer);
    return playersData
};

export const deletePlayerByIdRepository = async (id: number) => {
    const index = playersData.findIndex((player) => player.id === id);
    if (index !== -1) {
        playersData.splice(index, 1);
    } else {
        return "BAD REQUEST"
    }
    return playersData
};

export const updatePlayerByIdRepository = async (id: number, playerDataUpdate: PlayersModel) => {
    const index = playersData.findIndex((player) => player.id === id);
    if (index !== -1 && playerDataUpdate) {
        playersData[index] = playerDataUpdate;
    } else {
        return "BAD REQUEST"
    }
    return playersData
};