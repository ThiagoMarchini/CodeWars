function DNAStrand(dna){
  let complement = '';
  for (let letter of dna) {
    if (letter === 'A'){
      complement += 'T';
    } else if (letter === 'T') {
      complement += 'A';
    } else if (letter === 'G') {
      complement += 'C';
    } else {
      complement += 'G';
    }
  }
  return complement;
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));