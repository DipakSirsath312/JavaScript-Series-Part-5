// Get Values.

const s1 = {
  Name: "DipakShirsath",
  Branch: "MCA",
  specilization: "Web-Dev",
  Friends: ["yogesh", "ishwar", "chetan"],
  reposts: 5,
};

console.log(s1);
console.log(s1.Branch);
console.log(s1.specilization);
console.log(s1.Friends[2]);
console.log(s1.Friends[1]);

let prop = "reposts";
console.log(s1[prop]);

let s2 = "Friends";
console.log(s1[s2]);
