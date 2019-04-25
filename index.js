function dwarfRollCall (dwarves) {
  //initialze a new variable and set to empty array.
  let newArray = [];
 // iterat through array and push expression interpolation of i+1 and element at current index. 
    for (let i = 0; i < dwarves.length / 2; i++) {
      newArray.push(`${i + 1}. ${dwarves[i]} ` );
 }
 //use .join() method on newArray to join and return a string.
 console.log(newArray.join(""));
 return newArray.join("");
}

function summonCaptainPlanet(planeteerCalls){
  //initialze new variable and set to empty array.
   let newArray = [];
   //iterate through array and push element at current index to newArray and apply toUpperCase() 
   //method. Concatenate '!'.
    for (let i = 0; i < planeteerCalls.length; i++) {
      newArray.push(planeteerCalls[i].toUpperCase() + '!') ;
    }
    // return newArray
    console.log(newArray);
    return newArray;
}

function longPlaneteerCalls(words) {
  //iterate through array
  for(let i = 0; i < words.length; i++){
    //if current element is greater than 4 return true.
    if (words[i].length > 4) {
      console.log(words);
      return true;
    } 
    // otherwise return false.
    return false;
  }
}
function findTheCheese (foods) {
  //iterate through array, if currrent element is cheese return element
  for(let i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camebert' || foods([i]) === 'swiss') {
      console.log(foods);
      return foods[i];
    } 
  }
  // return message if array has no cheese.
    return 'no cheese!';
}







function wordsThatStartWithB(words){
  let newArray = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i][0] === 'b') {
      newArray.push(words[i]);
    }
  }
   return newArray;
}

wordsThatStartWithB(['banana', 'cherry', 'orange']) // ['banana']
wordsThatStartWithB(['brian', 'bobby', 'james']) // ['brian', 'bobby']






