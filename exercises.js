// 1. Hälsa på användaren
function tellMeYourName() {
  let person = prompt("What is your name?", "Anders");

  if (person != null) {
    document.getElementById("promtResponse").innerHTML = "Hi " + person + "!";
  } else {
    document.getElementById("promtResponse").innerHTML = "You canceled!";
  }
}

