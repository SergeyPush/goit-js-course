let total = 0;
let numbers = [];
while (true) {
    let input = prompt("Введите число");
    if (input === null) {
        break
    }
    if (!Number(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    numbers.push(input)
}

for (number of numbers) {
    total += Number(number);
}

alert(`Общая сумма чисел равна ${total}`);
