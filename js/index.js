//*\\\\\\\\\\\\\\\\\\\\\\\\\Завдання 1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Напиши скрипт, який, для об'єкта user, послідовно:
//додає поле mood зі значенням 'happy'
//замінює значення hobby на 'skydiving'
//замінює значення premium на false
//виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: 'Alina',
    age: 30,
    hobby: 'walking',
    premium: true
}

user.mood = 'happy';
user.hobby = 'sktdiving';
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
    
}


//*\\\\\\\\\\\\\\\\\\\\\\\\\Завдання 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
//  Функція повертає число — кількість властивостей.

function countProps(obj) {
  return Object.keys(obj).length;
}


const person = {
  name: 'John',
  age: 30,
  hobby: 'reading',
  premium: true
};

console.log(countProps(person));



//*\\\\\\\\\\\\\\\\\\\\\\\\\Завдання 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і
//  повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта
// в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = '';
  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}

const employees = {
  John: 5,
  Alice: 8,
  Bob: 3,
  Eve: 7
};
console.log(findBestEmployee(employees)); 


//*\\\\\\\\\\\\\\\\\\\\\\\\\Завдання 4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її.
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".


function countTotalSalary(employes) {
  let totalSalary = 0;

  // Перебираємо всі властивості об'єкта
  for (const employee in employes) {
    totalSalary += employes[employee];
  }

  return totalSalary;
}

const employes = {
  John: 5000,
  Alice: 6000,
  Bob: 4500,
  Eve: 7000
};

console.log(countTotalSalary(employes));

//*\\\\\\\\\\\\\\\\\\\\\\\\\Завдання 5\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
//  Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const users = [
  { name: 'John', age: 30, hobby: 'reading' },
  { name: 'Alice', age: 25, hobby: 'skydiving' },
  { name: 'Bob', age: 35, hobby: 'coding' }
];
console.log(getAllPropValues(users, 'name'));  
console.log(getAllPropValues(users, 'hobby')); 

//*\\\\\\\\\\\\\\\\\\\\\\\\\Завдання 6\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів 
// та ім'я продукту(значення властивості name).Повертає загальну вартість продукту(ціна * кількість).
//Викличи функції для перевірки працездатності твоєї реалізації.


function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  // Перебираємо масив продуктів
  for (const product of allProducts) {
    // Якщо знайшли продукт з вказаним ім'ям
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break; 
    }
  }
  return totalPrice;
}
const products = [
  { name: 'Apple', price: 2, quantity: 10 },
  { name: 'Banana', price: 1, quantity: 20 },
  { name: 'Orange', price: 3, quantity: 15 }
];
console.log(calculateTotalPrice(products, 'Apple')); 
console.log(calculateTotalPrice(products, 'Banana')); 
console.log(calculateTotalPrice(products, 'Orange')); 
console.log(calculateTotalPrice(products, 'Pineapple')); 








































