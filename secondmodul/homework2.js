
let password = 'gaz-xsw';

if (password.length >=4 && password.includes('-')) {
  console.log('пароль надёжный');
} else if (password.length >=4 && password.includes('_')) {
  console.log('пароль надёжный');
} else {
  console.log('пароль недостаточно надёжный');
};


let name = 'Fedor';
let surname = 'Krasavin';

let correctName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
let correctSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();

let resName = correctName != name || correctSurname != surname ? 'Имя было преобразованно' : 'Имя осталось без изменений';

console.log(correctName, correctSurname, resName);
