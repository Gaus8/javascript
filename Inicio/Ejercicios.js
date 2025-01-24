//FUNCION PAR
function esPar(num){
    if (num == 0 ) return true;
    else if(num ==1) return false;
    else if(num < 0) return esPar(-num);
    else return esPar(num-2);
}
//console.log(esPar(-9));
//FUNCION MINIMO
function minimo(a,b){
    if(a<b) return a;
    else return b;
}
console.log(minimo(9,10))

//CONTAR FF
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }

  console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));