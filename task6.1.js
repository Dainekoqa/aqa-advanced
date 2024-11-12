// Function declaration
function square1(width, height) {
    return width * height;
}
console.log(square1(7, 8));

//Function Expression
const square2 = function (width2, height2) {
    return width2 * height2;
}
console.log(square2(6, 8));


//Arrow function
const square3 = (width3, height3) => width3 * height3;
console.log(square3(2, 8));