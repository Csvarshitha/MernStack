// Write a function to sort an array without using built-in methods.

// let arr = [1,2,3,3,4,8,6,7]
let arr1 = []
function solve(arr){
    console.log("Ascending order:",arr.sort((a,b) => a-b));
    arr.sort((a,b) => a-b);
}

solve([1,2,3,3,4,8,6,7])



