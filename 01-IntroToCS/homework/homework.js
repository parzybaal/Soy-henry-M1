'use strict'
//1001 = 1x2*3 + 0x2*2 + 0x2*1 + 1x2*0
function BinarioADecimal(num) {
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    decimal = decimal + num[i] * 2 ** (num.length -1 - i);
  }
 return decimal;
}
function DecimalABinario(num) {


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}