// Create an anonymous function that takes an array of numbers and returns the sum of all the numbers
// let arr = [1,2,3,4,5]

let res = function(num){
    let sum = 0
    for(let i=0;i<=num.length-1;i++){
         sum = sum+num[i]
    }
    return sum;
};

console.log(res([1,2,3,4,5]));

