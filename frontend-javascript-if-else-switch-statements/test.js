for (var i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);


for (let j = 0; j < 5; j++) {
    console.log("Inside the loop:", j);
}
// geeft ReferenceError: j is not defined
// console.log("Outside the loop:", j);
let grade = 3;
if (grade >= 5.5) {
    // het eerste blok wordt uitgevoerd als de conditie true is
    console.log("Je hebt het gehaald!");
    let gehaald = true;
    }
 else {
    // het tweede blok wordt uitgevoerd als de conditie false is
    console.log("Je hebt het niet gehaald..");
    gehaald = false;
}
console.log(gehaald);
var variableTypeVar = "This is a variable type var";
let variableTypeLet = "This is a variable type let";
temp();
function temp() {
    console.log(variableTypeVar);
    console.log(variableTypeLet);
}

const test_const;
test_const = 25;
console.log(test_const);
// geeft TypeError: Assignment to constant variable.
// test_const = 23;
console.log(test_const);
