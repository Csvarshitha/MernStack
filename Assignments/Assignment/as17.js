// Write a function to calculate the factorial of a number

function factorial(number){
    let fact = 1;
    for(let i=number;i>=1;i--){
        fact = fact*i;
    }
    return fact;
}console.log(factorial(4));
