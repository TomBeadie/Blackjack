

let firstCard = 7
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')


function startGame() {
    renderGame()
}


function renderGame() {
    if (sum <= 20) {
        message = "Draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
    } else {
        message = "Lol, loser."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 6
    sum + card
    renderGame()
}