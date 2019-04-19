import { users } from "./users.js";

// Task 1 "Получить массив имен всех пользователей (поле name)"
const getAllNames = users => {
  return users.map(item => item.name);
};
console.log("Получить массив имен всех пользователей (поле name):");
console.log(getAllNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// -------------------------------------------------------------------------------
// Task 2 "Получить массив объектов пользователей по цвету глаз (поле eyeColor)"
const getUsersByEyeColor = (users, color) => {
  return users.filter(item => item.eyeColor === color);
};
console.log(
  "Получить массив объектов пользователей по цвету глаз (поле eyeColor):"
);
console.log(getUsersByEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// -------------------------------------------------------------------------------
// Task3 "Получить массив имен пользователей по полу (поле gender)"
const getUsersByGender = (users, gender) => {
  return users.filter(item => item.gender === gender).map(item => item.name);
};
console.log("Получить массив имен пользователей по полу (поле gender)");
console.log(getUsersByGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// -------------------------------------------------------------------------------
//Task4 "Получить массив только неактивных пользователей (поле isActive)"
const getInactiveUsers = users => {
  return users.filter(item => item.isActive === false);
};
console.log("Получить массив только неактивных пользователей (поле isActive)");
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// -------------------------------------------------------------------------------
// Task5 "Получить пользоваля (не массив) по email (поле email, он уникальный)"
const getUserByEmail = (users, email) => {
  return users.find(item => item.email === email);
};

console.log(
  "Получить пользоваля (не массив) по email (поле email, он уникальный)"
);
console.log(getUserByEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// -------------------------------------------------------------------------------
// Task6 "Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)"

const getUsersWithAge = (users, min, max) => {
  return users.filter(item => item.age >= min && item.age <= max);
};

console.log(
  "Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)"
);
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// -------------------------------------------------------------------------------
// Task7 "Получить общую сумму баланса (поле balance) всех пользователей"
const getTotalBalance = users => {
  // твой код
  return users.reduce((acc, item) => acc + item.balance, 0);
};
console.log("Получить общую сумму баланса (поле balance) всех пользователей.");
console.log(getTotalBalance(users)); // 20916

// -------------------------------------------------------------------------------
// Task8 "Массив имен всех пользователей у которых есть друг с указанным именем"
const getUsersByFriend = (users, name) => {
  return users
    .filter(item => item.friends.includes(name))
    .map(item => item.name);
};

console.log(
  "Массив имен всех пользователей у которых есть друг с указанным именем"
);
console.log(getUsersByFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ===============================================================================

console.log("Additional tasks"); // Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке
const getUniqueSkills = users => {
  return users
    .reduce((acc, item) => {
      acc.push(...item.skills);
      return acc;
    }, [])
    .sort()
    .filter((item, index, arr) => arr.indexOf(item) === index);
};

console.log(getUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const sortByFriendsLength = (a, b) => a.friends.length - b.friends.length;
  return users.sort(sortByFriendsLength).map(item => item.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
