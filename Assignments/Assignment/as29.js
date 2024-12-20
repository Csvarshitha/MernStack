// Write a function to capitalize the first letter of each word in an array of strings.

let str1 = ["ram","sita"]
let str2 = []
function capital(){
    for(let name of str1){
        str2 .push(name.charAt(0).toUpperCase()+name.slice(1))
       
   }console.log(str2)
}
capital()

