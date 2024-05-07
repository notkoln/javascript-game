/* you can play this in your browser */
let score = 0;

for (let i=1;i<=10;i++){
  var word=prompt("Word: ");
  score = score + word.length;
}

alert("Final score: " + score.toString());
