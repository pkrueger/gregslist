import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";
import { SandboxServer } from "./AxiosService.js";

class HousesService {
  async getHouses() {
    const res = await SandboxServer.get("/api/houses");
    appState.houses = res.data.map((h) => new House(h));
  }

  addHouse(formData) {
    let house = new House(formData);
    appState.houses = [house, ...appState.houses];
    saveState("houses", appState.houses);
  }
}

export const housesService = new HousesService();
