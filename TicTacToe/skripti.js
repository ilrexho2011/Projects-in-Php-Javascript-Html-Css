const KLASA_X = 'x'
const KLASA_RRETH = 'rrethi'
const KOMBINIMET_FITUESE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-qeliza]')
const board = document.getElementById('FushaELojes')
const winningMessageElement = document.getElementById('mesazhiFituesit')
const butoniRestartimit = document.getElementById('burtoniRestart')
const winningMessageTextElement = document.querySelector('[teksti-mesazhi-fituesit]')
let RradhaERrethit

startoLojen()

butoniRestartimit.addEventListener('click', startoLojen)

function startoLojen() {
  RradhaERrethit = false
  cellElements.forEach(cell => {
    cell.classList.remove(KLASA_X)
    cell.classList.remove(KLASA_RRETH)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = RradhaERrethit ? KLASA_RRETH : KLASA_X
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Nuk ka Fitues!'
  } else {
    winningMessageTextElement.innerText = `${RradhaERrethit ? "O - " : "X - "} ka Fituar!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(KLASA_X) || cell.classList.contains(KLASA_RRETH)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  RradhaERrethit = !RradhaERrethit
}

function setBoardHoverClass() {
  board.classList.remove(KLASA_X)
  board.classList.remove(KLASA_RRETH)
  if (RradhaERrethit) {
    board.classList.add(KLASA_RRETH)
  } else {
    board.classList.add(KLASA_X)
  }
}

function checkWin(currentClass) {
  return KOMBINIMET_FITUESE.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}