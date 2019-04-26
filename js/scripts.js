function getShape() {
  var base = parseFloat(prompt("enter the value of the side facing downwards"));
  var leftLeg = parseFloat(prompt("enter the value of the left side "));
  var rightLeg = parseFloat(prompt("enter the value of the right side"));
  if (base === leftLeg && leftLeg === rightLeg && basse === rightLeg) {
    alert("Equilateral Trianle!!");
  } else if (base === leftLeg || base === rightLeg || leftLeg === rightLeg) {
    alert("Isosceles Triangle!!");
  } else if ((base + leftLeg) <= rightLeg || (base + rightLeg) <= leftLeg || (leftLeg + rightLeg) <= base) {
    alert("Not a Triangle!!");
  } else {
    alert("scalene Triange!!");
  }
}