import { SnackyController } from "./Controllers/Snacks.Service.js";

class App {
  SnackyController = new SnackyController();
}

window["app"] = new App();
