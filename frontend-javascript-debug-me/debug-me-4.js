const weight = 110;
const height = 1.79;
const BMI = weight / (height * height);

let outcome;

console.log("Your BMI is: " + BMI.toFixed());

if (BMI < 25) {
  outcome = "Depending on your build, you might be overweight";
} else if (BMI < 18) {
  outcome = "Depending on your build, you might be underweight";
} else {
  outcome = "Looks like you're height / weight ratio is pretty healthy";
}

console.log(outcome);


const isRaining = false;
const temperature = 10;

if ((isRaining === false) && (temperature > 21)) {
  console.log("Je kunt een korte broek aan!")
}

else if ((isRaining !== false) || (temperature <= 12)) {
  console.log("Doe een jas aan!")
}

const monitorColor = "blue";
if (monitorColor === "green") {
  console.log("Hartslag stabiel")
}

else if (monitorColor === "yellow") {
  console.log("Hartslag verhoogd")
}

else if ((monitorColor === "orange") || (monitorColor === "red")) {
  console.log("Kritieke hartslag, actie vereist!")

} else {
  console.log("De status van de hartslag onbekend")
}


let number = 2;

if (number <= 8) {
  console.log("eerste keer")
}
else if (number <= 6) {
  console.log("tweede keer keer")
}
else{
  console.log("derde keer")
}

if ("abadjhsdkjsdhf"){
  console.log("true")
}
else{
  console.log("false")
}