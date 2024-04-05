function doMathClicked() {
  // this function does basic math: Area of a Trapezoid
  let SideA = parseInt(document.getElementById("SideA").value);
  let SideB = parseInt(document.getElementById("SideB").value);
  let SideH = parseInt(document.getElementById("SideH").value); // Update from 'SideC' to 'SideH'
  let answer = (1/6) * SideA * SideB * SideH;

  // Make sure not negative
  if (answer <= 0) {
    answer = 0;
    document.getElementById("AreaOfTrapezoid").innerHTML = "Invalid input. Ensure value is a positive number.";
  } else {
    document.getElementById("AreaOfTrapezoid").innerHTML = "Area of a Trapezoid = " + answer.toFixed(2);
  }
}