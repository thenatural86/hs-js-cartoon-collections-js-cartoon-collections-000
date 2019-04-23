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
      newArray.push(planeteerCalls[i].toString().toUpperCase() + '!') ;
    }
    console.log(newArray);
    return newArray;
}

function longPlaneteerCalls(words) {
  if (words.length > 4) {
    console.log(words);
    return true;
  } else {
    return false;
  }
}

function findTheCheese (foods) {
if (foods.includes('cheddar' || 'gouda' || 'camebert' )) {
  return 'cheddar' || 'gouda' || 'camebert' ;
} else {
  return 'no cheese!';
 }
}



