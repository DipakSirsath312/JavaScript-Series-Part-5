// Objects of Objects
// Storing information of multiple students.

const classInfo = {
    ishwar: {
        grade: "A+",
        city: "Nashik",
    },
    yogesh: {
        grade: "A+",
        city: "Bardoli",
    },
    chetan: {
        grade: "O",
        city: "Pune",
    },
    mustfa: {
        grade: "A+",
        city: "Shahada",
    },
    dipak: {
        grade: "A",
        city: "Dondaicha",
    },
};
console.log(classInfo);

classInfo.mustfa.city = "Shirpur";

classInfo.lalit = { grade: "A+", city: "Jalgon" };

classInfo.lalit.grade = "O";
console.log(classInfo.lalit);

console.log(classInfo);
