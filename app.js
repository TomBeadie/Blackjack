

let firstCard = 7
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

let messageEl = document.getElementById('message-el')

function startGame() {
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

