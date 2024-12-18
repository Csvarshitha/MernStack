// Write a program to print numbers from 1 to 30. For multiples of 3, print "Move" instead of the number, 
// for multiples of 5, print "Go", and for multiples of both 3 and 5, print "Keep Moving".


// Initializing the value for numbers
let num = 30;

for(let i=1;i<=num;i++)
{
    if(i%3 == 0 )
        // multiple of three print "move"
        {
            console.log("Move"); 
        }
        else if(i%5 == 0)
            // multiple of five print "Go"
        {
            console.log("Go");

        }
        else if(i%3 == 0 && i%5 == 0)
        // multiple of both 3 and 5 print "Keep Going"
        {
            console.log("Keep Going");

        }
        else{
            console.log(i);
        }
}
