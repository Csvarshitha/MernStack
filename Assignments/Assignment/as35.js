// Write a function to generate the specified pattern.
// 1

// 2 9

// 3 8 10

// 4 7 11 14

// 5 6 12 13 15


let rows=5;
 function pattern(rows){
    for(let i=1 ; i<=rows; i++){
        let num = 1;
        for(let j=i ; j<=i ; j++){
            num = num * i+" ";
        }
    
        console.log(num);
    
    } 
 }
 pattern(5)
