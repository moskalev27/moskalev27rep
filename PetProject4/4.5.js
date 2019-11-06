// Задача 1
let arr = ["lokki", "Tor", 15, 17, false, true];
console.info(arr);

// Задача 2
let a3 = {
  3: "hello",
  one: "hi",
  testt: "vodoley",
  ivan: "ivanov",
  testt11111: "ne vodoley" // Добавил, чтоб проверить выведит если таких больше чем одно
};

for (key in a3) {
  if (key.length > 4) {
    console.log(a3[key]);
    task2.innerHTML += `${a3[key]}. `;
  }
}

// Задача 3
const keyInput = document.getElementById("u7-key__input");
const valueInput = document.getElementById("u7-value__input");
const addButton = document.getElementById("add_button");
const screen = document.getElementById("screen");

let a7 = {};

function render() {
  screen.innerHTML = "";
  for (let prop in a7) {
    screen.innerHTML += `
    <div>${prop}:${a7[prop]}</div>
      `;
  }
}
function hendelAddButtonClick() {
  const key = keyInput.value;
  const value = valueInput.value;
  a7[key] = value;
  render();
}
addButton.onclick = hendelAddButtonClick;

// Задача 4

const a = ["Tor", "Lokki", "Odin", 34, "privet"];
console.log(a.length);
task4.innerHTML = a.length;

// Задача 5

const d = [0, 2, 5, -4, 6, 22, -9, -12, , 13, 78];
const a1 = [];
const a2 = [];
for (let i = 0; i < d.length; i++) {
  if (d[i] % 2 == 0)
    // console.log(d[i]);
    a1.push(d[i]);
  if (d[i] % 2 !== 0) 
    a2.push(d[i]);

  console.log(a2);
}
task5_a1.innerHTML = 'Чётные: ' + a1;
task5_a2.innerHTML = ' Нечётные: ' + a2;

// Задача 6
dd = [ 0, 2, 5, -4, 6, 22, -9, -12, ,13, 78];

let max = 0;
for (let i=0; i<dd.length; i++){
    if (dd[i] > max) 
    max = dd[i];

    task6.innerHTML = max;
    console.log(max);
}
