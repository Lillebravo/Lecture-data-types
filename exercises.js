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

/* --- 7. Vad ska vi göra idag? ---
Skapa ett program som frågar användaren om vädret är soligt, regnigt eller molnigt och ger ett förslag på aktivitet beroende på svaret. */

/* function askWeather() {
  const listOfWeatherConditions = ["Sunny", "Rainy", "Cloudy"];
  let userWeatherReport = prompt("What´s the weather like today?", "Sunny");

  if (userWeatherReport == listOfWeatherConditions[0]) {
    document.getElementById("promptResponse").innerHTML =
      "I love it when it´s " +
      listOfWeatherConditions[0] +
      ". Let´s go to the beach!";
  } else if (userWeatherReport == listOfWeatherConditions[1]) {
    document.getElementById("promptResponse").innerHTML =
      "Oh that´s the worst! We should just stay in and watch a movie if it´s raining.";
  } else if (userWeatherReport == listOfWeatherConditions[2]) {
    document.getElementById("promptResponse").innerHTML =
      "I guess we could go for a picnic if it´s " + listOfWeatherConditions[2] + ".";
  } else if (userWeatherReport == null || userWeatherReport == "") {
    document.getElementById("promptResponse").innerHTML =
      "You didn´t answer the question :(";
  } else {
    document.getElementById("promptResponse").innerHTML =
      "I don´t really care unless it´s " + listOfWeatherConditions;
  }
} */

/* --- 8. Vilket språk talar du? ---
Skapa ett program som frågar användaren vilket språk de talar och svarar på olika sätt beroende på om de talar
 svenska, engelska eller något annat språk. */
/* function askLanguage() {
    const languages = ["swedish", "english", "japanese", "thai"];
    let userLanguage = prompt("What is your mother language?", "swedish");

    if (userLanguage == languages[0]) {
        document.getElementById("promptResponse").innerHTML = "Hallå ja pågar o töser!";
    } else if (userLanguage == languages[1]) {
        document.getElementById("promptResponse").innerHTML = "Ah, a fellow gentleman!";
    } else if (userLanguage == languages[2]) {
        document.getElementById("promptResponse").innerHTML = "こんにちは! 私の日本語はそれほど上手ではありません";
    } else if (userLanguage == languages[3]) {
        document.getElementById("promptResponse").innerHTML = "สวัสดี! ภาษาไทยของฉันไม่ค่อยดีนัก";
    } else if (userLanguage == null || userLanguage == "") {
        document.getElementById("promptResponse").innerHTML = "Please answer the question.";
    } else {
        document.getElementById("promptResponse").innerHTML = "Hmm, I don´t know this language.";
    }
} */

/* --- 9. Multipel av 5? ---
Skapa ett program som frågar användaren efter ett tal och kollar om talet är en multipel av 5. */

/* function checkNumber5Multiplier() {
    let userInput = prompt("Input a number and I will check if it's a multiple of 5: ", "10");
    let userNumber = parseFloat(userInput);

    if (userInput === null || userInput.trim() === "") {
        document.getElementById("promptResponse").innerHTML = "Please answer the question.";
    } else if (isNaN(userNumber)) {
        document.getElementById("promptResponse").innerHTML = "You need to enter a valid number.";
    } else if (userNumber % 5 === 0) {
        document.getElementById("promptResponse").innerHTML = "The number " + userNumber + " is a multiple of 5.";
    } else {
        document.getElementById("promptResponse").innerHTML = userNumber + " is not a multiple of 5.";
    }
} */

/* --- 10. Ska vi gå ut? ---
Använd confirm för att fråga användaren om de vill gå ut och skriv ut ett meddelande beroende på svaret. */

/* function letsGoOut() {
    let userInput = confirm("You want to go out?");

    if (userInput) {
        document.getElementById("promptResponse").innerHTML = "Yeah, let´s do it!";
    } else {
        document.getElementById("promptResponse").innerHTML = "I guess we´ll netflix and chill then.";
    }
} */

/* --- 11. Siffra eller bokstav? ---
Låt användaren skriva in ett tecken. Kolla om det är en siffra eller en bokstav och skriv ut resultatet. */

