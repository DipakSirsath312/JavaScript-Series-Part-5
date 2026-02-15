// Add / Update Value.

// Change the city to "Indore"
// Add a new property, gender: "Male",
// Change the marks to "A"

const student = {
  Name: "DipakShirsath",
  age: 23,
  marks: 70,
  city: "Shahada",
};

console.log(student);
console.log(student.Name);

student.city = "Indore";
console.log(student.city);

student.gender = "Male";
console.log(student);

student.marks = "A";
console.log(student);

delete student.city;
console.log(student);
delete student.marks;
console.log(student);
