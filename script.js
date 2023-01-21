let expression = "",
  completeNumber = "",
  operator,
  numberString = "",
  firstNumber = 0, secondNumber,
  count = 0

function show(caracter) {
  expression += caracter
  if (
    caracter === "+" ||
    caracter === "-" ||
    caracter === "x" ||
    caracter === "÷" ||
    caracter === "="
  ) {
    document.querySelector("#secondary").innerHTML = expression
    document.querySelector("#main").innerHTML = ""
    numberString = ""
  } else {
    numberString += caracter
  }
  document.querySelector("#main").innerHTML = numberString
}

function takeNumber(number) {
  completeNumber += number
  console.log(completeNumber)
}
function operation(sign) {
  if (count === 0) {
    operator = sign
    count++
    firstNumber = parseInt(completeNumber)
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
    document.querySelector("#main").innerHTML = firstNumber
    expression = firstNumber
  }

  completeNumber = ""
  // let number = parseInt(completeNumber)
  // //operator = operador
  // if (firstNumber != 0) {
  //   switch (sign) {
  //     case "+":
  //       firstNumber += number
  //       break
  //     case "-":
  //       firstNumber -= number
  //       break
  //     case "x":
  //       firstNumber *= number
  //       break
  //     case "÷":
  //       firstNumber /= number
  //       break
  //   }
  // } else {
  //   firstNumber += number
  // }
  // completeNumber = ''
  // console.log(firstNumber)
}

// function total() {
//   let number = parseInt(numberString)
//   switch (operator) {
//     case "+":
//       firstNumber += number
//       break
//     case "-":
//       firstNumber -= number
//       break
//     case "x":
//       firstNumber *= number
//       break
//     case "÷":
//       firstNumber /= number
//       break
//   }
//   document.querySelector(".console").innerHTML = `= ${firstNumber}`
// }