/* function checkUserInput() {
    let userInput = prompt("Write a letter or a number and I will check which it is:", "5");

    if (userInput === null || userInput === "") {
        document.getElementById("promptResponse").innerHTML = "Please answer the question.";
    } else if (/^[a-zA-Z]+$/.test(userInput)) {
        document.getElementById("promptResponse").innerHTML = userInput + " is a letter.";
    } else if (Number.isFinite(Number(userInput))) {
        document.getElementById("promptResponse").innerHTML = userInput + " is a number.";
    } else if (userInput.length > 1) {
        document.getElementById("promptResponse").innerHTML = "Please write only one character.";
    } else {
        document.getElementById("promptResponse").innerHTML = userInput + " is neither a number or a symbol.";
    }
} */

/* --- 12. Största av tre ord ---
Fråga användaren om tre olika ord och skriv ut vilket som är längst. */

/* function biggestWord() {
  let word1 = prompt("Input one word:", "Hej");
  let word2 = prompt("Input a second word:", "Alex");
  let word3 = prompt("Input third word:", "Hästar");

  if (
    word1 === null ||
    word1 === "" ||
    word2 === null ||
    word2 === "" ||
    word3 === null ||
    word3 === ""
  ) {
    document.getElementById("promptResponse").innerHTML =
      "Please answer all the questions.";
  } else if (
    !/^[a-öA-Ö]+$/.test(word1) ||
    !/^[a-öA-Ö]+$/.test(word2) ||
    !/^[a-öA-Ö]+$/.test(word3)
  ) {
    document.getElementById("promptResponse").innerHTML =
      "Please enter only words with letters and no numbers or symbols.";
  } else if (word1.length > word2.length && word1.length > word3.length) {
    document.getElementById("promptResponse").innerHTML =
      word1 + " is the longest word.";
  } else if (word2.length > word1.length && word2.length > word3.length) {
    document.getElementById("promptResponse").innerHTML =
      word2 + " is the longest word.";
  } else if (word3.length > word1.length && word3.length > word2.length) {
    document.getElementById("promptResponse").innerHTML =
      word3 + " is the longest word.";
  } else {
    document.getElementById("promptResponse").innerHTML =
      "There is a tie for the longest word.";
  }
} */

/* --- 13. Lösenordskontroll ---
Skapa ett program som frågar efter ett lösenord och skriver ut om lösenordet är tillräckligt långt 
(minst 8 tecken) och innehåller minst en siffra. */

/* function checkPasswordLength() {
    let password = prompt("Select your password(it needs to be min. 8 characters and contain at least one number): ", "HejsanHoppsan1");

    if (password.length >= 8 && /\d/.test(password)) {
        document.getElementById("promptResponse").innerHTML = "Your password has been successfully created!";
    } else {
        document.getElementById("promptResponse").innerHTML = "Your password doesn´t meet the requirments.";
    }
} */

/* --- 14. Ålderskategori ---
Skapa ett program där användaren matar in sin ålder och baserat på det, skriv ut vilken ålderskategori de tillhör:
 barn (0-12), tonåring (13-19), vuxen (20-64), eller pensionär (65+). */

/* function ageBracket() {
    let age = prompt("Enter your age (1-100): ", "27");

    if (/^\d+$/.test(age) && age > 0) {
        if (age <= 12) {
            document.getElementById("promptResponse").innerHTML = "You are a child.";
        } else if (age <= 19) {
            document.getElementById("promptResponse").innerHTML = "You are a teenager.";
        } else if (age <= 64) {
            document.getElementById("promptResponse").innerHTML = "You are an adult.";
        } else if (age > 64 && age <= 100) {
            document.getElementById("promptResponse").innerHTML = "You are retired.";
        } else if (age > 100) {
            document.getElementById("promptResponse").innerHTML = "You are dead...";
        }
    } else if (age == null || age == "") {
        document.getElementById("promptResponse").innerHTML = "Please answer the question.";
    } else {
        document.getElementById("promptResponse").innerHTML = "Please input a number between 1-100!";
    }
} */

/* --- 15. Beslutstagande ---
Skapa ett program där användaren får två alternativ (med confirm för båda alternativen), och beroende på deras val,
 skriv ut ett specifikt resultat. */ // PÅ RIKTIGT VAR DETTA EN SVÅR UPPGIFT? FRÅGA LÄRAREN PÅ TISDAG!

function choice() {
    let userChoice = confirm("Do you like ice cream?");

    if (userChoice) {
        document.getElementById("promptResponse").innerHTML = "Ah, you are one of the good ones!";
    } else {
        document.getElementById("promptResponse").innerHTML = "You obviously can´t be trusted...";
    }
}
