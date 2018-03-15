var boxPos = {};
var preBoxPos = {};
var boxIDs = {};
var boxVals = {};
var boxCount = {};

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight+150);
  canvas.position(0, 0);
  angleMode(DEGREES);
  for (var i = 0; i < document.querySelectorAll('.wrapper .box').length; i++) {
    document.getElementsByClassName('box')[i].id = 'box' + i;
    document.getElementsByClassName('rating')[i].id = 'rating' + i;
    boxIDs['boxIDs' + i] = document.getElementById("box" + i);
    // scale out of 5 over 360 degrees
    boxVals['boxVal' + i] = (document.getElementById("rating" + i).innerHTML) * 360 / 5;
    boxCount['boxCount' + i] = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function scrollon() {
  clear();
}

function draw() {
  clear();
  for (var i = 0; i < document.querySelectorAll('.wrapper .box').length; i++) {
    if (i != 0) {
      var j = i - 1;
      preBoxPos['boxPos' + i] = boxIDs['boxIDs' + j].getBoundingClientRect();
      boxPos['boxPos' + i] = boxIDs['boxIDs' + i].getBoundingClientRect();
      var boxOffsetX = boxPos['boxPos' + i].left - preBoxPos['boxPos' + i].left;
      var boxOffsetY = boxPos['boxPos' + i].top - preBoxPos['boxPos' + i].top;
      translate(boxOffsetX, boxOffsetY);
    } else {
      boxPos['boxPos' + i] = boxIDs['boxIDs' + i].getBoundingClientRect();
      translate(boxPos['boxPos' + i].left, boxPos['boxPos' + i].top + window.scrollY);
      console.log(boxPos['boxPos' + i].left + ',' + boxPos['boxPos' + i].top);
    }
    noFill();
    strokeWeight(15);
    stroke(241, 196, 15);
    var arc1 = arc(100, 100, 160, 160, -90, boxCount['boxCount' + i] - 91);
    if (boxCount['boxCount' + i] < boxVals['boxVal' + i]) {
      boxCount['boxCount' + i] += 4;
    }
  }
}
