// #### Var ####
/* var firstName = "Jerry";
console.log(firstName);

var firstName = "Johan";
console.log(firstName);

var firstName = "Jerry";
console.log(firstName); // Jerry

firstName = "Johan"; // Re-assignment, it´s valid.
console.log(firstName); // Johan */

// #### const ####
/* const age = 27;
console.log(age);

age = 30;
console.log(age);  */

const firstName = "Jerry";

if (true) {
    const lastName = "Lundahl";
    console.log(firstName);
}

console.log(firstName); // Exists
console.log(lastName); // Doesn´t exist in this scope. 