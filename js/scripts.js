function getShape() {
  var side = [] //create an array
  side.push(document.getElementById("base").value);
  side.push(document.getElementById("leftLeg").value);
  side.push(document.getElementById("rightLeg").value);
  //push side into array
  var [b, l, r] = side //assign
  var output = document.getElementById(output);
  if (b.length === 0 || l.length === 0 || r.length === 0) {
    output.innerHTML = ("insert your values")
  } else {
    b = parseInt(b);
    l = parseInt(l);
    r = parseInt(r);
    findIf(b, l, r);
  }
}

function findIf(b, l, r) {
  if (b === l && l === r) {
    output.innerHTML = ("Equilateral Triangele!!")
  } else if (b === l || base === r || l === r) {
    output.innerHTML = ("Isosceles Triangle!!")
  } else if ((b + l) <= r || (b + r) <= l || (l + r) <= b) {
    output.innerHTML = ("Not a Triangle!!")
  } else if (b != l && b != r) {
    output.innerHTML = ("scalene Triange!!")
  } else if (isNan(b) || isNan(l) || isNan(r)) {
    output.innerHTML = ("not a number")
  } else {
    output.innerHTML = //("do nothing")
  }
}

function reset() {
  location.reload();
}