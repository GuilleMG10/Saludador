
import { get_nombre } from "./Apps";
import { get_genero } from "./Apps";
import { get_hora_Idioma } from "./Apps";

const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const form = document.querySelector("#nombre-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ed=Number.parseInt(edad.value);
  const nom=nombre.value;
  const id=idioma.value;
  const gen=genero.value;
 

  div.innerHTML = "<p>" +get_hora_Idioma(id)+ "  "+ get_genero(gen,ed) +" "+ get_nombre(nom) + "</p>";

});
