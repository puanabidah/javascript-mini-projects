// // .checked = property that determines the checked state of an HTML checkbox
// // or radio button element

// const mySubmit = document.getElementById('mySubmit');
// const myCheckbox = document.getElementById('myCheckbox');
// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const paypalBtn = document.getElementById('payPalBtn');
// const subResult = document.getElementById('subResult');
// const payResult = document.getElementById('payResult');

// mySubmit.onclick = function () {
//   if (myCheckbox.checked) {
//     subResult.textContent = `You are subscribed!`;
//   } else {
//     subResult.textContent = `You are NOT subscribed!`;
//   }

//   if (visaBtn.checked) {
//     payResult.textContent = `You are paying with Visa.`;
//   } else if (masterCardBtn.checked) {
//     payResult.textContent = `You are paying with MasterCard.`;
//   } else if (payPalBtn.checked) {
//     payResult.textContent = `You are paying with PayPal.`;
//   } else {
//     payResult.textContent = `You must select a payment method!`;
//   }
// };

// // ternary operator
// let age = 15;
// let message = age >= 18 ? 'You are an adult!' : 'You are a minor!';
// console.log(message);

// let time = 19;
// let greeting = time < 18 ? 'Good day!' : 'Good evening!';
// console.log(greeting);

// let purchaseAmount = 99;
// let discount = purchaseAmount > 100 ? 10 : 0;
// console.log(
//   `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
// );

// // switch statement can be effecient replacement for multiple if else if statements
// let day = 7;

// switch (day) {
//   case 1:
//     console.log('It is Monday');
//     break;
//   case 2:
//     console.log('It is Tuesday');
//     break;
//   case 3:
//     console.log('It is Wednesday');
//     break;
//   case 4:
//     console.log('It is Thursday');
//     break;
//   case 5:
//     console.log('It is Friday');
//     break;
//   case 6:
//     console.log('It is Saturday');
//     break;
//   case 7:
//     console.log('It is Sunday');
//     break;
//   default:
//     console.log('Invalid day');
// }

// let testScore = 55;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = 'A';
//     break;
//   case testScore >= 80:
//     letterGrade = 'B';
//     break;
//   case testScore >= 70:
//     letterGrade = 'C';
//     break;
//   case testScore >= 60:
//     letterGrade = 'D';
//     break;
//   default:
//     letterGrade = 'F';
// }

// console.log(`Your letter grade is: ${letterGrade}`);

// // String methods allow you to manipulates and work with text (strings)
// let userName = 'hey Rara';
// console.log(`${userName.charAt(3)} = ${userName.charCodeAt(3)}`);
// console.log(userName.indexOf('a'));
// console.log(userName.lastIndexOf('a'));
// console.log(`before: ${userName}, after: ${userName.trim()}`);
// console.log(userName.toLowerCase());
// console.log(userName.repeat(3));

// let result = userName.includes(' ');
// if (result) {
//   console.log('your username can not include spaces');
// } else {
//   console.log(userName);
// }

// let phoneNumber = '123-456-7890';
// let newNumber = phoneNumber.replaceAll('-', '');
// let newNumber2 = phoneNumber.padEnd(15, '0');
// console.log(phoneNumber, newNumber, newNumber2);

// // String slicing = creating a substring by extracting part of a string
// let fullName = 'Rara Smith';
// // let firstName = fullName.slice(0, 4);
// // let lastName = fullName.slice(5, 10);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-5);

// let firstName = fullName.slice(0, fullName.indexOf(' '));
// let lastName = fullName.slice(fullName.indexOf(' ') + 1);
// console.log(firstName);
// console.log(lastName);

// const email = 'raras1@gmail.com';
// let userName2 = email.slice(0, email.indexOf('@'));
// let extension = email.slice(email.indexOf('@') + 1);
// console.log(userName2);
// console.log(extension);

// // Method chaining = calling one method after another in one continuous line of code

