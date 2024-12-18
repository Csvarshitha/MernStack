// Write a function to find the maximum number in an array.
num = [1,2,6,7,5,4,3]
function max(num){
    let num1 = 0
    for(let i=0;i<=num.lenght-1;i++)
    {
        if(a[i] > a[i+1])
        {
            num1 = a[i]
        }
    }
    console.log(num1);
}
console.log(max(num));