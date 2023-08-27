
import { get_nombre } from "./Apps";
import { get_genero } from "./Apps";
import { get_hora } from "./Apps";

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
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  div.innerHTML = "<p>" +get_hora(fechaActual)+ "  "+ get_genero(gen,ed) +" "+ get_nombre(nom) + "</p>";

});
