const Book = require("./book.js");
const EBook = require("./eBook.js");

//  Створення кількох об'єктів класу Book
const book1 = new Book("White Fang", "Jack London", 1906);
const book2 = new Book("How Late It Was, How Late", "James Kelman", 1994);

// Виводим iнформацiю про книги
book1.printInfo();
book2.printInfo();

// Пошук старої книги
const oldestBook = Book.findOldestBook([book1, book2]);
console.log("Найдавніша книга:");
oldestBook.printInfo();

// Створення об'єкту EBook
const ebook1 = new EBook("Тестова книга", "Iryna", 2024, "Paper book");
ebook1.printInfo();


// Використання статичного методу fromBook
const ebookFromBook = EBook.fromBook(book2, "EPUB");
ebookFromBook.printInfo();