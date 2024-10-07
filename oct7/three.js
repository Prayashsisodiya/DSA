const prompt = require('prompt-sync')();
 let n = Number(prompt());
 let arr1 = [];
 for(let i = 0; i < n; i++){
    arr1[i] = Number(prompt());
 }
 let arr2 = [];
 for(let i = 0; i < n; i++){
    arr2[i] = arr1[i];
 }
 arr2.sort();
//  console.log(arr1);
//  console.log(arr2);
let result = true;
 for(let i = 0; i < n; i++){
    if(arr1[i] != arr2[i]){
        result = false;
    }
 }
 console.log(result);
 