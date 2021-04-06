// So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.
// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.
// Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs there are in the room.
// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.
// example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:
// result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.
// If you need no chairs, return 'Game On'. If there aren't enough spare chairs available, return 'Not enough!'

const assert = require('assert');

function meeting(x, need){
  if (need === 0) {return 'Game On'};
  const availableChairs = x.map((curr) => {
    const available = curr[1] - curr[0].length;
    if (available > 0) {
      return available;
    } else {
      return 0;
    }
  });
  let needed = need;
  let available = 0;
  let response = [];
  for (let element of availableChairs) {
    available += element;
    if (needed >= element && needed !== 0) {
      needed -= element;
      response.push(element);
    } else if (needed < element && needed !== 0) {
      response.push(needed);
      needed = 0;
    }
  }
  console.log(available);
  if (available < need) {
    return 'Not enough!';
  } else {
    return response;
  }
}

assert.deepStrictEqual(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4), [0, 1, 3]);
assert.deepStrictEqual(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5), [0, 0, 1, 2, 2]);
assert.deepStrictEqual(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0), 'Game On');
