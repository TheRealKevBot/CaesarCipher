// Write a class that, when given a string, will return an uppercase string with 
// each letter shifted forward in the alphabet by however many spots the cipher 
// was initialized to.


// For example:
// var c = new CaesarCipher(5) // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES' 

// If something in the string is not in the alphabet 
// (e.g. punctuation, spaces), simply leave it as is.
// The shift will always be in range of [1, 26].

// var CaesarCipher = function (shift) {
 
// }; 

function CaesarCipherEncode(shift, string){
  let word = []
  string = string.toUpperCase();
  for (i = 0; i < string.length; i++){
    string.charCodeAt(i) + shift <= 90 ? word.push(String.fromCharCode(string.charCodeAt(i) + shift)) 
    : word.push(String.fromCharCode((string.charCodeAt(i) + shift) - 26))
  }
  return word.join('') 
} 

console.log(CaesarCipherEncode(5, 'Codewars'), 'HTIJBFWX')
console.log(CaesarCipherEncode(5, 'Waffles'), 'BFKKQJX')

function CaesarCipherDecode(shift, string){ 
  let word = []
  string = string.toUpperCase()
  for (i = 0; i < string.length; i++){
    string.charCodeAt(i) - shift >= 65 ? word.push(String.fromCharCode(string.charCodeAt(i) - shift)) 
    : word.push(String.fromCharCode((string.charCodeAt(i) - shift) + 26))
  }
  return word.join('')
}

console.log(CaesarCipherDecode(5, 'BFKKQJX'), 'WAFFLES')
console.log(CaesarCipherDecode(5, 'HTIJBFWX'), 'CODEWARS')