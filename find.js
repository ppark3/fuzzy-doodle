var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var hue = 254;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return ((x0 - x1) ** 2 + (y0 - y1) ** 2) ** (0.5);
};

//determine mouse location, calculate distance to target, give to colorize
var findIt = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var d = distance(x,y,targetX,targetY);
    colorize(d);
    check(x, y);
};

//hsl(hue, saturation, brightness);
//0(black) to 50(hue) brightness.
//sets the color of the box to certain hue; 1028.52 is greatest distance in box
var colorize = function(d) {
    var degree = 50 - (d/1028.52 * 50);
    var color = "background-color: hsl(" + hue + ", 100%, " + degree + "%)";
    box.setAttribute("style", color);
}

//check mouse's location to see if its distance is 
var check = function(x, y) {
    if (Math.abs(x-targetX) < 10 &&
	Math.abs(y-targetY) < 10) {
	alert("You've found it!");
    }
}

box.addEventListener("mousemove", findIt);

