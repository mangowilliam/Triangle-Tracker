function tringle() {
  var edges = [] //create an array
  edges.push(document.getElementById("base").value);
  edges.push(document.getElementById("leftLeg").value);
  edges.push(document.getElementById("rightLeg").value);
  //push side into array
  var base = edges[0]
  var leftLeg = edges[1]
  var rightLeg = edges[2]

  if (base === leftLeg && leftLeg === rightLeg) {
    output.innerHTML = ("Equilateral Triangele!!")
  } else if (base === leftLeg || base === rightLeg || leftLeg === rightLeg) {
    output.innerHTML = ("Isosceles Triangle!!")
  } else if ((base + leftLeg) <= rightLeg || (base + rightLeg) <= leftLeg || (leftLeg + rightLeg) <= base) {
    output.innerHTML = ("Not a Triangle!!")
  } else if (base != leftLeg && base != rightLeg) {
    output.innerHTML = ("scalene Triange!!")
  } else if (isNan(base) || isNan(leftLeg) || isNan(rightLeg)) {
    output.innerHTML = ("not a number")
  }
}

function reset() {
  location.reload();
}