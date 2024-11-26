const Book = require("./book.js"); // Iмпорт класу Book

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year); // Наслiдування властивостей вiд Book
    this.fileFormat = fileFormat; // Додавання нової властивостi
  }

  // Перевизначення методу для виведення нової iнформацiї
  printInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, Рiк: ${this.year}, Формат: ${this.fileFormat}`
    );
  }

  // Статичний метод для створення EBook на основi Book
  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook; // Експорт класу