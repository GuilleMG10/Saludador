
import { get_nombre } from "./Apps";
import { get_genero } from "./Apps";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#nombre-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ed=Number.parseInt(edad.value);
  const nom=nombre.value;
  const gen=genero.value;

  div.innerHTML = "<p>" + " hola "+ get_genero(gen,ed) +" "+ get_nombre(nom) + "</p>";

});
