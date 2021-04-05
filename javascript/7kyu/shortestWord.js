function findShort(s){
  const array = s.split(' ');
  let wordLength = array.reduce(((acc, item) => item.length > acc ? acc : item.length), array[0]);
  return wordLength;
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
