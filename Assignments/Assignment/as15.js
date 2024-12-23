// Write a program to find the missing numbers in an array containing numbers from 1 to 100.
function missingNum(arr){
    let numbers = []
    for (let i = 1; i <= 100; i++) {
        if (!arr.includes(i)) {
            numbers.push(i)
        }


}
return numbers
}
let arr = [1,2,3,67,78,99]
console.log("Missing numbers",missingNum(arr));

