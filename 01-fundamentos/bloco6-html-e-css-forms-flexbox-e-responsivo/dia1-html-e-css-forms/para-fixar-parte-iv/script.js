// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function previneClickLink(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener("click", previneClickLink);

function previneClickBox(event) {
  event.key.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", previneClickBox);

function previneTexto(event) {
  if (event.key != "a") {
    event.preventDefault();
  }
}
INPUT_TEXT.addEventListener("keypress", previneTexto);
