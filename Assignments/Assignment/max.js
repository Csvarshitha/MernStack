// Find a = [3,7,8,6,2,5] maximum and minimum number in array

let a = [3,7,8,6,2,5]

let max = a[0]
let min = a[0]

for(let i=0;i<=a.length-1;i++){
    if(a[i] > max)
    {
        max = a[i]
    }
    if(a[i] < min)
    {
        min = a[i]
    }

}
console.log(max + " is a maximum number")
console.log(min + " is a minimum number")