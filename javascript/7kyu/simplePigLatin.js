// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(word) {
  let middle = word.length/2;
  if (word.length % 2 === 0) {
    return `${word[middle-1]}${word[middle]}`;
  } else {
    return `${word[middle - 0.5]}`;
  }
}

console.log(getMiddle("test"));