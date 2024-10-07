// union of the array

const prompt = require('prompt-sync')();
let n1 = Number(prompt("enter the size of arr1: "));
let arr1 = [];
let arr3 = [];

for (let i = 0; i < n1; i++) {
    arr1[i] = Number(prompt());
    arr3.push(arr1[i]);
}
let n2 = Number(prompt("enter the size of arr2: "));
let arr2 = [];
for (let i = 0; i < n2; i++) {
    arr2[i] = Number(prompt());
    arr3.push(arr2[i]);

}
arr3.sort();
let union = [];
for(let i = 0; i < n1+n2; i++){
    if(arr3[i] != arr3[i-1]){
        union.push(arr3[i]);
    }
}

// console.log(arr3);
console.log(union);
