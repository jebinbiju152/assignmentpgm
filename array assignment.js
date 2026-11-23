
// Array containing student details
let students = [
    { name: "John", marks: 85, grade: "A" },
    { name: "David", marks: 72, grade: "B" },
    { name: "Peter", marks: 90, grade: "A+" },
    { name: "Sarah", marks: 65, grade: "C" }
];

// 1. forEach() - Print all student details
console.log("All Students:");

students.forEach(student => {
    console.log(student.name + " - " + student.marks + " - " + student.grade);
});

// 2. map() - Create an array containing student names
let studentNames = students.map(student => student.name);

console.log("\nStudent Names:");
console.log(studentNames);

// 3. filter() - Get students who scored 80 or above
let topStudents = students.filter(student => student.marks >= 80);

console.log("\nStudents who scored 80 or above:");
console.log(topStudents);