// Створення об'єкта book
const book = {
  title: 'Мистецтво тестування',
  author: 'Гленфорд Майерс',
  year: 2020,
};

// Деструктуризація властивостей об'єкта book
const { title, author } = book;

// Вивід деструктуризованих змінних у консоль
console.log(`Назва книги: ${title}`);
console.log(`Автор книги: ${author}`);
