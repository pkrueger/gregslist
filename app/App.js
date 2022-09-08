import { CarsController } from "./Controllers/CarsController.js";
import { ConnectionsController } from "./Controllers/ConnectionsController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { JobsController } from "./Controllers/JobsController.js";

class App {
  carsController = new CarsController();
  jobsController = new JobsController();
  housesController = new HousesController();
  connectionsController = new ConnectionsController();
}

window["app"] = new App();
