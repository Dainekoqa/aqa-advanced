//Обчислення суми елементів масиву

const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Сума елементів масиву: ${sum}`);