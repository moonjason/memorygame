var cards = [
{
	rank: "queen", 
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!"); 
	}	else {
		alert("Sorry, try again.");
	}
};

function flipCard() {
	var cardId = this.getAttribute('data-id')
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementsByTagName('#game-board')[0].appendChild(cardElement);
	}
}

console.log(cards[0].cardImage)
console.log(cards[0].rank)

console.log(cards[2].cardImage)
console.log(cards[2].rank)

createBoard();