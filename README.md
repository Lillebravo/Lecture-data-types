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
## let
This is the last keyword we can use in order to create variables. It is very similar to const but we are allowed to re-assign a `let` variable. 

```js
let theseStreets = "kungsbacka";
theseStreets = "johans kurrande mage"; // This is totally fine
```

This is fine, but we can also change the data type if we would like.

```js
let id = "abc";
id = "123"; // This is fine, the data type doesn´t matter. But it´s bad practice to change datatype
```

Even though this is allowed , it´s not recommended. Keep it clean, only one datatype per variable. 

## If statements

An `if` statement is just a way for the application to decide which way to go. Simply put. Depending on conditions that we define, the application can do one thing or the other. Usually an application consists of hundreds of conditions in different combinations. So it´s an essential tool to know. 

What a statement means is also a good thing to know. It just means a set of instructions that the computer follows.

### Basic If syntax

```js
if (condition) {
    // Code to be executed if the condition is true
}
```

`if`is the keyword that tells the compiler that an if check is declared. The condition is a value that can be evaluated to either `true` or `false`. The code block contains the code to be executed when the condition is `true`.

```js
const age = 27;

if (age > 23) {
    console.log("You are an adult.");
}
```

This is fine, if we just want to check if the condition is `true`, but what if it´s `false`? Maybe we want to handle that case as well. Lets look at the `else` keyword. 

In this case and example, we want to console log something if we aren´t above the age of 23.

```js
const age = 27;

if (age > 23) {
    console.log("You are an adult.");
}
else {
    console.log("You are a stinky child like Johan Rehn.");
}
```

## Comparison operators
In order to evaluate our conditions we need tools for that, and they are called comparison operators. It´s the characters that we use to compare the variables or whatever it is we are comparing. 

`>, <` - Greater then, or less then
Operators to check if something is greater then, or less then. It´s very straight forward.

`>=, <=` - Greater then or equal, less then or equal.
Same as above, but with the added possibility for the "terms" to be equal to each other. 

`==` equal (but NOT strict)
Compares the 2 things to see if they are equal but not strict equal. It means that we can compare to values of different data types, and still get a true value. This is called equal with cohersion. It means that the editor or browser will try to convert one of the values to the other data type.

```js
"10" == 10; // => will be true
```

`===` equal (AND strict)
Same as above but the values must be of the same data type.

```js
"10" === 10; // => will be false due to different data typed.
10 === 10; // True
```
In the majority of cases, always go for the strict equal comparison.

`!=` not equal (NOT strict)
`!==` not equal (AND strict)

