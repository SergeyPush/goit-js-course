const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = function(allLogins, login) {
  let isOnly;
  for (const all of allLogins) {
    if (all === login) {
      isOnly = false;
      break;
    } else {
      isOnly = true;
    }
  }
  return isOnly;
};

const addLogin = function(allLogins, login) {
  const isValid = isLoginValid(login);
  const isUnique = isLoginUnique(allLogins, login);

  if (!isValid) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (!isUnique) {
    return "Такой логин уже используется!";
  } else {
    logins.push(login);
    return "Логин успешно добавлен!";
  }
};

// Вызовы функции для проверки
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
