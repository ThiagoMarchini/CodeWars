function descendingOrder(s){
  var myArr = String(s).split("").map((s)=>{
    return Number(s)
  })
  myArr = myArr.sort((a, b) => b - a);
  let newNumber = myArr.join('');
  newNumber = Number(newNumber);
  return newNumber;
}

console.log(descendingOrder(0));

// descendingOrder(0)
// descendingOrder(1)
// descendingOrder(111)
// descendingOrder(15)
// descendingOrder(1021)
// descendingOrder(123456789)