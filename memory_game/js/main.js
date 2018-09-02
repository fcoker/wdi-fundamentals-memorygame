var cards = [
 {
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
 },
 {
 	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
 },
 {
    rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
 },
 {
 	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
 }
];

var cardsInPlay =[];
<<<<<<< HEAD
var checkForMatch = function(){
=======
var cardId;
var checkForMatch = function(currentCard){
	currentCard.setAttribute('src', cards[cardId].cardImage);
>>>>>>> f7755054e5ca9c075bb5552933ec27e2a990bc71
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("you found a match");
    } else {
 	alert("sorry, try again!");
     }
}

var flipCard = function(){
<<<<<<< HEAD
	 cardId = this.getAttribute('data-id');
=======
  cardId = this.getAttribute('data-id');
>>>>>>> f7755054e5ca9c075bb5552933ec27e2a990bc71
  console.log("user flipped" + " " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
<<<<<<< HEAD
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
=======

  this.setAttribute('src', cards[cardId].cardImage);


  checkForMatch(this);
>>>>>>> f7755054e5ca9c075bb5552933ec27e2a990bc71
}

var createBoard = function(){
	for (i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
<<<<<<< HEAD
        cardElement.addEventListener('click', flipCard);
=======

		cardElement.addEventListener('click', flipCard);
>>>>>>> f7755054e5ca9c075bb5552933ec27e2a990bc71
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();
<<<<<<< HEAD










=======
>>>>>>> f7755054e5ca9c075bb5552933ec27e2a990bc71
