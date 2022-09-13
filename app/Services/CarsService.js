import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { saveState } from "../Utils/Store.js";
import { SandboxServer } from "./AxiosService.js";

class CarsService {
  async getCars() {
    const res = await SandboxServer.get("/api/cars");
    appState.cars = res.data.map((c) => new Car(c));
  }

  addCar(formData) {
    let car = new Car(formData);
    appState.cars = [car, ...appState.cars];
    saveState("cars", appState.cars);
  }
}
export const carsService = new CarsService();
