// Simple calculator
function calculate() {
  alert("Welcome!");
  let calculation = true;

  while (calculation) {
    let firstNr = prompt("Enter the first number: ", "10");
    while (!isValidNumber(firstNr)) {
      alert("Please input a valid number!");
      firstNr = prompt("Enter the first number: ", "10");
    }
    firstNr = parseFloat(firstNr);

    let scndNr = prompt("Enter the second number: ", "5");
    while (!isValidNumber(scndNr)) {
      alert("Please input a valid number!");
      scndNr = prompt("Enter the second number: ", "5");
    }
    scndNr = parseFloat(scndNr);

    let chosenOperator = prompt("Choose operator(+, -, *, /):", "+");
    while (!["+", "-", "*", "/"].includes(chosenOperator)) {
      alert("You can only choose the operators +, -, *, /");
      chosenOperator = prompt("Choose operator(+, -, *, /):", "+");
    }

    let result = calculateResult(firstNr, scndNr, chosenOperator);
    if (result === "Cannot be calculated") {
      alert(result);
    } else {
      alert(`The result of ${firstNr} ${chosenOperator} ${scndNr} = ${result}`);
    }

    calculation = confirm("Do you want to continue using the calculator?");
  }

  alert("Bye!");
}

function isValidNumber(value) {
  return value !== null && !isNaN(value) && value.trim() !== "";
}

function calculateResult(firstNr, scndNr, operator) {
  switch (operator) {
    case "+":
      return firstNr + scndNr;
    case "-":
      return firstNr - scndNr;
    case "*":
      return firstNr * scndNr;
    case "/":
      if (scndNr === 0) {
        return "Cannot be calculated";
      }
      return firstNr / scndNr;
    default:
      return "Cannot be calculated";
  }
}

// Traditional calculator
let storedNumber = null;
let currentOperator = null;

function handleOperator(operator) {
  let display = document.getElementById("display");
  storedNumber = parseFloat(display.value);
  currentOperator = operator;
  display.value = "0";
}

function traditionalCalculate() {
  if (storedNumber === null || currentOperator === null) {
    return;
  }

  let display = document.getElementById("display");
  let currentNumber = parseFloat(display.value);
  let result;

  switch (currentOperator) {
    case "+":
      result = storedNumber + currentNumber;
      break;
    case "-":
      result = storedNumber - currentNumber;
      break;
    case "*":
      result = storedNumber * currentNumber;
      break;
    case "/":
      if (currentNumber === 0) {
        display.value = "Cannot divide by zero!";
        return;
      }
      result = storedNumber / currentNumber;
      break;
  }

  display.value = result;
  storedNumber = null;
  currentOperator = null;
}

function clearCalculator() {
  let display = document.getElementById("display");
  display.value = "0";
  storedNumber = null;
  currentOperator = null;
}
