function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function criaDias() {
  let calendarioLista = document.querySelector("#days");
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let calendarioItems = document.createElement("li");
    calendarioItems.innerText = dezDaysList[i];
    calendarioItems.className = "day";

    calendarioLista.appendChild(calendarioItems);
  }
}
criaDias();

function criaFeriado() {
  for (i = 25; i <= 26; i += 1) {
    document.getElementsByClassName("day")[i].className += " holiday";
  }
  for (i = 32; i <= 32; i += 1) {
    document.getElementsByClassName("day")[i].className += " holiday";
  }
}
criaFeriado();

function criaSexta() {
  for (i = 5; i <= 26; i += 7) {
    document.getElementsByClassName("day")[i].className += " friday";
  }
}
criaSexta();