// let username = '   raRa Hey';

// // --------- NO METHOD CHAINING -----------
// // username = username.trim();
// // let letter = username.charAt(0);
// // letter = letter.toUpperCase(); // first letter capitalized
// // let otherLetters = username.slice(1);
// // otherLetters = otherLetters.toLowerCase();
// // username = letter + otherLetters;
// // username = username.replaceAll(' ', '_');
// // console.log(username);

// // --------- METHOD CHAINING -----------
// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();
// username = username.replaceAll(' ', '_');
// console.log(username);

// // Logical Operators = used to combine or manipulate boolean (true/false) values
// // && (AND) operator = true if ALL conditions are true
// // || (OR) operator = true if ONE of the conditions is true
// // ! (NOT) operator = reverses the value of a boolean

// const temp = 25;
// if (temp < 0 || temp > 30) {
//   console.log('The weather is bad!');
// } else {
//   console.log('The weather is good!');
// }

// const isSunny = false;

// if (!isSunny) {
//   console.log('It is cloudy');
// } else {
//   console.log('It is a sunny day!');
// }

// // While loop = repeat some code while a condition is true
// // let username3;
// // while (username3 === '' || username3 === null) {
// //   username3 = window.prompt('Enter a username: ');
// // }

// // do {
// //   username3 = window.prompt('Enter a username: ');
// // } while (username3 === '' || username3 === null);

// // console.log(`Hello ${username3}`);

// // let loggedIn = false;
// // let username4;
// // let password;

// // while (!loggedIn) {
// //   username4 = window.prompt('Enter your username:');
// //   password = window.prompt('Enter your password:');
// //   if (username4 === 'myUsername' && password === 'myPassword') {
// //     loggedIn = true;
// //     console.log('You are logged in!');
// //   } else {
// //     console.log('Incorrect credentials, try again!');
// //   }
// // }

// // do {
// //   username4 = window.prompt('Enter your username:');
// //   password = window.prompt('Enter your password:');
// //   if (username4 === 'myUsername' && password === 'myPassword') {
// //     loggedIn = true;
// //     console.log('You are logged in!');
// //   } else {
// //     console.log('Incorrect credentials, try again!');
// //   }
// // } while (!loggedIn);

// // for loop = repeat some code a certain number of times
// // for (let i = 1; i <= 20; i++) {
// //   if (i === 10) {
// //     break;
// //   } else {
// //     console.log(i);
// //   }
// // }

// // Function = A section of reusable code that performs a specific task.
// // Declare once, use it whenever you want.
// // Call the function to execute the code.

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// function isEven(x) {
//   return x % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {
//   return email.includes('@');
// }

// console.log(isValidEmail(`rara@gmail.com`));
// console.log(isValidEmail('lala.com'));

// // callback => a function passed as an argument to another function
// sum(displayPage, 5, 10);

// function sum(callback, a, b) {
//   let result = a + b;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

// function displayPage(result) {
//   const myH1 = document.getElementById('myH1');
//   myH1.textContent = result;
// }

// constructor = special method for defining the properties and methods of objects
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.displayProduct = function () {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   };
//   this.calculateTotal = function (salesTax) {
//     return this.price + this.price * salesTax;
//   };
// }

const salesTax = 0.05;

// const product1 = new Product('Shirt', 19.99);
// const product2 = new Product('Pants', 22.5);

// product1.displayProduct();

// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total price (with tax): $${totalPrice.toFixed(2)}`);

// class = (ES6 feature) provides a more structured and clearer way to work with objects compared to traditional constructor function
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const product1 = new Product('Shirt', 19.99);
// const product2 = new Product('Pants', 22.5);

// product2.displayProduct();
// const totalPrice = product2.calculateTotal(salesTax);
// console.log(`Price after tax: $${totalPrice.toFixed(2)}`);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   // Method biasa
//   sayHello() {
//     console.log(`Hi, I'm ${this.name}`);
//   }

