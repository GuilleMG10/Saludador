
import { get_nombre } from "./Apps";

const nombre = document.querySelector("#nombre");

const form = document.querySelector("#nombre-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nom=nombre.value;

  div.innerHTML = "<p>" + "hola "+ get_nombre(nom) + "</p>";

});
