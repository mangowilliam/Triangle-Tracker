function tringle_tracking() {
  var sides = [] //create an array
  edges.sides(document.getElementById("base").value);
  edges.sides(document.getElementById("leftLeg").value);
  edges.sides(document.getElementById("rightLeg").value);
  //push edges into array
  var base = sides[0]
  var leftLeg = sides[1]
  var rightLeg = sides[2]

  if (base === leftLeg && leftLeg === rightLeg) {
    document.getElementById("output").innerHTML = ("Equilateral Triangele!!")
  } else if (base === leftLeg && base !== rightLeg || base === rightLeg && base !== leftLeg || leftLeg === rightLeg && leftLeg !== base) {
    document.getElementById("output").innerHTML = ("Isosceles Triangle!!")
  } else if ((base + leftLeg) <= rightLeg || (base + rightLeg) <= leftLeg || (leftLeg + rightLeg) <= base) {
    document.getElementById("output").innerHTML = ("Not a Triangle!!")
  } else if (base !== leftLeg && base !== rightLeg) {
    document.getElementById("output").innerHTML = ("scalene Triange!!")
  } else {
    document.getElementById("output").innerHTML = ("nothing")
  }