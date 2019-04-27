function getShape() {
  var side = []
  side.push(document.getElementById("base").value);
  side.push(document.getElementById("leftLeg").value);
  side.push(document.getElementById("rightLeg").value);

  var base = side[0]
  var leftLeg = side[1]
  var rightLeg = side[2]

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
$(document).ready(getShape() {
      $("form").submit(getShape(vent) {