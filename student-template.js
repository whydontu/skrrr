"use strict";

// Практическая работа №5
// Тема: объекты в JavaScript.
// Заполните только участки TODO.
// Названия функций, параметры и module.exports не изменяйте.

// 1. Получение свойства по ключу
// Вернуть значение свойства объекта по имени key.
// Имя свойства приходит в переменной, поэтому используйте динамический доступ.
function getProperty(object, key) {
  return object[key];
}

// 2. Количество свойств
// Вернуть количество собственных перечисляемых свойств объекта.
function countProperties(object) {
  return Object.keys(object).length;
}

// 3. Сумма числовых свойств
// Просмотреть все свойства объекта и вернуть сумму только тех значений,
// для которых typeof value === "number".
// В тестах используются обычные конечные числа.
function sumNumericProperties(object) {
  let sum = 0;
  for (const key in object) {
    if (typeof object[key] === "number") {
      sum += object[key];
    }
  }
  return sum;
}

// 4. Объект товара с методом
// Вернуть объект со свойствами name, price, quantity
// и методом getTotal(), который возвращает price * quantity.
// Метод должен использовать текущие свойства объекта через this.
function createProduct(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    getTotal() {
      return this.price * this.quantity;
    },
  };
}

// 5. Средний балл студента
// student — объект вида:
// { name: "Иван", grades: [5, 4, 3, 5] }
// Вернуть среднее арифметическое оценок.
// Если grades пустой — вернуть 0.
function calculateAverageGrade(student) {
  const grades = student.grades;
  if (grades.length === 0) return 0;
  const sum = grades.reduce((acc, g) => acc + g, 0);
  return sum / grades.length;
}

// 6. Самый дорогой товар
// products — массив объектов вида { name, price }.
// Вернуть объект товара с максимальной ценой.
// Если массив пустой — вернуть null.
// Если максимальная цена встречается несколько раз — вернуть первый такой товар.
function findMostExpensiveProduct(products) {
  if (products.length === 0) return null;
  let most = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > most.price) {
      most = products[i];
    }
  }
  return most;
}

module.exports = {
  getProperty,
  countProperties,
  sumNumericProperties,
  createProduct,
  calculateAverageGrade,
  findMostExpensiveProduct,
};
