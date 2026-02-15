// Array of Objects.
// Storing information of multiple students.

let classInfo = [
    {
        name: "ishwar",
        grade: "A+",
        city: "Nashik"
    },

    {
        name: "Yogesh",
        grade: "A+",
        city: "Surat"
    },

    {
        name: "chetan",
        grade: "A+",
        city: "Pune"
    },

    {
        name: "dipak",
        grade: "B",
        city: "Dondaicha"
    }
];

classInfo[1].city = "Bardoli";
console.log(classInfo);


classInfo[classInfo.length] = {
    name: "lalit",
    grade: "O",
    city: "Jalgon"
};

console.log(classInfo);

classInfo.forEach(student => {
    student.gender = "male";
});

console.log(classInfo);