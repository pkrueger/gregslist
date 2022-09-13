// @ts-nocheck
import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  let template = "";
  for (let house of appState.houses) {
    template += house.HouseCardTemplate;
  }
  setHTML("listings", template);
  setHTML("formGoHere", House.HouseFormTemplate);
  setHTML("buttonGoHere", House.HouseButtonTemplate);
}

export class HousesController {
  constructor() {
    appState.on("houses", _drawHouses);
  }

  showHouses() {
    _drawHouses();
  }

  addHouse() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);

      housesService.addHouse(formData);
      form.reset();
    } catch (error) {
      console.error("addHouse", error);
    }
  }
}
