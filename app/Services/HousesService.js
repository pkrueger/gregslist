import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";
import { SandboxServer } from "./AxiosService.js";

class HousesService {
  async getHouses() {
    const res = await SandboxServer.get("/api/houses");
    appState.houses = res.data.map((h) => new House(h));
  }

  async addHouse(formData) {
    const res = await SandboxServer.post("/api/houses", formData);
    appState.houses = [...appState.houses, new House(res.data)];
  }

  async deleteHouse(id) {
    if (!(await Pop.confirm("Delete this listing?"))) {
      return;
    }

    SandboxServer.delete(`/api/houses/${id}`);
    appState.houses = appState.houses.filter((h) => h.id != id);
  }
}

export const housesService = new HousesService();
