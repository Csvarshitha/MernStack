// Count the occurrences of each unique character in the string

// let str = "Rama"

function occurence(str){
    let str1 = str
    let count = 1
    for( let i=0;i<=str.length-1;i++){
        if(str1[i] != str1[i+1])
        {
           return count;
        }
        console.log(count);
    }

}console.log(occurence("Ram"));

