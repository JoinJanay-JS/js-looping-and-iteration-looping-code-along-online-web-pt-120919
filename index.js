// Code your solutions in this file
writeCards(["Ada", "Brendan", "Ali"], "birthday");

const cards = 

function writeCards(cards)
let countup = 0;
while (countup < 10) {
  console.log(countup++);
}

return cards;

}







const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }
 
  return gifts;
}
 
wrapGifts(gifts);