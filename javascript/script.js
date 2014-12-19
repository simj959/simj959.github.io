console.log("Hello player, to get started please draw a card by hitMe() function. The random numbers will draw and you should make it to number 100 by adding those card numbers in order to win. However, if the number becomes greater than 100, the dealer wins. Therefore, you should manipulate cards to make score 100 by function add(), which adds only number 1.");
var userNum = 0;
var jackpot = 100;

function add() {
   
   userNum = userNum + 1;
   console.log("Current Score: " + userNum);
      
}

function hitMe() {
   var drawCard = Math.floor((Math.random()*22)+2);
   userNum = userNum + drawCard;
   console.log("You drew a " + drawCard);
   console.log("Current Score: " + userNum);
   
if(userNum >= 94 && userNum <= 97)
 add();
   
   if (userNum == jackpot) {
      console.log("JACKPOT");

      
} else {
      if (userNum > jackpot) {
      // you lose
      
      console.log("Dealer Wins!");
      
      }
      }
   
   

}