//   // Method static
//   static greet(name) {
//     console.log(`Hello from ${name}`);
//   }
// }

// const p1 = new Person('Spongebob');

// p1.sayHello(); // ✅ "Hi, I'm Spongebob"
// Person.greet('Patrick'); // ✅ "Hello from Person"

// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   sayHello() {
//     return console.log(`Hello, my username is ${this.username}`);
//   }

//   static getUserCount() {
//     return console.log(`There are ${this.userCount} users online.`);
//   }
// }

// const user1 = new User('Spongebob');
// const user2 = new User('Patrick');
// const user3 = new User('Sandy');
// const user4 = new User('Squidward');
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();

// User.getUserCount();

// inheritance = allow a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusability

// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this= this object
// super =the parent

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`This ${this.name} can move at a speed of ${speed}mph.`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }

// const rabbit = new Rabbit('rabbit', 1, 25);
// const fish = new Fish('fish', 2, 20);
// const hawk = new Hawk('hawk', 1, 15);

// rabbit.run();
// fish.swim();
// hawk.fly();

// class Hello {
//   static greeting = 'Hello';
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`${this.constructor.greeting}, this is ${this.name}`);
//   }
// }

// class HelloMorning extends Hello {
//   static greeting = 'Good Morning';
//   constructor(name, mood) {
//     super(name);
//     this.mood = mood;
//   }

//   sayHelloMorning() {
//     console.log(
//       `${this.constructor.greeting} ${this.name}! You are in ${this.mood} mood. `
//     );
//   }
// }

// class HelloAfternoon extends Hello {
//   static greeting = 'Good Afternoon';
//   constructor(name, mood) {
//     super(name);
//     this.mood = mood;
//   }

//   sayHelloAfternoon() {
//     console.log(
//       `${this.constructor.greeting} ${this.name}! You are in ${this.mood} mood. `
//     );
//   }
// }

// const hello2 = new HelloMorning('Ara', 'good');
// hello2.sayHelloMorning();
// const hello3 = new HelloAfternoon('Caca', 'Bad');
// hello3.sayHelloAfternoon();
// const hello = new Hello('Acong');
// hello.sayHello();

// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// to validate and modify value when reading/writing a property

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       return (this._width = newWidth);
//     } else {
//       console.error(`Width must be a positive number`);
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       return (this._height = newHeight);
//     } else {
//       console.error(`Height must be a positive number`);
//     }
//   }

//   get width() {
//     return this._width;
//   }

//   get height() {
//     return this._height;
//   }

//   get area() {
//     return this._width * this._height;
//   }
// }

