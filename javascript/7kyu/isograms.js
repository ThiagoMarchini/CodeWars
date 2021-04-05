// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
  const string = str.toLowerCase();
  const array = string.split('');
  let response = true;
  while (array.length !== 0) {
    let search = array.pop();
    array.forEach(element => {
      if (element === search) {
        response = false;
      }
    });
  }
  return response;
}
console.log(isIsogram('asb'));