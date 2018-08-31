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
var checkForMatch = function(){
   if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("you found a match");
    } else {
	alert("sorry, try again!");
    }
}

var flipCard = function(cardId){
cardsInPlay.push(cards[cardId].rank);
console.log("user flipped" + " " + cards[cardId].rank);
checkForMatch();
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}

flipCard(0);
flipCard(2);