// const rect = new Rectangle(3, 4);
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.area);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFName) {
//     if (typeof newFName === 'string' && newFName.length > 0) {
//       return (this._firstName = newFName);
//     } else {
//       console.error(`Your first name must be a non-empty string.`);
//     }
//   }

//   set lastName(newLName) {
//     if (typeof newLName === 'string' && newLName.length > 0) {
//       return (this._lastName = newLName);
//     } else {
//       console.error(`Your last name must be a non-empty string.`);
//     }
//   }

//   set age(newAge) {
//     if (typeof newAge === 'number' && newAge >= 0) {
//       return (this._age = newAge);
//     } else {
//       console.error(`Your age must be a non-negative number.`);
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get age() {
//     return this._age;
//   }

//   get fullName() {
//     return this._firstName + ' ' + this._lastName;
//   }
// }

// const person1 = new Person('Spongebob', 'Squarepants', 35);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);

// function getSum(...numbers) {
//   // let result = 0;
//   // for (let number of numbers) {
//   //   result += number;
//   // }
//   // return result;

//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// const number1 = 15;
// const number2 = 20;
// const number3 = 45;

// const sum = getSum(number1, number2, number3);
// console.log(sum);

// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// 1. SWAP THE VALUE OF TWO VARIABLES
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// const colors = ['red', 'green', 'blue', 'black', 'white'];

// 2. SWAP ELEMENTS IN AN ARRAY

// [colors[0], colors[4]] = [colors[4], colors[0]];

// 3. ASSIGN ELEMENTS TO VARIABLES
// [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// 4. EXTRACT VALUES FROM OBJECT
// const person1 = {
//   firstName: 'Spongebob',
//   lastName: 'Squarepants',
//   age: 30,
//   job: 'Fry Cook',
// };

// const person2 = {
//   firstName: 'Patrick',
//   lastName: 'Star',
//   age: 32,
// };

// const { firstName, lastName, age, job = 'Unemployed' } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// 5. DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({ firstName, lastName, age, job = 'Unemployed' }) {
//   console.log(firstName);
//   console.log(lastName);
//   console.log(age);
//   console.log(job);
// }

// displayPerson(person2);

// nested objects = objects inside of other objects. allows you to represent more complex data structures.
// Child object is enclosed by a Parent Object
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
// const person = {
//   fullName: 'Spongebob Squarepants',
//   age: 30,
//   isStudent: true,
//   hobbies: ['karate', 'jellyfishing', 'cooking'],
//   address: {
//     street: '123 Conch st.',
//     city: 'Bikini Bottom',
//     country: 'Int. water',
//   },
// };
// console.log(person['fullName']);

// const key = 'fullName';
// console.log(person[key]);

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[1]);
// console.log(person.address.street);

// for (let key in person.address) {
//   const value = person.address[key];
//   console.log(`${key}: ${value}`);
// }

// for (const key in person.address) {
//   console.log(person.address[key]);
// }

// const street = '124 Conch St.';
// const city = 'Bikini Bottom';
// const country = 'Int. Waters';

// NESTED OBJECT
// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person = new Person(
//   'Spongebob',
//   30,
//   '124 Conch St.',
//   'Bikini Bottom',
//   'Int. Waters'
// );

// console.log(person.address.country);

// // wraping those 3 variables with rest parameter
// const arr = (...param) => {
//   console.log(param);
//   Param(...param); // unwrap with spread operator
// };

// const Param = (street, city, country) => {
//   console.log(street);
//   console.log(city);
//   console.log(country);
// };

// arr(street, city, country);

// ARRAY OF OBJECTS
// const fruits = [
//   {
//     name: 'Apple',
//     color: 'Red',
//     calories: 95,
//   },
//   {
//     name: 'Orange',
//     color: 'Orange',
//     calories: 45,
//   },
//   {
//     name: 'Banana',
//     color: 'Yellow',
//     calories: 105,
//   },
//   {
//     name: 'Coconut',
//     color: 'White',
//     calories: 159,
//   },
//   {
//     name: 'Pineapple',
//     color: 'Yellow',
//     calories: 37,
//   },
// ];

// console.log(fruits[2].color);

// console.log(fruits);

// forEach() Loop through the elements of array
// fruits.forEach((fruit) => {
//   console.log(fruit.name);
// });

// map method
// const fruitNames = fruits.map((fruit) => {
//   return fruit.name;
// });
// const fruitColors = fruits.map((fruit) => {
//   return fruit.color;
// });

// console.log(fruitNames);
// console.log(fruitColors);

// filter method
// const yellowFruits = fruits.filter((fruit) => {
//   return fruit.color === 'Yellow';
// });

// const lowCalFruits = fruits.filter((fruit) => {
//   return fruit.calories < 100;
// });

// const maxCalFruit = fruits.reduce((accumulator, currentValue) => {
//   return Math.max(accumulator, currentValue.calories);
// }, -Infinity);

// const maxCalFruit2 = fruits.reduce((max, currentValue) => {
//   return currentValue.calories > max.calories ? currentValue : max;
// });

// const minCalFruit = fruits.reduce((accumulator, currentValue) => {
//   return Math.min(accumulator, currentValue.calories);
// }, Infinity);

// const minCalFruit2 = fruits.reduce((min, currentValue) =>
//   currentValue.calories < min.calories ? currentValue : min
// );

// console.log(minCalFruit2.calories);

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.sort();
// console.log(fruits);

// const numbers = [1, 10, 2, 20];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// sort() = used to sort elements of an array in place.
// Sorts elements as strings in lexicographic ondragover, not aphabetical lexicographic = (alphabet + numbers = symbols) as strings

// const people = [
//   { name: 'Spongebob', age: 30, gpa: 3.0 },
//   { name: 'Patrick', age: 37, gpa: 1.5 },
//   { name: 'Squidward', age: 51, gpa: 2.5 },
//   { name: 'Sandy', age: 27, gpa: 4.0 },
// ];

// people.sort((a, b) => b.gpa - a.gpa);
// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);
// for (const key in people) {
//   console.log(people[key].age);
// }

// this is the best way for  looping array of objects
// for (const person of people) {
//   console.log(`${person.name}: ${person.gpa}`);
// }

// SHUFFLE AN ARRAY
// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// shuffle(cards);
// // cards.sort(() => Math.random() - 0.5);
// console.log(cards);

// // FISHER-YATES ALGORITHM
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));

