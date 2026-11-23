
// Regular function to calculate the result

function calculateResult(marks) {
    if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Arrow function to display the result
const displayResult = (name, result) => {
    console.log(name + " - " + result);
};

// Array containing learner details
const learners = [
    { name: "Anu", marks: 75 },
    { name: "Rahul", marks: 42 },
    { name: "Meena", marks: 68 },
    { name: "Arun", marks: 35 }
];

// Using for...of loop to process learners
for (const learner of learners) {
    const result = calculateResult(learner.marks);
    displayResult(learner.name, result);
}