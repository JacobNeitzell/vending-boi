import { appState } from "../AppState.js";
import { SnacksService } from "../Services/SnacksService.js";

// NOTE functions on the outside of the class are PRIVATE, meaning the user cannot access them
function _drawSnacks() {
  let Snacks = appState.Snacks
  let template = ''
  Snacks.forEach(S => template += S.Template)
  // @ts-ignore
  document.getElementById('Snacks').innerHTML = template
}


export class SnackyController {

  constructor() {

    _drawSnacks()
  }


  addSnack(name) {
    console.log(name, 'Snacks put in');
    // @ts-ignore
    SnacksService.addSnack(name)
    _drawSnacks()
    // this.drawPlayers()
  }

  drawSnacks() {
    let Snacks = appState.Snacks
    let template = ''
    Snacks.forEach(S => {
      template += `
      <div class="col-md-6 text-center p-2 bg-light elevation-2">
        <h3>${S.name}</h3>
        <h3 class="text-warning">${S.qty}</h3>
        <button class="btn btn-primary w-100" onclick="app.playersController.scorePoint('${S.name}')">+</button>
      </div>
      `
    })
    // @ts-ignore
    document.getElementById('Snacks').innerHTML = template
  }
}