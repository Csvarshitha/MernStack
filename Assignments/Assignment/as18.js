// Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]
let input = ["1a1","2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"]
let out = []
function show(input){
    let pattern = /\d{3,4}/g
   console.log( input.match(pattern));
  

}

console.log(show(input));
