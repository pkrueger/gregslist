import { appState } from "../AppState.js";
import { Connection } from "../Models/Connection.js";
import { saveState } from "../Utils/Store.js";

class ConnectionsService {
  addConnection(formData) {
    appState.connections = [new Connection(formData), ...appState.connections];
    saveState("connections", appState.connections);
  }
}

export const connectionsService = new ConnectionsService();