//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// DATE OBJECTS = object that contain values that represent dates and times.
// these data object can be changed and formatted.
// const date = new Date();

// date.setFullYear(2025);
// date.setMonth(9);
// date.setDate(4);
// date.setHours(12);
// date.setMinutes(3);
// date.setSeconds(7);
// console.log(date);

// CLOSURE = A function defined inside of another function, the inner function  has access to the variables and scope of the outer funtion.
// allow for private variables and state maintenance. used frequently in JS frameworks: react, Vue, Angular.

// function outer() {
//   let message = 'Hello';
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }
// outer();

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`The current count is ${counter.getCount()}`);

// function createGame() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
//     getScore();
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
//     getScore();
//   }

//   function getScore() {
//     console.log(`Your score: ${score}pts`);
//   }
//   return { increaseScore, decreaseScore };
// }

// const game = createGame();
// game.increaseScore(5);
// game.increaseScore(5);
// game.increaseScore(5);
// game.decreaseScore(5);

// setTimeot() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (miliseconds)
// Times arre approximate (varies based on the workload of the JS runtime env.)
// setTimeout(callback, delay)

// let timeOutId;

// function startTimer() {
//   timeOutId = setTimeout(() => window.alert('Hello'), 3000);
//   console.log('STARTED');
// }

// function clearTimer() {
//   clearTimeout(timeOutId);
//   console.log('CLEARED');
// }

// synchronous = Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete.
// asynchronous = Allows multiple operations to be performed concurrently without waiting. DOesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data). can handle with: Callbacks, Promises, Async/Await
// function func1(callback) {
//   setTimeout(() => {
//     console.log('Task 1');
//     callback();
//   }, 5000);
// }

// function func2() {
//   console.log('Task 2');
//   console.log('Task 3');
//   console.log('Task 4');
// }

// func1(func2);

// Error = an object that is created to represent a problem that occurs often with user input or establishing a connection
// try { } = encloses code that might potentially cause an eror
// catch { } = catch and handle any thrown errors from try{}
// finally {} = (optional) Always executes. Used mostly for clean up ex: close files, close connections, release resources.
// try {
//   console.log('Hello');
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log('This will always executed');
// }
// try {
//   const dividend = Number(window.prompt('Enter a dividend'));
//   const divisor = Number(window.prompt('Enter a divisor'));

//   if (divisor == 0) {
//     throw new Error("you can't divide by zero!");
//   }
//   if (isNaN(dividend) || isNaN(divisor)) {
//     throw new Error('you must enter a number');
//   }

