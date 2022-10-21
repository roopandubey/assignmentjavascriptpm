const attendence = 65;
const medical = true;

if (attendence >= 75) {
  console.log("ture");
} else if (medical === false && attendence < 75) {
  console.log("False");
} else if (medical === true && attendence >= 60) {
  console.log("ture");
} else {
  console.log("N");
}