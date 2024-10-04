
/* // Object with method

const s = 'Hello';
console.log(s.toUpperCase()); */

/* // Strings and Objects

// log s1 type
const s1 = 'Hello';
console.log(typeof s1);

// log s2 type
const s2 = new String('Hello');
console.log(typeof s2);


// window is the Parent object of DOM
console.log(window);

// window with method
console.log(window.alert(1));

// window with object and its property
console.log(window.navigator.appVersion);*/

/* // Object Literals

// book1 object
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',

    // add a method to object
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};

console.log(book1);

// get property from object
console.log(book1.title);

// get method from object
console.log(book1.getSummary());

// get object values
console.log(Object.values(book1));

// get object keys
console.log(Object.keys(book1));



 */

/* // Constructors

// If we want to duplicate objects we can use constructors
// constructor is a function

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}

// Instantiating objects
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

// display book1 object
console.log(book1);

// get title of book1
console.log(book1.title);

// get summary of book1
console.log(book1.getSummary());

// get summary of book2
console.log(book2.getSummary()); */

/* // Prototypes

// You can move a constructor method to a prototype when you don't want it in every object you create.

// Book Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}


// moving getSummary() to prototype
Book.prototype.getSummary = function(){

        return `${this.title} was written by ${this.author} in ${this.year}.`;
}

// getAge prototype
// calculate book's age
Book.prototype.getAge = function(){

    // get current year from Date - book's year
    const years = new Date().getFullYear() - this.year;

    return `${this.title} is ${years} years old.`;
}


// Revise prototype
// Change book year
Book.prototype.revise = function(newYear){

    this.year = newYear;
    this.revised = true;

}


// Instantiating books
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');


// Call getSummary()
console.log(book2.getSummary());

// See book2
// you can see getSummary() is stored in <prototype> section
console.log(book2);

// get book's age
console.log(book1.getAge());
console.log(book2.getAge());

// add revised year
book2.revise('2018');

// see updated book2
console.log(book2);  */

/* // Inheritance

// Book Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}


// getSummary() prototype
Book.prototype.getSummary = function(){

        return `${this.title} was written by ${this.author} in ${this.month}, ${this.year}.`;
}


// Create Magazine object that inherits Book's properties

// Magazine Constructor
function Magazine(title, author, year, month) {

    // call Book object 
    // with title, author, year
    Book.call(this, title, author, year);

    this.month = month;

}

// Instantiate a Magazine
const  mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// see mag1
console.log(mag1);

// try to call getSummary for mag1
// console.log(mag1.getSummary());
// Uncaught TypeError: mag1.getSummary is not a function

// Inheriting prototype
Magazine.prototype = Object.create(Book.prototype);
const  mag2 = new Magazine('Mag Two', 'Jane Doe', '2016', 'Dec');

console.log(mag2.getSummary());

// Changing constructor
// from Book to Magazine
Magazine.prototype.constructor = Magazine;
console.log(mag1);
 */

/* // Object Create Method

// Define array of functions
const bookProtos = {

    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.month}, ${this.year}.`;
    },

    getAge: function(){

        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;

    }
}


// Create object with Prototypes
const book1 = Object.create(bookProtos);

// add values
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';

console.log(book1);
console.log(book1.getAge());


// another way
const book2 = Object.create(bookProtos, {
    title : { value: 'Book Two'},
    author : { value: 'Jane Doe'},
    year : { value: '2016'},
});

console.log(book2);
console.log(book2.getAge()); */

// Classes

class Book {

    constructor(title, author, year){

        this.title = title;
        this.author = author;
        this.year = year;

    }

    // add methods to class
    getSummary(){

        return `${this.title} was written by ${this.author} in ${this.month}, ${this.year}.`;

    }

    getAge(){

        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;

    }

    revise(newYear){

        this.year = newYear;
        this.revised = true;

    }

    // create a static method
    static topBookStore(){

        return `Barnes & Noble`;

    }

}

// Instantiate a Book
const book1 = new Book('Book One', 'John Doe', '2013');

book1.revise('2018');
console.log(book1);

 // No instantiation needed for static methods
 // static methods runs from class 
 console.log(Book.topBookStore());