// Write a function to calculate the sum of total marks in an array of objects.

let marks=[
    {marks1 : 100},
    {marks2 : 80},
    {marks3 : 90}
]
let total = 0
function sum(){
    total = marks.marks1+marks.marks2+marks.marks3;
}
console.log(total);
sum()