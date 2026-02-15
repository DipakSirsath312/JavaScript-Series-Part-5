// Conversion in Get Values.

// JS automatically converts objects keys to strings.
// Even if we made the number as a key, the number will be converted to string.

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e",
};

console.log(obj[1]);
console.log(obj[null]);
console.log(obj[undefined]);
