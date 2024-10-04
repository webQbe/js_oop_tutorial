
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

// Object Literals

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





