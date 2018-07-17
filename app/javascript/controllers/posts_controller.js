import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`
  }

  new(e) {
    e.preventDefault();
    fetch(this.data.get('new-url')).then(response => response.text())
      .then(html => {
        $(html).modal();
      });
  }
}
