// task5.2.js

// Присвоєння оцінки
let averageGrade = 100;

// Округлення оцінки до десятків, для використання її в switch
let roundedGrade = Math.floor(averageGrade / 10);

switch (roundedGrade) {
    case 10:
        console.log("Ідеально");
        break;
    case 9:
        console.log("Відмінно");
        break;
    case 8:
        console.log("Дуже добре");
        break;
    case 7:
        console.log("Добре");
        break;
    case 6:
        console.log("Задовільно");
        break;
    default:
        console.log("Незадовільно");
}