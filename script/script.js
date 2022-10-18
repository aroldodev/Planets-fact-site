import { planets } from "./data.js";
import { Planet } from "./planet.js";

let planeta = new Planet(planets[0]);
planeta.render();

document.getElementById("link-mercury").addEventListener("click", function () {
  planeta = new Planet(planets[0]);
  planeta.render();  
});
document.getElementById("link-venus").addEventListener("click", function () {
  planeta = new Planet(planets[1]);
  planeta.render();  
});
document.getElementById("link-earth").addEventListener("click", function () {
  planeta = new Planet(planets[2]);
  planeta.render();  
});
document.getElementById("link-mars").addEventListener("click", function () {
  planeta = new Planet(planets[3]);
  planeta.render();  
});
document.getElementById("link-jupyter").addEventListener("click", function () {
  planeta = new Planet(planets[4]);
  planeta.render();  
});
document.getElementById("link-saturn").addEventListener("click", function () {
  planeta = new Planet(planets[5]);
  planeta.render();  
});
document.getElementById("link-uranus").addEventListener("click", function () {
  planeta = new Planet(planets[6]);
  planeta.render();  
});
document.getElementById("link-neptune").addEventListener("click", function () {
  planeta = new Planet(planets[7]);
  planeta.render();  
});

