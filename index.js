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

/* const firstName = "Jerry";

if (true) {
    const lastName = "Lundahl";
    console.log(firstName);
}

console.log(firstName); // Exists
console.log(lastName); // Doesn´t exist in this scope.  */

// ############ if statements ############ //

// const age = 20;

// if (age > 18) {
//   console.log("You are an adult.");
// }

// ############ if-else statements ############ //

// const age = 16;

// if (age > 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are still classed as a minor.");
// }

// ############ if-else-if statements ############ //

// const age = 10;

// if (age >= 18) {
//   console.log("Great, you can take your driver's license.");
// } else if (age >= 16) {
//   console.log(
//     "Sorry, your are not old enough for a driver's license, but you can start practising."
//   );
// } else {
//   console.log("Sorry, you will have to take the bike.");
// }

// ############ Truthy and falsy statements ############ //

const name = "";

if (name) {
  console.log(`Oh, that's a cool name you have got ${name}`);
} else {
  console.log("You don't have name");
}