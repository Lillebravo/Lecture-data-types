# Lecture-data-types
Grundläggande termer, datatyper och variablerLära oss grundläggande verktyg för användar-input och output, Operatorer i JS, If-satser


### String
 string is just a collection of characters with in quotes. It can be both double quotes and single quote. But there also exist a third way of writing strings.
 ```js 
"Jerry" // valid string
'Jerry' // valid string
`Jerry` // valid string
 ```
 These above are all equal, but the backticks-version have some extra functionality.

 For instance, backtics allows multiline strings. The other two dont't.

 ```js
 "My name
 is Jerry" // This wont work in a js file.

 `My name
 is Jerry" // This works just fine.
 ```

 Another example of added funtionality with backtics is the avility to inject variables inside the string, if it is defined woth backtics. 

 ```js
 const name = "Jerry";
 const lastName = "Lundahl";

 `Hello, my name is ${name} ${lastName}!`
``` 
This is also called a string literal.

If we want to do the same thing with regular quation marks, we need to concatinate _(add)_,

```js
const name = "Jerry";
const lastName = "Lundahl";
"Hello, my name is " + name + lastName + ".";
```

### Number
Represents numbers, both integers and decimal values. Just remember that decimal values are witten with a period and not a comma.

```js
35 // Valid number
45.3 // Also valid number
``` 

### Boolean
A boolean represents either a true or false value.

### Date
A date is just a value that represents a date or time. 

```js
const now = new date();
```

This `new Date()` returns a date object that we can manipulate in many ways, and use in our application. 

## Variables

Variables is a way of storing values in reusable packages so to speak. 
| Feature |
'var'
'let'
'const'

### Var
'var' is a key word that is used to create variables. And the key words are always paired with a variable name and a value. Ande the value can of course be of different data types. 

```js
var firstName = "Jerry";
console.log(firstName);
```

`var` has some special characteristics, one of them is that it is re-declarable. 
That means that we can declare the same variable again with a new value.

```js
var firstName = "Jerry";
console.log(firstName); // Jerry

var firstName = "Johan"; // Re-declaration, it´s valid.
console.log(firstName); // Johan
```
You can also re-assign the value on a `var`. 

```js
var firstName = "Jerry";
console.log(firstName); // Jerry

firstName = "Johan"; // Re-assignment, it´s valid.
console.log(firstName); // Johan
```

Scope - vart variabeln är tillgänglig. T.ex. skapar man en variabel i en funktion är scopen bara i den funktionen. Skapar du den i main är scope hela main.

Function scope, what is that? If a `var`is declared inside a function, only lives inside the function. But if a `var` is declared in the top level of a JS-file, it gets a "global scope", which means it´s accessible inside the entire JS-file.
If declaring a var in the top, you might forget it and re-declare it later in the file. Which may not have the desired behavior of the program.

Because of this, don´t use `var` at all. Use the newer types `let` and `const`.

## const
`const` is also a keyword for creating variables. It stands for `constant` which means it is supposed to be constant. It means we shouldn´t change this variable after it has been created. 

```js
const age = 27;
console.log(age);
age = 30; // Won´t work, VSC will sometimes complain and browser will always complain.
```

We can´t re-declare a `const`. 

```js
const age = 27;

const age = 30; // Won´t work, VSC will complain. 
console.log(age);
```

`const` is block scoped, which means if it´s created inside a pair of brackets, in only lives in there. It it´s created at the top level of a JS-file, it lives inside the entire file. 

```js
const name = "Jerry";

if (true) {
    const lastName = "Lundahl";
    console.log(name);
}

console.log(name);
console.log(lastName); // Doesn´t exist in this scope. 
```
