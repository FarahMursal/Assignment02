let gradePercent = prompt("Please enter a number between 1 and 100:");

if (gradePercent < 1 || score > 100) {
  alert("Only numbers between 1 and 100 are accepted.");
} else if (gradePercent >= 90 && score <= 100) {
  console.log("You received an A.");
} else if (gradePercent >= 80 && score <= 89) {
  console.log("You received a B.");
} else if (gradePercent >= 70 && score <= 79) {
  console.log("You received a C.");
} else if (gradePercent >= 60 && score <= 69) {
  console.log("You received a D.");
} else {
  console.log("You received an F.");
}
