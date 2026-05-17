const people = [
  {
    first: "Grace",
    last: "Rasaily",
    section: "P"
  },
  {
    first: "Sakshyam",
    last: "Riyal",
    section: "P"
  },
  {
    first: "Sangam",
    last: "Pandey",
    section: "C"
  }
];

// Extract from each array > object and logging it
people.map(person => {
  console.log(`${person.first} is a student in section ${person.section}`);
})

// Extracting and logging from section c
let [section_c] = people.filter(person => person.section === "C");
console.log(section_c);


// Extracting specific object key
let [section_c_2] = people.filter(person => person.section === "C");
console.log(section_c_2.first);

// or
// let [{first}] = people.filter(person => person.section === "C");
// console.log(first);