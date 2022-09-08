import { appState } from "../AppState.js";


class SnacksService {

  addSnack(name) {
    console.log(name, 'add a snack');
    let Snack = appState.Snacks.find(s => s.name == name)
    console.log(Snack);
    // @ts-ignore
    Snack.addSnack()
  }

}



export const snacksService = new SnacksService()