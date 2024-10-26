// --- 1. Hälsa på användaren ---
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

// --- 3. Är användaren vuxen? ---
// Fråga användaren om deras ålder och skriv i konsolen om de är över eller under 18.
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

// --- 4. Gissa ett djur ---
// Låt användaren gissa vilket djur du tänker på (t.ex. "katt").
// Om de gissar rätt, visa ett meddelande om att de har rätt.
/* function guessAnimal() {
  const listOfAnimals = ["Cat", "Dog", "Lizard", "Cow", "Fox"];
  const randomAnimal =
    listOfAnimals[Math.floor(Math.random() * listOfAnimals.length)];
  let userGuess = prompt("Guess which animal I´m thinking of: ", "Cat");

  if (userGuess == randomAnimal) {
    document.getElementById("promptResponse").innerHTML =
      "Your guess was correct! I was thinking of " + randomAnimal;
  } else if (userGuess == null || userGuess == "") {
    document.getElementById("promptResponse").innerHTML =
      "You didn´t answer the question :(";
  } else {
    document.getElementById("promptResponse").innerHTML =
      "You were wrong fool! Of course I was thinking of " + randomAnimal;
  }
} */

/* --- 5. Känn igen en färg ---
  Skapa ett program som frågar användaren efter deras favoritfärg och om den är "röd", "blå" eller "grön", 
  ge en speciell kommentar för varje färg. */
/* function askFavouriteColor() {
  const listOfColors = ["Red", "Green", "Blue"];
  let favouriteColor = prompt("What´s your favourite color?", "Red");

  if (favouriteColor == listOfColors[0]) {
    document.getElementById("promptResponse").innerHTML =
      "Wow! " + listOfColors[0] + " is my favourite color as well!";
  } else if (favouriteColor == listOfColors[1]) {
    document.getElementById("promptResponse").innerHTML =
      "I guess " + listOfColors[1] + " is an okay color.";
  } else if (favouriteColor == listOfColors[2]) {
    document.getElementById("promptResponse").innerHTML =
      "I´m shocked, I thought no one likes " + listOfColors[2] + ".";
  } else if (favouriteColor == null || favouriteColor == "") {
    document.getElementById("promptResponse").innerHTML =
    "You didn´t enter a color :(";
  } else {
    document.getElementById("promptResponse").innerHTML =
    "I guess that´s an okay color, but not as good as " + listOfColors + ".";
  }
}*/

/* --- 6. Godkänd eller inte ---
Låt användaren mata in sitt provresultat (0-100) och skriv ut om de är godkända (minst 50 poäng) eller inte. */

/* function passTheTest() {
  const passingGrade = 50;
  let userTestScore = prompt("What did you score on your last test(0-100)?", "50");

  if (userTestScore > passingGrade && userTestScore <= 100) {
    document.getElementById("promptResponse").innerHTML = "You passed the test!";
  } else if (userTestScore == passingGrade) {
    document.getElementById("promptResponse").innerHTML = "Wow, you just barely passed the test!";
  } else if (userTestScore == null || userTestScore == "" || userTestScore == NaN) {
    document.getElementById("promptResponse").innerHTML = "Hey! You need to enter a number!";
  } else if (userTestScore < passingGrade && userTestScore >= 0) {
    document.getElementById("promptResponse").innerHTML = "Sorry you failed the test...";
  } else {
    document.getElementById("promptResponse").innerHTML = "That´s not an allowed input.";
  }
} */



