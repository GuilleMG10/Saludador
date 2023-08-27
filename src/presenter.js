import sumar  from "./Apps";
import { multiplicar  } from "./Apps";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const a = document.querySelector("#primerN");
const b = document.querySelector("#segundoN");

const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const a1=Number.parseInt(a.value);
  const b1=Number.parseInt(b.value);
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  div.innerHTML += "<p>" + multiplicar(a1, b1) + "</p>";
});