//   const result = dividend / divisor;
//   console.log(result);
// } catch (error) {
//   console.error(error);
// };
// console.log('You have reached the end!');

// DOM = DOCUMENT OBJECT MODEL
// object{} that represents the page you see in the web browser and provides you with an API to interact with it.
// web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dinamically change the content, structure, and style of a web page.

// const username = 'Ara';
// const welcomeMsg = document.getElementById('welcome-msg');

// welcomeMsg.textContent += username === '' ? ' Guest' : ` ${username}`;

// element selectors = methods used to target and manipulate HTML elements. they allow you to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById() ELEMENT OR NULL
// 2. document. getElementsClassName() HTML collection
// 3. document.getElementByTagName() HTML collection
// 4. document.querySelector() ELEMENT OR NULL
// 5. document. querySelectorAll() NODELIST

// const myHeading = document.getElementById('my-heading');
// myHeading.style.backgroundColor = 'yellow';
// myHeading.style.textAlign = 'center';

// console.log(myHeading);

// const fruits = document.getElementsByClassName('fruits');

// console.log(fruits);

// fruits[0].style.backgroundColor = 'yellow';
// for (const fruit of fruits) {
//   fruit.style.backgroundColor = 'yellow';
// }
// const fr = Array.from(fruits);
// fr.forEach((fruit) => (fruit.style.backgroundColor = 'red'));

// const arr = ['a', 'b', 'c'];

// for (const i in arr) {
//   console.log(typeof i, i);
// }

// for (const i of arr) {
//   console.log(typeof i, i);
// }

// arr.forEach((element, index) => {
//   console.log(`[${index}]: ${element}`);
// });

// const arr2 = [1, 2, 3, 4];
// const doubled = arr2.map((el) => el * 2);
// console.log(doubled);

// const even = arr2.filter((el) => el % 2 === 0);
// console.log(even);

// const sum = arr2.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);

// GET ELEMENT BY TAG NAME
// const h4Elements = document.getElementsByTagName('h4');
// console.log(h4Elements);

// const liElements = document.getElementsByTagName('li');
// console.log(liElements);

// for (const element of liElements) {
//   element.style.backgroundColor = 'green';
// }

// for (const element of h4Elements) {
//   element.style.backgroundColor = 'yellow';
// }
// h4Elements[0].style.backgroundColor = 'yellow';

// Array.from(h4Elements).forEach((el) => (el.style.backgroundColor = 'pink'));

// Array.from(liElements).forEach(
//   (el) => (el.style.backgroundColor = 'lightgreen')
// );

// QUERY SELECTOR = find the first matching element or null if it can't find

// const element = document.querySelector('#non-root');
// console.log(element);

// element.style.backgroundColor = 'yellow';

// QUERY SELECTOR ALL
// const fruits = document.querySelectorAll('li');
// console.log(fruits);

// fruits.forEach((el) => (el.style.backgroundColor = 'lightblue'));

// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript

// --------.firstElementChild--------
// const element = document.getElementById('desserts');
// const firstChild = element.firstElementChild;

// firstChild.style.backgroundColor = 'yellow';

// console.log(firstChild);

// const ulElements = document.querySelectorAll('ul');
// ulElements.forEach(
//   (el) => (el.firstElementChild.style.backgroundColor = 'lightblue')
// );

// -----.lastElementChild-----

// const element1 = document.getElementById('desserts');

// const lastChild = element1.lastElementChild;

// lastChild.style.backgroundColor = 'lightgrey';

// const elements2 = document.querySelectorAll('ul');

// elements2.forEach(
//   (el) => (el.lastElementChild.style.backgroundColor = 'lightpink')
// );

// -------.nextElementSibling-------
// const element = document.getElementById('vegetables');
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = 'lightgreen';

// -----.previousElementSibling------
// document.getElementById(
//   'desserts'
// ).previousElementSibling.style.backgroundColor = 'pink';

