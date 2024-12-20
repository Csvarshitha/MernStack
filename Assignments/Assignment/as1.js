// Analyze the given input and output, write a program accordingly

// Input a = [2,3,4,5,3,3,5,2,5,3] and Output [ 5, 5, 5, 4, 3, 3, 3, 3, 2, 2]

let a = [2,3,4,5,3,3,5,2,5,3]

let a1 = a.sort((a,b) => b-a);

console.log(a1);

// for(let i=0;i<=a.length-1;i++)
// {
    
//     if(a[i] >a[i+1])
//     {
//         console.log(a[i]);
//     }

// }