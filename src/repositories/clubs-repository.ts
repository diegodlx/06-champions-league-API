import fs from "fs/promises"
import { ClubsModel } from "../models/clubs-model"; 

export const listAllCluRepository = async (): Promise<ClubsModel[]> => {
    let clubsJson: ClubsModel[] = [];
  try {
    const data = await fs.readFile('src/data/clubs-data.json', 'utf8');
    clubsJson = JSON.parse(data)
  } catch (err) {
    console.error('Error reading file:', err);
  }
    return clubsJson

};