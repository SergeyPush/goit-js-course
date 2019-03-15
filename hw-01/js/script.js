// Task 1
const ADMIN_PASSWORD = 'm4ng0h4ckz';
const message = prompt("Введите пароль");

if (message !== null) {
    message === ADMIN_PASSWORD ? alert("Добро пожаловать!") : alert("Доступ запрещен, неверный пароль!")
} else {
    alert("Отменено пользователем")
}

// Task 2
console.log("--- Task2 ---");
const credits = 23580;
const pricePerDroid = 3000;

const quantity = 8;
let totalPrice = quantity * pricePerDroid;

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
} else {
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}

// Task 3
console.log("--- Task3 ---");
const country = 'Индия';
let price = 0;

switch (country) {
    case 'Китай':
        price = 100;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'Южная Америка':
        price = 250;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'Австралия ':
        price = 170;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'Индия':
        price = 80;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case 'Ямайка ':
        price = 120;
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    default:
        console.log("В вашей стране доставка не доступна")

}

