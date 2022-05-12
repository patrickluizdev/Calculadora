const numberButtons = document.querySelectorAll("[data-number]");

const operationButton = document.querySelectorAll("[data-operation]");

const igualButton = document.querySelectorAll("[data-igual]");

const allCleanButton = document.querySelectorAll("[data-clean]");

const deleteButton = document.querySelectorAll("[data-delete]");

const currentOperandTextElement = document.querySelectorAll(
  "[data-currend-operand]"
);

const previousOperandTextElement = document.querySelectorAll(
  "[data-previous-operand]"
);

class Calculator {
  constructor(currentOperandTextElement, previousOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

allCleanButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
