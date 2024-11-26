// Створення об'єктів car1 та car2
const car1 = {
    brand: "Suzuki",
    model: "Swift",
    year: 2024
  };
  
  const car2 = {
    brand: "Fiat",
    model: "500",
    year: 2018
  };
  
  // Створення об'єкта car3 за допомогою spread
  const car3 = { ...car1, ...car2, color: "white" };
  
  // Вивід об'єкта car3 в консоль
  console.log(car3);