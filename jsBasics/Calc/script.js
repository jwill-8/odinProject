// Track the calculator inputs in a "state" obj
let calculatorState = {
  currentValue: "",
  number1: null,
  number2: null,
  operator: null,
};

resetDisplay();
enableNumericButtons();
enableOperatorButtons();
enableSignButton();
enablePercentButton();
computeResult();

// reset calcState
function resetCalculatorState() {
  Object.keys(calculatorState).forEach((key) => {
    calculatorState[key] = key === "currentValue" ? "" : null;
  });
}
// Adds listeners to all numeric buttons,
// updates display such that every time a numeric button
// is clicked it appneds, 2 clicks to 7 === 77
// rather than writing it's own fn I am also adding the "." button here
function enableNumericButtons() {
  const numberButtons = document.querySelectorAll(".number");
  const decimal = document.querySelector(".decimal");
  // spread into array
  const allButtons = [...numberButtons, decimal];
  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculatorState.currentValue += button.textContent;
      appendToDisplay();
    });
  });
}

// Adds listners to all operators.
// when an operator is clicked, it takes the displayed value,
// coerces to numeric and stores operator
// also resets current value and display
function enableOperatorButtons() {
  const operatorButtons = document.querySelectorAll(".operator");

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculatorState.operator = button.textContent;
      calculatorState.number1 = Number(calculatorState.currentValue);
      calculatorState.currentValue = "";
    });
  });
}

// When executed, displays whatever the state of currentValue is in calcState obj
function appendToDisplay() {
  const display = document.querySelector(".display");
  display.textContent = calculatorState.currentValue;
}
// resets the display and also resets calcState obj values
function resetDisplay() {
  const resetButton = document.querySelector(".reset");
  const display = document.querySelector(".display");

  resetButton.addEventListener("click", () => {
    resetCalculatorState();

    display.textContent = calculatorState.currentValue;
  });
}
// stores logic of the actual operation to execute based on selected operator
function operate(x, y, op) {
  if (op === "+") {
    return x + y;
  } else if (op === "-") {
    return x - y;
  } else if (op === "x") {
    return x * y;
  } else if (op === "/") {
    if (y === 0) {
      return "Cannot divide by 0";
    } else {
      return x / y;
    }
  }
}

// compute the result
function computeResult() {
  const equalsButton = document.querySelector(".equals");
  const display = document.querySelector(".display");
  equalsButton.addEventListener("click", () => {
    // if no operator has been selected, just bail
    if (calculatorState.operator === null) return;
    // First take what is currentply displayed and assign to number2
    calculatorState.number2 = Number(calculatorState.currentValue);
    // compute and assign
    calculatorState.currentValue = operate(
      (x = calculatorState.number1),
      (y = calculatorState.number2),
      (op = calculatorState.operator)
    );
    // display
    display.textContent = calculatorState.currentValue;
    //reset everything
    resetCalculatorState();
  });
}

function enableSignButton () {
    const signButton = document.querySelector(".sign") 
    const display = document.querySelector(".display");

    signButton.addEventListener("click", () =>  {
        calculatorState.currentValue = calculatorState.currentValue * -1
        display.textContent = calculatorState.currentValue;
    })
} 

function enablePercentButton () {
    const pctButton = document.querySelector(".percent") 
    const display = document.querySelector(".display");

    pctButton.addEventListener("click", () =>  {
        calculatorState.currentValue = calculatorState.currentValue/100
        display.textContent = calculatorState.currentValue;
    })
} 
