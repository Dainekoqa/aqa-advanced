class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    // Метод щоб вивести iнформацiю з книги
    printInfo() {
      console.log(`Назва: ${this.title}, Автор: ${this.author}, Рiк: ${this.year}`);
    }
  
    // Статистичний метод для пошуку книги
    static findOldestBook(books) {
      return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
  }
  
  module.exports = Book; // Експорт класу