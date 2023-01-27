let fullExpression = "",
  number = "",
  expressionToShow = ""

function show(character) {
  expressionToShow += character
  if (character === "+" || character === "-" || character === "x" || character === "÷") {
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
  let result = eval(fullExpression)
  if(!Number.isInteger(result)){
    result = result.toFixed(2)
  }
  document.querySelector("#main").innerHTML = result
  expressionToShow += "="
  document.querySelector("#secondary").innerHTML = expressionToShow
  expressionToShow = result
  fullExpression = result
}

function eraseTheLastCharacter() {
  if(typeof expressionToShow === 'number'){
    clean()
  } else{
    fullExpression = fullExpression.slice(0, -1)
    expressionToShow = expressionToShow.slice(0, -1)
    number = number.slice(0, -1)
    document.querySelector("#main").innerHTML = expressionToShow
  }
}

function clean(){
  expressionToShow = ''
  fullExpression = ''
  number = ''
  document.querySelector("#main").innerHTML = ''
  document.querySelector("#secondary").innerHTML = ''
}

function changeTheTheme(){
  let randomNumber = Math.floor(Math.random() * 4)
  let background = document.querySelector('#background')
  console.log(randomNumber)
  switch (randomNumber) {
    case 0:
      background.setAttribute('src', './assets/backgrounds/background1.jpg')
      break
    case 1:
      background.setAttribute('src', './assets/backgrounds/background2.jpg')
      break
    case 2:
      background.setAttribute('src', './assets/backgrounds/background3.jpg')
      break
    case 3:
      background.setAttribute('src', './assets/backgrounds/background4.jpg')
      break
  }
}
