var tringle_tracking = function(base, leftleg, rightleg) {
    var base = parseInt(document.getElementById("b").value);
    var leftleg = parseInt(document.getElementById("l").value);
    var.rightleg = parseInt(document.getElementById("r").value);

    var triangles = [];
    triangles.push(base);
    triangles.push(leftleg);
    triangles.push(rightleg);

    if (base === leftleg && leftleg === rightleg) {
      document.getElementById("output").innerHTML = ("Equilateral Triangele!!")
    } else if (base === leftleg && base !== rightleg || base === rightleg && base !== leftleg || leftleg === rightleg && leftleg !== base) {
      document.getElementById("output").innerHTML = ("Isosceles Triangle!!")
    } else if ((base + leftleg) <= rightleg || (base + rightleg) <= leftleg || (leftleg + rightleg) <= base) {
      document.getElementById("output").innerHTML = ("Not a Triangle!!")
    } else if (base !== leftleg && base !== rightleg) {
      document.getElementById("output").innerHTML = ("scalene Triange!!")
    } else {
      document.getElementById("output").innerHTML = ("nothing")
    }