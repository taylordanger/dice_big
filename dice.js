// dice.js 
// just a project for class i am saving here for metrics sake.

// pay no mind 

var roll = 0;
var die1 = 0;
var die2 = -1;
var pair= 0;

while(pair <= 4) {
  die1 = randomNumber(1,6);
  die2 = randomNumber(1,6);
  die1++;
  die2++;
  if (die1 == die2){
    pair++;
  }
  roll++;
  console.log("Roll #:  " +roll+ "  Dice Values:    " +die1+ "  " +die2+ " Pairs:  " +pair);
  if (pair == 5){
    console.log("It took " +roll+ " rolls to get to 5 pairs.");
}
}