// -----.parentElement------
// const parentElement = document.getElementById('apple').parentElement;

// parentElement.style.backgroundColor = 'yellow';

// childs = parentElement.querySelectorAll('li');

// childs.forEach((el) => (el.style.backgroundColor = 'lightblue'));

// -----.children------
// const element = document.getElementById('fruits');
// const child = element.children;

// Array.from(child).forEach((el) => (el.style.backgroundColor = 'yellow'));

// child[1].style.backgroundColor = 'yellow';

// for (el of child) {
//   el.style.backgroundColor = 'yellow';
// }

// ADD & CHANGE HTML
// STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement('h1');
// newH1.id = 'myH1';
// newH1.style.color = 'tomato';
// newH1.style.textAlign = 'center';

// // ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = 'I like pizza';

// APPEND ELEMENT DOM
// document.body.append(newH1);
// document.getElementById('box1').prepend(newH1);
// const box2 = document.getElementById('box2');
//document.body.insertBefore(newH1, box2);

// const box = document.getElementsByClassName('box');
// const box = document.querySelectorAll('.box');

// const n = 2;
// document.body.insertBefore(newH1, box[n - 1]);

// REMOVE HTML ELEMENT
// document.body.lastChild.remove();
// document.body.removeChild(newH1);
// document.getElementById('box1').removeChild(newH1);

// ---- EXAMPLE 3---
// CREATE THE ELEMENT
// const newListItem = document.createElement('li');
// newListItem.textContent = 'coconut';
// newListItem.id = 'coconut';
// newListItem.style.fontWeight = 'bold';
// newListItem.style.backgroundColor = 'lightgreen';
// document.getElementById('fruits').append(newListItem);
// const banana = document.getElementById('banana');
// document.getElementById('fruits').insertBefore(newListItem, banana);
// const listItems = document.querySelectorAll('#fruits li');
// document.getElementById('fruits').insertBefore(newListItem, listItems[1]);

// REMOVE ITEM
// const coconut = document.getElementById('coconut');
// const parentElement = document.getElementById('fruits');
// parentElement.removeChild(coconut);

// document.getElementById('fruits').removeChild(newListItem);

// eventListener = listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, callback);

// const myBox = document.getElementById('myBox');
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', () => {
//   myBox.style.backgroundColor = 'pink';
//   myBox.textContent = 'Hello 😊';
// });
// myButton.addEventListener('mouseover', () => {
//   myBox.style.backgroundColor = 'yellow';
//   myBox.textContent = 'Warning 😧';
// });
// myButton.addEventListener('mouseout', () => {
//   myBox.style.backgroundColor = 'lightgreen';
//   myBox.textContent = 'Click Me 😃';
// });

// .eventListener: events=> keydown, keyup, keypress
// const myBox = document.getElementById('myBox');

// document.addEventListener('keydown', () => {
//   myBox.textContent = '😧';
//   myBox.style.backgroundColor = 'tomato';
// });

// document.addEventListener('keyup', () => {
//   myBox.textContent = '😃';
//   myBox.style.backgroundColor = 'lightblue';
// });

// document.addEventListener('keydown', (event) =>
//   console.log(`Key down = ${event.key}`)
// );
// document.addEventListener('keyup', (event) =>
//   console.log(`Key up = ${event.key}`)
// );

// const moveAmount = 100; //for pixels
// let x = 0;
// let y = 0;

// document.addEventListener('keydown', (event) => {
//   event.preventDefault();
//   if (!event.key.startsWith('Arrow')) return;

//   switch (event.key) {
//     case 'ArrowUp':
//       y -= moveAmount;
//       console.log(y);
//       break;
//     case 'ArrowDown':
//       y += moveAmount;
//       console.log(y);
//       break;
//     case 'ArrowRight':
//       x += moveAmount;
//       console.log(x);
//       break;
//     case 'ArrowLeft':
//       x -= moveAmount;
//       console.log(x);
//       break;
//   }

