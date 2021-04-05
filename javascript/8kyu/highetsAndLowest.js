function highAndLow(numbers){
  let array = [];
  array = numbers.split(" ");
  let biggest = Number(array[0]);
  let smallest = Number(array[0]);
  for(let index = 0; index < array.length; index += 1){
    if(Number(array[index]) > biggest){
      biggest = Number(array[index]);
    }
    else if (Number(array[index]) < smallest){
      smallest = Number(array[index]);
    }
  }
  let result = [];
  result.push(biggest);
  result.push(smallest);
  result = result.join(' ');

  return result.toString();
}


console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));