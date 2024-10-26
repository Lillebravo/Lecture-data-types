// 1. Hälsa på användaren
/* function tellMeYourName() {
  let person = prompt("What is your name?", "Anders");

  if (person != null) {
    document.getElementById("promtResponse").innerHTML = "Hi " + person + "!";
  } else {
    document.getElementById("promtResponse").innerHTML = "You canceled!";
  }
} */

// 2. Jämför 2 ord,  Be användaren mata in två ord och skriv ut vilket som kommer först i alfabetet.

/* function compareWords() {
    let word1 = prompt("Input first word", "Cat");
    let word2 = prompt("Input second word", "Dog");

    if (word2 > word1) {
        document.getElementById("promtResponse").innerHTML = word1 + " comes before " + word2 + " in the alphabet.";
    } else if (word1 > word2) {
        document.getElementById("promtResponse").innerHTML = word2 + " comes before " + word1 + " in the alphabet.";
    }
    else {
        document.getElementById("promtResponse").innerHTML = "Oh no something went wrong!";
    }
} */


// 3. Är användaren vuxen? Fråga användaren om deras ålder och skriv i konsolen om de är över eller under 18.
/* function adultOrNot() {
  let age = prompt("How old are you?", "27");

  if (age > 18) {
    document.getElementById("promptResponse").innerHTML =
      "You are over 18 years old.";
  } else if (age == null || age == "") {
    document.getElementById("promptResponse").innerHTML =
      "You didn´t enter your age.";
  } else if (age < 18) {
    document.getElementById("promptResponse").innerHTML =
      "You are under 18 years old.";
  } else if (age == 18) {
    document.getElementById("promptResponse").innerHTML =
      "You are 18 years old.";
  } else {
    document.getElementById("promptResponse").innerHTML =
      "You didn´t enter your age.";
  }
} */
