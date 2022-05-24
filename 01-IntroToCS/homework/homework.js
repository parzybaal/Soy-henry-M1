'use strict'
//1001 = 1x2*3 + 0x2*2 + 0x2*1 + 1x2*0

function BinarioADecimal(num) {

  let decimal = 0;

  for (let i = 0; i < num.length; i++) {
    decimal = decimal + num[i] * 2 ** (num.length -1 - i);
  }
 return decimal;

} 
//10 / 2 = 5 = 0
//5 / 2 = 4 = 1
//4 / 2 = 2 = 0
//2 / 2 = 0 = 0

function DecimalABinario(num) {
  
  var binario = '';
  while (num > 0) {
    var resto = num % 2;
    binario = resto + binario;
    num = Math.floor(num / 2); 
  }
  return binario;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}