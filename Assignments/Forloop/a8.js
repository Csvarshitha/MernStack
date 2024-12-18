// Write a program that finds the largest number in an array using a for of loop.

let num = [1,34,56,67,89,23,22];
let larger = num[0];



    for(let n of num){
        if(n>larger){
            larger = n;
        }
        
    }

console.log(larger);