// Створення масиву об'єктів users
const users = [
  { name: 'Donald Trump', country: 'USA', age: 72 },
  { name: 'Haruhiko Kuroda', country: 'Japan', age: 73 },
  { name: 'Recep Tayyip Erdogan', country: 'Türkiye', age: 64 },
];

// Цикл for...of для перебору масиву та деструктуризації
for (const { name, country, age } of users) {
  console.log(`Ім'я: ${name}, Країна: ${country}, Вік: ${age}`);
}
