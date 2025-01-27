// Копіювання з мутацією

const firstArray = [1, 2, 3, 4, 5];
const secondArray = firstArray.map((value, index) => value * index);

console.log('Перший масив:', firstArray);
console.log('Другий масив:', secondArray);
