// @ts-nocheck
import { appState } from "../AppState.js";
import { connectionsService } from "../Services/ConnectionsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawConnections() {
  let template = "";
  for (let c of appState.connections) {
    template += c.connectionTemplate;
  }
  setHTML("listings", template);
  setHTML("buttonGoHere", appState.connectionButton);
  setHTML("formGoHere", appState.connectionForm);
}
export class ConnectionsController {
  constructor() {
    appState.on("connections", _drawConnections);
  }

  showConnections() {
    _drawConnections();
  }

  addConnection() {
    try {
      window.event.preventDefault;
      const form = window.event.target;
      let formData = getFormData(form);

      connectionsService.addConnection(formData);
      form.reset();
    } catch (error) {
      console.error("addConnection", error);
    }
  }
}
