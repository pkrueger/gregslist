import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawCars() {
  let template = "";
  appState.cars.forEach((car) => (template += car.CarCardTemplate));
  // TODO trigger bad set
  setHTML("listings", template);
  setHTML("formGoHere", Car.CarFormTemplate);
  setHTML("buttonGoHere", Car.CarButtonTemplate);
}

export class CarsController {
  constructor() {
    _drawCars();
    appState.on("cars", _drawCars);
  }

  showCars() {
    _drawCars();
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
