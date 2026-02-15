// Qs3.Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

let Person = {
    pName: "Herry Horrid",
    pAge: 24,
    pCity: "Delhi",
}

console.log(Person);

Person.pCity = "New York";
console.log(Person);

Person.pCountry = "United States";
console.log(Person);