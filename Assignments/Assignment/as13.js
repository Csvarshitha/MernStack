// Write a JavaScript code to extract numbers between two characters in a string and add them all (use Alpha numeric Numberics as input).

let str = "Ram 123 Tom and 4 Jerry"
let pattern = /\d+/g

let out = str.match(pattern)
  console.log(out);   
