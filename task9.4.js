// Створення об'єкта person
const person = {
  firstName: 'Ірина',
  lastName: 'Дайнеко',
  age: 26,
};

// Додавання властивості email
person.email = 'irene@gmail.com';

// Видалення властивості age
delete person.age;

// Вивід оновленого об'єкта person в консоль
console.log(person);
