const prompt = require('prompt-sync')();
let size = Number(prompt("Enter the size of array: "));
let arr1 = [];
for (let i = 0; i <= size; i++) {
  arr1[i] = Number(prompt());
}
let n = Number(prompt("enter the value of n"));
arr1.sort();
let missingNumber = [];
for(let i = 1; i<=n; i++){
  if(i != arr1[i-1]){
    missingNumber.push(i);
  }
}
console.log(missingNumber);