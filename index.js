const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
names.forEach((name) => console.log(`Привет, ${name}`));

console.log()

const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1)
const mappedNumbers1 = numbers1.map((number) => number * 10);
console.log(mappedNumbers1);

console.log()

const numbers2 = [5, 12, 8, 130, 44];
console.log(numbers2)
const filteredNumbers2 = numbers2.filter((number) => number > 10);
console.log(filteredNumbers2);

console.log()

const peoples = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}];
console.log(peoples);
const nameAgeStrings = peoples
  .filter((people) => people.age > 18)
  .map((people) => `${people.name} (${people.age} лет)`);
console.log(nameAgeStrings);

console.log()

const sales = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
console.log(sales);
const totalPrice = sales.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(totalPrice);