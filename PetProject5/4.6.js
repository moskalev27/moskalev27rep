// Задание 1
let text = document.getElementById('enterName');

  function showName() {
      task1.innerHTML = ('Введено имя: ' + text.value);
    
  }

  document.getElementById("btn").onclick = showName;
  
// Задание 2 и почему то 3 такое же по смыслу
 
let a = 27;
let b = 27;
function maxValue (){
   return Math.max (a, b);

};
maxValue()
console.log(maxValue(a, b));

// Задание 4

let firstNumber = prompt('Введите первое число от 1 до 5 (для задания 4)');
let secondNumber = prompt('Введите второе число от 6 до 10 (для задания 4)');



function task4(firstNumber, firstNumber){
    let goal = firstNumber -0.5 + Math.random() * (secondNumber  - firstNumber + 1 );
   return Math.round(goal);
};
  console.log(task4(firstNumber, firstNumber));
