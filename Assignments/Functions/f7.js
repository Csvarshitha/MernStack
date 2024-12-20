// Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.

function sum(...numbers){
    let res = 0
    for(let i=0;i<numbers.length;i++){
        res += numbers[i]

    }
    return res;
    
};
console.log(sum(1,2,3));


