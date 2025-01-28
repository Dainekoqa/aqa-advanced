// Сортування масивів
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedAscending = [...numbersList].sort((a, b) => a - b);

const sortedDescending = [...sortedAscending].reverse();

console.log('Вихідний масив:', numbersList);
console.log('Відсортований масив за зростанням:', sortedAscending);
console.log('Відсортований масив за спаданням:', sortedDescending);
