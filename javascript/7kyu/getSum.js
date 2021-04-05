function getSum( a,b )
{
  let sum = 0
  if (a < b) {
    for (a; a <= b; a += 1) {
      sum += a;
    }
  } else {
    for (b; b <= a; b += 1) {
      sum += b;
    }
  }
  return sum;
}


console.log(getSum(0,-1)); // -1
console.log(getSum(0,1)); // 1