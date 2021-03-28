// index.ts

// import stylesheets
import './style.css'

// Write TypeScript Code
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1>TypeScript Starter</h1>'

// TODO 1: give the constant an appropriate type
const FLOP_BAR: number = 100000;

// TODO 2: give the gross parameter an appropriate type
function isFlop(gross: number) {
  return gross < FLOP_BAR;
}

let movieReleaseYears = [1962, 1964, 1984];

// Calculate the total timespan from an array of years;
// TODO 3: give the function's parameter the correct type
function totalTimespan(years: number[]) {
  return years[years.length - 1] - years[0]
}

// TODO 4: give this class the following construction parameters with types: title, year, and numStars
// and capture those parameters into properties with the same names
class Moview {
  // title: string;
  // year: number;
  // numStars: number;

  constructor(public title: string, public year: number, public numStars: number) {
    this.title = title;
    this.year = year;
    this.numStars = numStars;
  }
}

// TODO 5: Find and fix all problems with the following code by applying types
let userId = 5;
function checkoutMovie(movie: Moview, inventory: Inventory, checkoutLog: CheckoutLog, userId: number[]) {
  if(inventory.isinStock(movie.title)) {
    inventory.reduceQuantity(movie.title, 1);
    checkoutLog.add(movie.title, userId);
    return true;
  } else {
    return false;
  }
}

class Inventory {
  // title: string;

  // constructor(title: string) {
  //   this.title = title;
  // }

  isinStock(title: string) : boolean {
    return true;
  }

  reduceQuantity(title: string, count: number = 1) {
    return true;
  }
}

class CheckoutLog {
  add(movieTitle: string, userid: number) {
    // implementation
  }
}

//
let age: number;
age = 3;

let name: string;
name = 'Test';

let adult: boolean;
adult = true;

let result: any;
result = 3;
result = true;

let person: { name: string, age: number };
person = { name: 'Test', age: 5 };
person.age = 30;

function createPerson(age, name) {
  return { age, name };
}

createPerson(30, 'New');

class Person {
  age: number;
  name: string;
}

let bob = new Person();

let ages: any[] = [];
ages.push(25);

// Decorator example
@Decorator()
class Movie {
  title: string;
  year: number;
  @PropertyDecorator() longTitle: string;

  constructor(@ParamDecorator() public title: string, year: number) {
    this.title = title;
    this.year = year;
  }

  formatTitle() {
    return this.year;
  }
}

let twilight = new Movie('Twilight', 2008);
twilight.title;

