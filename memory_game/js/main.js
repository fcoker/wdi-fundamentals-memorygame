var cards = ["queen", "queen", "king", "king"]
var cardsInPlay =[];
var cardOne = cards[0];
var cardTwo = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("user flipped" + " " + cardOne);
console.log("user flipped" + " " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("you found a match");
} else {
	alert("sorry, try again!");
}