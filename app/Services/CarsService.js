import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";
import { SandboxServer } from "./AxiosService.js";

class CarsService {
  async getCars() {
    const res = await SandboxServer.get("/api/cars");
    appState.cars = res.data.map((c) => new Car(c));
  }

  async addCar(formData) {
    const res = await SandboxServer.post("/api/cars", formData);
    appState.cars = [...appState.cars, new Car(res.data)];
  }

  async deleteCar(id) {
    if (!(await Pop.confirm("Delete this listing?"))) {
      return;
    }

    appState.cars = appState.cars.filter((c) => c.id != id);
    SandboxServer.delete(`/api/cars/${id}`);
  }
}
export const carsService = new CarsService();
