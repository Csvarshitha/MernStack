
// Write a code which can give grades to students according to theirs marks using Conditionals

// 80%-100%, Distinction
// 60%-79%, First Class
// 50%-59%, Second Class
// 35%-49%, Pass
// 0%-34%, FAIL

let grade = 70
if(grade>=80 && grade<=100)
{
    console.log("Distinction")
}
else if(grade>=60 && grade<=79){
    console.log("First Class")
}
else if(grade>=50 && grade<=59)
{
    console.log("Second Class")
}
else if(grade>=35 && grade<=49)
{
    console.log("Pass")
}
else 
{
    console.log("Fail")

}