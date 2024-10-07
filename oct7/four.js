const prompt = require('prompt-sync')();
 let n = Number(prompt("Enter the size of array: "));
 let arr1 = [];
 for(let i = 0; i < n; i++){
    arr1[i] = Number(prompt());
 }
 let d = Number(prompt("enter the value of d"));

 let arr2 = [];
 let count = 0;
 for(let i = n-d; i < n; i++){
    arr2[count] = arr1[i];
    count++;
 }
 for(let i = 0; i < n-d; i++){
    arr2[count] = arr1[i];
    count++;
 }
 console.log(arr2);;
 
