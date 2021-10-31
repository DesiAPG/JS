import hamburguerMenu from "./hamburguer.js";
import { digitalClock, alarm } from "./clock.js";
import { moveBall, shortcuts } from "./keyboard.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.wav", "#activar-alarma", "#desactivar-alarma");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", "stage");
});
