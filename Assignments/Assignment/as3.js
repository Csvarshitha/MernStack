// Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names

//  const people = [{ name: "Alice", age: 25 },

//   { name: "Bob", age: 17 },{ name: "Charlie", age: 30 },{ name: "David", age: 16 }, { name: "Eve", age: 20 }  ];

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 },
    { name: "Eve", age: 20 }  ];

    let people1 = people.filter(function(people){
        if(people.age>=18){
            return people
        }
    })
    
    console.log(people1);
    let people2 = people1.map(function(people)
    {return people.name})
    console.log(people2);
    //  let people2 = people1.map(person => person.name)  => by using arrow function
