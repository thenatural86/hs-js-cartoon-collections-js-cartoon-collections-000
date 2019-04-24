function dwarfRollCall (dwarves) {
  let newArray = [];
    for (let i = 0; i < dwarves.length; i++) {
      newArray.push(`${i + 1}. ${dwarves[i]} ` );
 }
 console.log(newArray.join(""));
 return newArray.join("");
}

function summonCaptainPlanet(planeteerCalls){
   let newArray = [];
    for (let i = 0; i < planeteerCalls.length; i++) {
      newArray.push(planeteerCalls[i].toUpperCase() + '!') ;
    }
    console.log(newArray);
    return newArray;
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if (words[i].length > 4) {
      console.log(words);
      return true;
    } 
    return false;
  }
}
function findTheCheese (foods) {
  for(let i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camebert' ) {
      return foods[i];
    } 
  }
    return 'no cheese!';
}


