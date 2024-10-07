const prompt = require('prompt-sync')();
 let n = Number(prompt());
 let arr = [];
 
 for(let i = 0; i<n;i++){
    arr[i] = Number(prompt());
 }
 arr.sort();

 let result = []

 for(let i = 0; i < n; i++){
    if(arr[i] == arr[i+1]){
        result.push(arr[i]);
    }
 }
 console.log(result);
 