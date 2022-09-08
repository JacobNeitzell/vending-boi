export class Snacks {

  constructor(name, qty) {
    this.name = name
    this.qty = qty
  }

  addSnack() {
    this.qty++
    console.log(this.name, 'added snack', this.qty)
  }

  get Template() {
    return /*html*/`
    <div class="col-md-6 text-center p-2 bg-light elevation-2">
      <h3>${this.name}</h3>
      <h3 class="text-warning">${this.qty}</h3>
      <button class="btn btn-primary w-100" onclick="app.playersController.scorePoint('${this.name}')">+</button>
    </div>
    `
  }

}