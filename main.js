// defining constants
const SVG_HEIGHT = 500;
const SVG_WIDTH = 500;

// defining the initial values given for the scatter plot
let data = [ [1, 2], [2, 4], [6, 2], [9, 9]];

let svg = document.getElementById("svg");

// function to create a circle given the x and y coordinates
function addPoint(x, y) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", x*50);
  circle.setAttribute("cy", SVG_HEIGHT - (y*50));
  circle.setAttribute("r", 5);
  circle.setAttribute("fill", "blue");
  circle.setAttribute("class", "circle");
  return circle;
}

// plot each point into the SVG
data.forEach(pair => {
  svg.appendChild(addPoint(pair[0], pair[1]));
})

// when the button is clicked, add the point from the input fields onto the scatter plot
function buttonClick() {
  let x = document.getElementById("x-coord").value;
  let y = document.getElementById("y-coord").value;
  svg.appendChild(addPoint(x, y));
}