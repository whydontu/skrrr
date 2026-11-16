"use strict";

const products = [
  { id: 1, name: "Ноутбук", price: 350000, category: "Техника", inStock: true },
  { id: 2, name: "Мышь", price: 7000, category: "Аксессуары", inStock: true },
  { id: 3, name: "Монитор", price: 120000, category: "Техника", inStock: false },
  { id: 4, name: "Клавиатура", price: 15000, category: "Аксессуары", inStock: true },
  { id: 5, name: "Наушники", price: 28000, category: "Аудио", inStock: true },
  { id: 6, name: "Микрофон", price: 45000, category: "Аудио", inStock: false },
];

function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");
  if (!product.inStock) article.classList.add("product-card--out");

  const title = document.createElement("h3");
  title.classList.add("product-card__title");
  title.textContent = product.name;

  const category = document.createElement("p");
  category.classList.add("product-card__category");
  category.textContent = `Категория: ${product.category}`;

  const price = document.createElement("p");
  price.classList.add("product-card__price");
  price.textContent = `Цена: ${product.price} ₸`;

  const stock = document.createElement("p");
  stock.classList.add("product-card__stock");
  stock.textContent = product.inStock ? "В наличии" : "Нет в наличии";

  article.append(title, category, price, stock);
  return article;
}

function calculateStats(items) {
  const count = items.length;
  const availableCount = items.filter((item) => item.inStock).length;
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const mostExpensive = items.length
    ? items.reduce((max, item) => (item.price > max.price ? item : max))
    : null;
  return { count, availableCount, totalPrice, mostExpensive };
}

function countByCategory(items) {
  const result = {};
  items.forEach((item) => {
    result[item.category] = (result[item.category] || 0) + 1;
  });
  return result;
}

function renderCatalog(items) {
  const catalog = document.querySelector("#catalog");
  catalog.replaceChildren();
  items.forEach((item) => catalog.append(createProductCard(item)));

  const stats = calculateStats(items);
  document.querySelector("#product-count").textContent = stats.count;
  document.querySelector("#available-count").textContent = stats.availableCount;
  document.querySelector("#total-price").textContent = `${stats.totalPrice} ₸`;
  document.querySelector("#most-expensive").textContent = stats.mostExpensive
    ? `${stats.mostExpensive.name} — ${stats.mostExpensive.price} ₸`
    : "—";

  const categoryList = document.querySelector("#category-stats");
  categoryList.replaceChildren();
  Object.entries(countByCategory(items)).forEach(([category, quantity]) => {
    const li = document.createElement("li");
    li.textContent = `${category}: ${quantity}`;
    categoryList.append(li);
  });

  return items.length;
}

window.domSrs = { products, createProductCard, calculateStats, countByCategory, renderCatalog };

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#catalog")) renderCatalog(products);
});
