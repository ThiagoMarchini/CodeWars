// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
const assert = require('assert');

function nbYear(p0, percent, aug, p) {
  let years = 0;
  let population = p0;
  while (population < p) {
    population = population + population * (percent/100) + aug;
    years += 1;
  }
  return years;
}

assert.strictEqual(nbYear(1500, 5, 100, 5000), 15);
assert.strictEqual(nbYear(1500000, 2.5, 10000, 2000000), 10);
assert.strictEqual(nbYear(1500000, 0.25, 1000, 2000000), 94);