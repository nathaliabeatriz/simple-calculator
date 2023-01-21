let expression = "",
  completeNumber = "",
  operator,
  numberString = "",
  firstNumber = 0,
  secondNumber,
  count = 0, 
  count2 = 0

function show(caracter) {
  expression += caracter
  if (
    caracter === "+" ||
    caracter === "-" ||
    caracter === "x" ||
    caracter === "÷"
  ) {
    if(count2 !== 0){
      expression = firstNumber + caracter
      count2 = 0
    }
    document.querySelector("#secondary").innerHTML = expression
    document.querySelector("#main").innerHTML = ""
    numberString = ''
    count2++
  } else if (caracter === "=") {
    document.querySelector("#secondary").innerHTML = expression
    document.querySelector("#main").innerHTML = firstNumber
    expression = firstNumber
  } else {
    numberString += caracter
    document.querySelector("#main").innerHTML = numberString
  }
}

function takeNumber(number) {
  completeNumber += number 
}

function operation(sign) {
  if (count === 0) {
    operator = sign
    count++
    firstNumber = parseInt(completeNumber)
    completeNumber = ''
  } else {
    secondNumber = parseInt(completeNumber)
    switch (operator) {
      case "+":
        firstNumber += secondNumber
        break
      case "-":
        firstNumber -= secondNumber
        break
      case "x":
        firstNumber *= secondNumber
        break
      case "÷":
        firstNumber /= secondNumber
        break
    }
    if (sign === "=") {
      completeNumber = firstNumber
    } else {
      completeNumber = ''
    }
    count = 0
  }
}

//tarefas: mostrar o resultado certo quando houver muitas operações seguidas