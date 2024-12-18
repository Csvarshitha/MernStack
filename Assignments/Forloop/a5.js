// Write a program that uses a for in loop to loop through an object and prints the key-value pairs.

// Initializing the value for object
let trainer={
    name :"Samskruthi",
    teaching : "HTMl and CSS",
    Branch : "Basavanagudi"
};
for(let i in trainer){
    console.log(`${i} : ${trainer[i]}`);
}