//   myBox.textContent = '😧';
//   myBox.style.backgroundColor = 'tomato';
//   myBox.style.top = `${y}px`;
//   myBox.style.left = `${x}px`;
// });

// HIDE/SHOW HTML
// const myButton = document.getElementById('myButton');
// const myImg = document.getElementById('myImg');

// myButton.addEventListener('click', () => {
//   myImg.classList.toggle('hidden');
//   myButton.textContent = myImg.classList.contains('hidden') ? 'Show' : 'Hide';

//   // if (myImg.style.display === 'none') {
//   //   myImg.style.display = 'block';
//   //   myButton.textContent = 'Hide';
//   // } else {
//   //   myImg.style.display = 'none';
//   //   myButton.textContent = 'Show';
//   // }
// });

// NodeList = static collection of HTML elements by (id, class, element). can be created by using querySelectorAll(). Similar to an array, but no (map, filter, reduce).
// Nodelist won't update to automatically reflect changes to the DOM.
// let buttons = document.querySelectorAll('.myButtons');

// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     event.target.style.backgroundColor = 'tomato';
//   });
// });
// buttons.forEach((button) => {
//   button.addEventListener(
//     'mouseover',
//     (event) => (event.target.style.backgroundColor = 'hsl(205, 100%, 40%)')
//   );
// });
// buttons.forEach((button) => {
//   button.addEventListener('mouseout', (event) => {
//     event.target.style.backgroundColor = 'hsl(205, 100%, 60%)';
//   });
// });

// ADD NEW ELEMENT TO EXISTING NODELIST
// const newButton = document.createElement('button');
// newButton.textContent = 'Button 5';
// newButton.classList.add('myButtons');
// document.body.appendChild(newButton);
// buttons = document.querySelectorAll('.myButtons');
// console.log(buttons);

// REMOVE AN ELEMENT IN NODELIST WHEN CLICKING
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     event.target.remove();
//     buttons = document.querySelectorAll('.myButtons');
//     console.log(buttons);
//   });
// });

// document.body.addEventListener('click', (event) => {
//   if (event.target.classList.contains('myButtons')) {
//     event.target.remove();
//     buttons = document.querySelectorAll('.myButtons');
//     console.log(buttons);
//   }
// });

// classList = element property in Javascript used to interact with an element's list of classes (css classes). allows you to make reusable classes for many elements across you web page.
// add(), remove(), toggle(remove if present, add if not), replace(oldclass, newclass), contains()

// const myButton = document.getElementById('myButton');
// const myH1 = document.getElementById('myH1');

// myH1.classList.add('enabled');
// myButton.classList.add('enabled');
// myButton.classList.remove('enabled');
// myButton.addEventListener('mouseover', (event) => {
//   event.target.classList.toggle('hover');
// });
// myButton.addEventListener('mouseout', (event) => {
//   event.target.classList.toggle('hover');
// });

// myButton.addEventListener('click', (event) => {
//   if (event.target.classList.contains('enabled')) {
//     event.target.classList.replace('enabled', 'disabled');
//   } else {
//     event.target.textContent += '🤬';
//   }
// });
// myH1.addEventListener('click', (event) => {
//   if (event.target.classList.contains('enabled')) {
//     event.target.classList.replace('enabled', 'disabled');
//   } else {
//     event.target.textContent += '🤬';
//   }
// });

let myButtons = document.querySelectorAll('.myButtons');

myButtons.forEach((button) => {
  button.classList.add('enabled');
  button.addEventListener('click', (event) => {
    if (event.target.classList.contains('disabled')) {
      event.target.textContent += '😧';
    } else {
      event.target.classList.replace('enabled', 'disabled');
    }
  });

  button.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('hover');
  });
  button.addEventListener('mouseout', (event) => {
    event.target.classList.toggle('hover');
  });
});
