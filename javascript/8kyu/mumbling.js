/* accum("abcd") -> "A-Bb-Ccc-Dddd"
   accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
   accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

function accum(s) {
	let array = s;
  let answer = [];
  for (index in array) {
    if (index == 0) {
      answer.push(toUpperCase(array[index]));
    }
  }
  return answer;
}

accum("abcd")