// Write a program that prints a pattern of stars using nested loops. Print a right-angled triangle pattern with 5 rows.

// Initializing the no of rows
let rows=5;

for(let i=1 ; i<=rows; i++){
    let stars="";
    for(let j=1 ; j<=i ; j++){
        stars= stars+"*";
    }

    console.log(stars);

}

