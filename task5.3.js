// task5.3.js

// Вибираєм число для таблиці множення
const number = 8;

// Генерація таблиці множення с використанням цикла for
console.log("Таблиця множення для числа " + number + " (цикл for):");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

// Генерація таблиці множення с використанням цикла while
console.log("\nТаблиця множення для числа " + number + " (цикл while):");
let i = 1;
while (i <= 10) {
    console.log(`${number} * ${i} = ${number * i}`);
    i++;
}