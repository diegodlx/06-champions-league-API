import { HTTPResponsePlayersModel } from "../models/http-response-model";
import { listAllCluRepository } from "../repositories/clubs-repository";
import { StatusCode } from "../utils/status-code";


export const getClubsService = async () => {
    const response: HTTPResponsePlayersModel = {
            status: 0,
            data: []
        };
    const data = await listAllCluRepository();
    response.status = data.length === 0? response.status = StatusCode.NoContent : response.status = StatusCode.OK;
    response.data = data
    return response
}