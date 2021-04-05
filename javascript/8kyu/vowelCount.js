function getCount(str) {
  const string = str;
  var vowelsCount = 0;
  for (let index = 0; index < string.length; index += 1){
    if(string[index] == 'a' || string[index] == 'e' || string[index] == 'i' || string[index] == 'o' || string[index] == 'u'){
      vowelsCount += 1;
    }
  }
  
  return vowelsCount;
}

console.log(getCount("abracadabra"));