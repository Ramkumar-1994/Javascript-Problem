// Loop an Array of objects and remove all objects which dont have gender's value male

let students = [
  { name: "Aarav", gender: "Male", city: "Mumbai", age: 28 },
  { name: "Isha", gender: "Female", city: "Delhi", age: 25 },
  { name: "Kiran", gender: "Male", city: "Bangalore", age: 30 },
  { name: "Neha", gender: "Female", city: "Hyderabad", age: 32 },
  { name: "Rohan", gender: "Male", city: "Chennai", age: 27 },
  { name: "Priya", gender: "Female", city: "Kolkata", age: 29 },
];

for (let j = 0; j < students.length; j++) {
  if (students[j].gender !== "Male") students.splice(j, 1);
}

console.log(students);

// Using Filter Method

students = students.filter((student) => {
  return student.gender === "Male";
});

console.log(students);
