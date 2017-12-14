var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var setRed = 255;
var setGreen = 102;
var setBlue = 0;

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

var findIt = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var d = distance(x,y,targetX,targetY);
    console.log(d);
    colorize(d);
};


//white(255, 255, 255) to orange(255, 102, 0)
var colorize = function(d) {
    var red = (255 - setRed) * d;
    
}

var check = function(e) {
    if (Math.abs(e.clientX-targetX) < 5 && Math.abs(e.clientY-targetY) < 5) {
	alert("You've won!");
    }
}
/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
box.addEventListener("click", check);

