function reverseString(str){
    var arrayofchars= str.split("");
    var  strtoarray =arrayofchars.reverse();
    var joinArray= strtoarray.join("");
    return joinArray;
}

console.log(reverseString("toong"));

var numbers = [1,2,3,4,5,6,-1,9,7,5,-4,-9];
var soam = numbers.filter(myFunction_am);

function myFunction_am(value, index, array) {
  return value<0 ;
}
console.log(soam);
var numbers = [1,2,3,4,5,6,-1,9,7,5,-4,-9];
var chan = numbers.filter(myFunction_chan);

function myFunction_chan(value, index, array) {
  return value%2==0;
}
console.log(chan);

var numbers = [1,2,3,4,5,6,-1,9,7,5,-4,-9];
var le = numbers.filter(myFunction_le);

function myFunction_le(value, index, array) {
  return value%2!=0 && value>0;
}
console.log(le);