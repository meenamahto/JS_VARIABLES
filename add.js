// var a=12
// console.log('a')


// var a = 3;
// var b = 4;
// console.log(a + b)

var c = require('readline-sync');

// var operation = c.pr('Kaunse operation karna chahenge', 'a:addition/s:subtraction/d:division/m:multiplication')
var operation=c.question("enter symbol:")
var a = c.questionInt(('Pehle number likho', '12'))

var b = c.questionInt(('Dusra number likho', '34'))

if (operation == 'a') {
console.log(a+b)
} else if (operation == 's') {
console.log(a-b)
} else if (operation == 'd') {
console.log(a/b)
} else if (operation == 'm') {
console.log(a*b)
}