let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  // render firstCard and secondCard
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Draw a new card?";
  } else if (sum === 21) {
    message = "Blackjack!";
  } else {
    message = "Lol, loser.";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 6;
  sum + card;
  renderGame();
}
