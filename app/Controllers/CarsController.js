import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCars() {
  let template = "";
  appState.cars.forEach((car) => (template += car.CarCardTemplate));
  // TODO trigger bad set
  setHTML("listings", template);
  setHTML("canvasRight", Car.CarFormTemplate());
  setHTML("buttonGoHere", Car.CarButtonTemplate());
}

export class CarsController {
  constructor() {
    appState.on("cars", _drawCars);
  }

  showCars() {
    this.getCars();
  }

  async getCars() {
    try {
      await carsService.getCars();
    } catch (error) {
      console.error("[GetCars]", error);
      Pop.error(error);
    }
  }

  addCar() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      const form = window.event.target;
      let formData = getFormData(form);

      carsService.addCar(formData);

      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("[AddCar]", error);
    }
  }
}
