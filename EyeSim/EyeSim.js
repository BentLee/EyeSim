$(document).bind('mousemove', function (e) {
  $('#mousePos').css({
    top: e.pageY - $("#mousePos").height() / 2, // just minus by half the height
    left: e.pageX - $("#mousePos").width() / 2 // just minus by half the width
  });
});

var Saccade;
var Dwell;

document.onmousemove = function () {
  clearTimeout(Saccade);
  clearTimeout(Dwell);

  Saccade = setTimeout(
    function () {
      document.getElementById('bluecircle').classList.add('shake-animation');
    }, 50)
  document.getElementById('bluecircle').classList.remove('shake-animation');
  console.log("pleh");

  Dwell = setTimeout(
    function () {
      var x = document.getElementById("bluecircle");
      x.style.fill = "#c4354c99";

    }, 1000)

  var x = document.getElementById("bluecircle");
  x.style.fill = "#0000ff99";

  
}

 
/*
var Saccade;

document.onmousemove = function () {
  clearTimeout(Saccade);
  Saccade = setTimeout(
    function () {
      document.getElementById('bluecircle').classList.add('shake-animation');
    }, 1000)
  document.getElementById('bluecircle').classList.remove('shake-animation');
  console.log("pleh");
}
var Dwell;
document.onmousemove = function () {
  clearTimeout(Dwell);
  Dwell = setTimeout(
    function () {
      var x = document.getElementById("bluecircle");
      x.style.fill = "#c4354c99";

    }, 1000)

  var x = document.getElementById("bluecircle");
  x.style.fill = "#0000ff99";
  console.log("help");
}
*/

