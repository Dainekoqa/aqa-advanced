function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0) {
        throw new Error("Помилка: невірні аргументи або ділення на нуль.");
    }
    return numerator / denominator;
}

const testCases = [
    [10, 2],
    [10, 0],
    [10, "a"],
    ["b", 5],
    [15, 3]
];

testCases.forEach(([numerator, denominator]) => {
    try {
        console.log(`Результат ділення: ${divide(numerator, denominator)}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Робота завершена");
    }
});


