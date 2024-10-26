# Lecture-data-types
Grundläggande termer, datatyper och variablerLära oss grundläggande verktyg för användar-input och output, Operatorer i JS, If-satser

# 2024 10 24 Intro to JavaScript

We start with the foundations when it comes to JS. Data types, variables, user-input and output, operators och if-statements.

<details open>
<summary>Table of content</summary>

[Data Types](#data-types-in-javascript)

- [String](#string)
- [Number](#number)
- [Boolean](#boolean)
- [Undefined](#undefined)
- [Null](#null)
- [Objects](#object)
- [Array](#array)
- [Functions](#functions)
- [Date](#date)

[Variables](#variables)

- [var](#var)
- [const](#const)
- [let](#let)

[If Statements](#if-statements)

- [Basic if-syntax](#basic-if-syntax)
- [if-else statement](#if-else-statement)
- [Comparison Operators](#comparison-operators)
- [if-else-if statments](#if-else-if-statments)
- [Truthy and Falsy](#truthy-and-falsy-values)
- [Logical Operators](#logical-operators)

</details>

## Data Types in JavaScript

| Data Type   | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `String`    | Represents text: `"hello"`, `'world'`.                               |
| `Number`    | Represents both integers and floating-point numbers: `42`, `3.14`.   |
| `Boolean`   | Represents logical values: `true` or `false`.                        |
| `Undefined` | A variable that has been declared but not yet assigned a value.      |
| `Null`      | Represents the intentional absence of any object value.              |
| `Object`    | Represents a collection of key-value pairs. More about it later.     |
| `Array`     | A list of values, objects or other arrrays: `[1, 2, 3]`.             |
| `Function`  | A block of code designed to perform a specific task: `function() {}` |
| `Date`      | Represents dates and times: `new Date()`.                            |

### String

A string is just a collection of characters with in quotes. It can be both double quotes and single quotes. But there also exist a third way of writing strings.

```js
"Niklas"; // Valid string
"Niklas" // Valid string
`Niklas`; // Also valid string, but with backtics.
```

These above are all equal, but the backtics-version have some extra functionality.

For instance, backtics allows multiline strings. The other two don't.

```js
"My name
is Niklas" // This won't work in a js-file.

`My name
is Niklas.` // This however works just fine.
```

Another of added functionality with backtics is the ability to inject variables inside the string, if it is defined with backtics.

```js
const name = "Niklas";
const lastName = "Fähnrich";

`Hello, my name is ${name} ${lastName}!`;
```

This is also called a string literal.

If we want to do the same thing with regular quotation marks, we need to concatinate. _( add )_.

```js
const name = "Niklas";
const lastName = "Fähnrich";

"Hello, my name is " + name + lastName + ".";
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Number
Represents numbers, both integers and decimal values. Just remember that decimal values are witten with a period and not a comma.

```js
35 // Valid number
45.3 // Also valid number
``` 

[Back to top](#2024-10-24-intro-to-javascript)

---

### Boolean
A boolean represents either true or false.

```js
const somethingIsTrue = true;
const somethingIsFalse = false;
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Undefined

Se this link for more info: [Undefined - W3schools](https://www.w3schools.com/jsref/jsref_undefined.asp)

[Back to top](#2024-10-24-intro-to-javascript)

---

### Null

Se this link for more info: [Null - Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)

[Back to top](#2024-10-24-intro-to-javascript)

---

### Object

Se this link for more info: [Object - W3schools](https://www.w3schools.com/js/js_objects.asp)

[Back to top](#2024-10-24-intro-to-javascript)

---

### Array

Se this link for more info: [Arrays - W3schools](https://www.w3schools.com/js/js_arrays.asp)

[Back to top](#2024-10-24-intro-to-javascript)

---

### Functions

Se this link for more info: [Functions - W3schools](https://www.w3schools.com/js/js_functions.asp)

[Back to top](#2024-10-24-intro-to-javascript)

---


### Date
A date is just a value that represents a date or time. 

```js
const now = new date();
```

This `new Date()` returns a date object that we can manipulate in many ways, and use in our application. 

---

## Variables

Variables is a way of storing values in resuable packages so to speak.

| Feature        | `var`                           | `let`                                       | `const`                                             |
| -------------- | ------------------------------- | ------------------------------------------- | --------------------------------------------------- |
| Scope          | Function-scoped                 | Block-scoped                                | Block-scoped                                        |
| Hoisting       | Yes, initialized as `undefined` | Yes, but not initialized before declaration | Yes, but not initialized before declaration         |
| Re-declaration | Allowed                         | Not allowed                                 | Not allowed                                         |
| Reassignment   | Allowed                         | Allowed                                     | Not allowed (for primitive values)                  |
| Immutability   | No                              | No                                          | Yes (for the reference, but not for objects/arrays) |


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

---

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

---

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

[Back to top](#2024-10-24-intro-to-javascript)

---

## If Statements

An if statement is just a way for the application to decide which way to go. Simply put. Depending on certain conditions that we define, the application can do one thing or the other. Usually an application consists av hundreds of condition in different combinations, so it's an essential/fundamental tool to know about when coding.

What a statment means is also a good thing to know. It just means a set of instructions that the computer follows.

[Back to top](#2024-10-24-intro-to-javascript)

---

### Basic if-syntax

```js
if (condition) {
  // code to be executed if the condition is true.
}
```

`if` is the keyword that tells the compiler that an if check is declared. The condition is a value that cand be evaluated to either `true` or `false`. The code block contains the code that is execuded when the condition is `true`.

```js
const age = 20;

if (age > 18) {
  console.log("You are an adult.");
}
```

---

### if-else statement

This is fine, if we just want to check if the condition is `true`, but what if it's `false`? Maybe we want to handle that case as well. Let's look at the `else` keyword. Here is the basic syntax

```js
if (conditon) {
  // code to execute if condition is true
} else {
  // code to execute if the condition is false.
}
```

In this case and example, we want to console.log something if we are not above the age of 18.

```js
const age = 20;

if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are still classed as a minor.");
}
```

This is called an if-else statment. It is very common of course.

[Back to top](#2024-10-24-intro-to-javascript)

---

### Comparison operators

In order to evaluate our conditions we need tools for that, and they are called comparison operators. It's the characters that we use to compare the variables or whatever it is we are comparing.

---

#### greater then, or less then `>, <`

Operator to check if something is greater then, or less then. It's very straight forward.

[Back to top](#2024-10-24-intro-to-javascript)

---

#### greater than OR equal, less then OR equal `>=, <=`

Same as above but with the added possibility for the "terms", _( in lack of a better word )_, to be equal to eachother.

[Back to top](#2024-10-24-intro-to-javascript)

#### equal _( but NOT strict )_ `==`

The compare the two things to see if they are equal but not strict equal. It means that we can compare to values of different data types, and still get a `true` value. This is called equal with cohersion. It means that the editor or browser will try to convert one of the values to the other data type.

```js
"10" == 10; // => will be true

100 == "hundred"; // => will be false, since they don't have the same kind of value.
```

[Back to top](#2024-10-24-intro-to-javascript)

---

#### equal _( AND strict )_ `===`

Same as above but the values must be of the same data type.

```js
"10" === 10; // Will be false due to different data types.

10 === 10; // true.
```

In the majority of cases, always go for the strict equal comparison.

[Back to top](#2024-10-24-intro-to-javascript)


---

#### not equal _( NOT strict)_ `!=`

#### not equal _( AND strict)_ `!==`

[Back to top](#2024-10-24-intro-to-javascript)

---

### if-else-if statments

So if we want to do more specific checks it original one was evaluated to `false`, we can always do more if checks or we can chain it in a if-else-if chain.

The difference is that if we have a chain of if-else-if, only one of the checks will run, which means, if on of the checks in the chain is true, the rest will be ignored.

If we just do a number of if checks after each other, every if check will still run even though one of them was evaluated to `true`.

Here is the basic syntax

```js
if (first condition) {
    // code
} else if (next condition) {
    // code
} else if (next condition) {
    // code
} else if (next condition) {
    // code
} else {
    // code to run as a fallback if every other condition is false.
}
```

Let's do an example with driver's license

```js
const age = 16;

if (age >= 18) {
  console.log("Great, you can take your driver's license.");
} else if (age >= 16) {
  console.log(
    "Sorry, your are not old enough for a driver's license, but you can start practising."
  );
} else {
  console.log("Sorry, you will have to take the bike.");
}
```

There also exists something called a switch statement. But more on that later. Here is a link if you are interested: [switch statements](https://www.w3schools.com/js/js_switch.asp).

---

### Nested if-statements

if you want to do a check that is dependant on another check you can always nest if statments. But beware, it often leads to messy cody that is hard to read. But it's totally fine to do it.

```js
if (condition) {
    if (condition based on earlier condition) {
        // code to run if nested check is true
    }

    // code that always run if original condition is true
}
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Truthy and Falsy values

| Value                   | Type      | Truthy or Falsy |
| ----------------------- | --------- | --------------- |
| `false`                 | Boolean   | Falsy           |
| `0`                     | Number    | Falsy           |
| `-0`                    | Number    | Falsy           |
| `""` (empty string)     | String    | Falsy           |
| `null`                  | Object    | Falsy           |
| `undefined`             | Undefined | Falsy           |
| `NaN` (Not a Number)    | Number    | Falsy           |
| `true`                  | Boolean   | Truthy          |
| Non-zero numbers        | Number    | Truthy          |
| Non-empty strings       | String    | Truthy          |
| `{}` (empty object)     | Object    | Truthy          |
| `[]` (empty array)      | Object    | Truthy          |
| Arrays with content     | Object    | Truthy          |
| Objects with properties | Object    | Truthy          |

Sometimes we just want to evaluate variables directly, for instance, we want to see if a variable is defined or not.

```js
const name = "Niklas";

if (name) {
  console.log(`Oh, that's a cool name you have got ${name}`);
}
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Logical operators

If you want to compare several conditions at the same time, you can use logical operators.

#### `&&` - Logical AND

Is used to check conditions and all of them must be true in order for the entire condition to be true as well.

```js
const isAnAdult = true;
const isCool = true;
const isAwesome = true;

if (isAnAdult && isCool && isAwesome) {
  console.log("Wow, you are both an adult and cool."); // Will run since all of the above is true.
}
```

In the above case, all the "smaller" conditions must be `true` in order for the entire if check to be evaluated to `true`.

```js
const isAnAdult = false;
const isCool = true;
const isAwesome = true;

if (isAnAdult && isCool && isAwesome) {
  console.log("Wow, you are both an adult and cool."); // Will NOT run since NOT all of the above is true.
}
```

[Back to top](#2024-10-24-intro-to-javascript)

---

#### `||` - Logical OR

Is used to evaluate a if check to true if either one of the "smaller" conditions is true.

```js
const isAnAdult = false;
const isCool = true;

if (isAnAdult || isCool) {
  console.log("Wow, you are adult OR cool."); // Will run since one of them is true.
}
```

Or with more conditions

```js
const isAnAdult = false;
const isCool = true;
const isAwesome = true;

if (isAnAdult || isCool || isAwesome) {
  console.log("Wow, you are an adult or cool or awesome."); // Will run since one of them is true.
}
```

Remember, the conditions is always evaluated from left to right. So if we have a `||`, it only needs to check the first condition if that's true in order evaluate the entire expression to true.

Same with `&&`, goes from left to right. If the first of three is `true`, it must check the seconde on and the the third one and if one of them is `false` it will ignore the rest and just evaluate everyhing to `false`,

[Back to top](#2024-10-24-intro-to-javascript)

---

#### `!` - Logical NOT

If you put an exclamation mark before a variable or condition, it will be inverted. So if you write `!true`, it will be false. And `!false` will be true.

```js
const firstName = ""; // This is normally falsy.

if (firstName) {
  // some code. This won't run since it's falsy.
}

if (!firstName) {
  //some code. This will run since the exclamation mark inverts the result of the evaluation.
}
```

Thing of the `!`-sign to be NOT, or the opposite evaluation to what you have.

[Back to top](#2024-10-24-intro-to-javascript)

---

#### `??` - Nullish Coalescing

See this link for more info on [Nullish Coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

[Back to top](#2024-10-24-intro-to-javascript)