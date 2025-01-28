// Lesson №7

// function countToTenRecursions(num) {
//     for (let i = startValue; i <= 10; i++) {
//         console.log(i);
//     }
// }
// countToTen(5);
// console.log('----')

// function countToTenRecursions(startValue) {
//     if (startValue <= 10) {
//         console.log(startValue);
//         startValue++;
//         countToTenRecursions(startValue);
//     }
// }

// countToTenRecursions(5);

// function outerFunction(){
//     const outerVariable = "I am from outer function";
// function innerFunction(){
//     const innerVariable = "";
//     console.log (outerVariable);
// }
// innerFunction();
// }

// outerFunction();

// Homework №7
function recursiveCounter(num) {
  console.log(num);
  if (num > 0) {
    recursiveCounter(num - 1);
  }
}
recursiveCounter(5);
