// let tryNumber = 5;

// const rundom = Math.random() * 20;
// const number = Math.round(rundom);
// let isUserWin = false;

// // console.info("Сгенерированное число", number);

// function tryAgain() {
//   const plauerChoos = parseInt(prompt("Введите число от 0 до 20-ти"));
//   tryNumber -= 1; //Это tryNumber=tryNumber-1 или tryNumber--

//   if (plauerChoos < number) {
//     console.info("Ваш выбор меньше");
//   } else if (plauerChoos > number) {
//     console.info("Ваш выбор больше");
//   } else if (plauerChoos == number) {
//     isUserWin = true;
//     tryNumber = 0;
//   }
// }
// while (tryNumber > 0) {
//   tryAgain();
// }
// if (isUserWin) {
//   console.info("Вы директор мира");
// } else {
//   console.info("Вы проиграли дом");
// }

switch (prompt("Какая погода ?")) {
  case "дождь":
    console.log("Взять зонт");
    break;
  case "солнце":
    console.log("Ура без зонта");
    break;
  default:
    console.log("Погода не определена");
    break;
}
