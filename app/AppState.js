import { Car, CarButtonTemplate, CarFormTemplate } from "./Models/Car.js";
import { Job, JobButtonTemplate, JobFormTemplate } from "./Models/Job.js";
import {
  House,
  HouseButtonTemplate,
  HouseFormTemplate,
} from "./Models/House.js";
import {
  Connection,
  ConnectionButtonTemplate,
  ConnectionFormTemplate,
} from "./Models/Connection.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState("cars", Car);
  carForm = CarFormTemplate();
  carButton = CarButtonTemplate();

  /** @type {import('./Models/Job').Job[]} */
  jobs = loadState("jobs", Job);
  jobForm = JobFormTemplate();
  jobButton = JobButtonTemplate();

  /** @type {import('./Models/House').House[]} */
  houses = loadState("houses", House);
  houseForm = HouseFormTemplate;
  houseButton = HouseButtonTemplate();

  connections = loadState("connections", Connection);
  connectionButton = ConnectionButtonTemplate;
  connectionForm = ConnectionFormTemplate;
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
