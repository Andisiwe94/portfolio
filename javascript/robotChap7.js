// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
    "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
    "#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop =
    "5px black solid";
// document.getElementById("head").style.transform =
"rotate(15deg)";
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);

        }

    }
}
var rightnose = document.getElementById("rightnose");
nose.addEventListener("click", moveNoseRight);

function moveNoseRight(e) {
    var robotPart = e.target;
    var left = 100;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 50) {
            clearInterval(id);

        }

    }
}
var rightmouth = document.getElementById("rightmouth");
mouth.addEventListener("click", moveMouthRight);

function moveMouthRight(e) {
    var robotPart = e.target;
    var left = 100;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 20) {
            clearInterval(id);

        }

    }
}
var leftarm = document.getElementById("leftarm");
leftarm.addEventListener("click", moveArmDown);

function moveArmDown(e) {
    var robotPart = e.target;
    var top = 100;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top--;
        if (top === 34) {
            clearInterval(id);

        }

    }
}
var rightrobot = document.getElementById("rightrobot");
mouth.addEventListener("click", moveRobotRight);

function moveRobotRight(e) {
    var robotPart = e.target;
    var left = 100;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 20) {
            clearInterval(id);

        }

    }
}