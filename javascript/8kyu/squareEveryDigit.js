function squareDigits(num){
  let numbers = String(num);
  let array = [];
  for(let index = 0; index < numbers.length; index += 1) {
    array.push(numbers[index]*numbers[index]);
  }
  return Number(array.join(''));
}

console.log(squareDigits(9119));