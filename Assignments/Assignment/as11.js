//  Write a function to count repeated characters in a string and print in a string format.


let str1 = []
function repeatedCharacters(str){
    for(let i=0;i<=str.length-1;i++){
        let count=0
        for(let j=i+1;j<=str.length-1;i++){
            if(str[i] == str[j]){
                count++
            }
           
        }
        
    if(count>1){
        str.push(`${str[i]} : ${count} `);
    }
    return str1.join(",")
    }
}

let str = "Apple"
let str2 = repeatedCharacters(str);

console.log(str2);