function getShape() {
  var base = parseInt(prompt("enter the value of the side facing downwards"));
  var leftLeg = parseInt(prompt("enter the value of the left side "));
  var rightLeg = parseInt(prompt("enter the value of the right side"));
  if (isNaN(base) || isNaN(leftLeg) || isNaN(rightLeg)) {
    alert("error");
  } else if (base === leftLeg && leftLeg === rightLeg) {
    alert("Equilateral Triangele!!");
  } else if (base === leftLeg || base === rightLeg || leftLeg === rightLeg) {
    alert("Isosceles Triangle!!");
  } else if ((base + leftLeg) <= rightLeg || (base + rightLeg) <= leftLeg || (leftLeg + rightLeg) <= base) {
    alert("Not a Triangle!!");
  } else if ((base != leftLeg && base != rightLeg)) {
    alert("scalene Triange!!");
  } else {
    alert("");
  }
}