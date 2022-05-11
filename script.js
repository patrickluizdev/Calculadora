const numberButtons = document.querySelectorAll("[data-number]");

const operationButtons = document.querySelectorAll("[data-operation]");

const igualButtons = document.querySelectorAll("[data-igual]");

const cleanButtons = document.querySelectorAll("[data-clean]");

const deleteButtons = document.querySelectorAll("[data-delete]");

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

cleanButtons.addEventListener("click");
