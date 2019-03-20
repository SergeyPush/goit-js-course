const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let isLogged = false;
do {
    let pass = prompt("Enter password");

    if (pass === null) {
        alert("Отменено пользователем");
        break;
    }
    for (const password of passwords) {
        if (pass === password) {
            alert("Добро пожаловать!");
            isLogged = true;
            break;
        }
    }
    if (isLogged) {
        break;
    }
    attempts--;
    let msg =
        attempts > 0
            ? `Неверный пароль, у вас осталось ${attempts} попыток`
            : "У вас закончились попытки, аккаунт заблокирован!";
    alert(msg);
} while (isLogged === false && attempts > 0);
