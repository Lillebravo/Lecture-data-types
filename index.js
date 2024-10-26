// "My name is
// Niklas."; // Don't work

`My name is 
Jerry and I am
a developer.`; // Works just fine!

// ############ var ############ //

// console.log(firstName);

// var firstName = "Niklas";
// console.log(firstName);

// var firstName = "Henrik";
// console.log(firstName);

// firstName = "Erik"; // Re-assignment, it's valid.
// console.log(firstName); // Erik

// var lastName;

// ############ const ############ //

// const age = 39;
// console.log(age);

// // age = 45;
// // console.log(age);

// const number = 54;
// // const number = 45; // Won't work, VSC will complain.
// console.log(number);
// const name = "Niklas";

// const firstName = "Niklas";
// const lastName = "Johnsson";

// if (true) {
//   const lastName = "Svensson"; // A totally different variable, it's another scope.
//   console.log(firstName); // Niklas
//   console.log(lastName);
// }

// console.log(firstName); // Exists.
// console.log(lastName); //Doesn't exist in this scope.

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