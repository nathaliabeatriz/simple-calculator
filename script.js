let fullExpression = "",
  number = "",
  expressionToShow = ""

function show(character) {
  expressionToShow += character
  if (
    character === "+" ||
    character === "-" ||
    character === "x" ||
    character === "÷"
  ) {
    document.querySelector("#secondary").innerHTML = expressionToShow
    document.querySelector("#main").innerHTML = ""
    number = ""
    if (character === "x") {
      fullExpression += "*"
    } else if (character === "÷") {
      fullExpression += "/"
    } else {
      fullExpression += character
    }
  } else {
    number += character
    document.querySelector("#main").innerHTML = number
    fullExpression += character
  }
}

function result() {
  document.querySelector("#main").innerHTML = eval(fullExpression)
  expressionToShow += "="
  document.querySelector("#secondary").innerHTML = expressionToShow
  expressionToShow = eval(fullExpression).toString()
  fullExpression = eval(fullExpression).toString()
}

function eraseTheLastCharacter() {
  fullExpression = fullExpression.slice(0, -1)
  expressionToShow = expressionToShow.slice(0, -1)
  number = number.slice(0, -1)
  document.querySelector("#main").innerHTML = expressionToShow
}

//alerta para divisões com 0
