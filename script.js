try { //PUT EVERYTHING IN THIS TRY{} FUNCTION IF YOU'RE RESTRICTED FROM WEB TOOLS / CONSOLE. If not, you can just comment try{} and catch{} :]
let eyes = document.getElementsByClassName('eyes');
let leftEye = document.getElementById('leftEye');
let rightEye = document.getElementById('rightEye');

//Left Eye -- Scaling
leftEye.width = (window.innerWidth / 2)
leftEye.height = window.innerHeight

//Right Eye -- Scaling
rightEye.width = (window.innerWidth / 2.01)
rightEye.height = window.innerHeight

//Gyroscope Setup -- credits to MDN Docs
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});
gyroscope.start();

//Draw Setup
function drawRECT(x, y, x2, y2, color)  {
    if (leftEye.getContext && rightEye.getContext) {
        const L_Eye = leftEye.getContext('2d');
        const R_Eye = rightEye.getContext('2d');
        L_Eye.fillStyle = color;
        L_Eye.fillRect(x, y, x2, y2);
        R_Eye.fillStyle = color;
        R_Eye.fillRect(x, y, x2, y2);
    }
}
function drawLine(x, y, x2, y2, color) {
    const L_Eye = leftEye.getContext('2d');
    const R_Eye = rightEye.getContext('2d');
    L_Eye.beginPath();
    L_Eye.strokeStyle = color;
    L_Eye.moveTo(x, y);
    L_Eye.lineTo(x2, y2);
    L_Eye.stroke();
    R_Eye.beginPath();
    R_Eye.strokeStyle = color;
    R_Eye.moveTo(x, y);
    R_Eye.lineTo(x2, y2);
    R_Eye.stroke();
};

function drawTri(pointX, pointY, pointX2, pointY2, pointX3, pointY3, color) {
    const L_Eye = leftEye.getContext('2d');
    const R_Eye = rightEye.getContext('2d');
    L_Eye.fillStyle = color
    R_Eye.fillStyle
}

//drawRECT(100, 100, 200, 200, "white");
}
catch(error) {
    alert(error)
}try { //PUT EVERYTHING IN THIS TRY{} FUNCTION IF YOU'RE RESTRICTED FROM WEB TOOLS / CONSOLE. If not, you can just comment try{} and catch{} :]
let eyes = document.getElementsByClassName('eyes');
let leftEye = document.getElementById('leftEye');
let rightEye = document.getElementById('rightEye');

//Left Eye -- Scaling
leftEye.width = (window.innerWidth / 2)
leftEye.height = window.innerHeight

//Right Eye -- Scaling
rightEye.width = (window.innerWidth / 2.01)
rightEye.height = window.innerHeight

//Gyroscope Setup -- credits to MDN Docs
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});
gyroscope.start();

//Draw Setup
function drawRECT(x, y, x2, y2, color)  {
    if (leftEye.getContext && rightEye.getContext) {
        const L_Eye = leftEye.getContext('2d');
        const R_Eye = rightEye.getContext('2d');
        L_Eye.fillStyle = color;
        L_Eye.fillRect(x, y, x2, y2);
        R_Eye.fillStyle = color;
        R_Eye.fillRect(x, y, x2, y2);
    }
}
function drawLine(x, y, x2, y2, color) {
    const L_Eye = leftEye.getContext('2d');
    const R_Eye = rightEye.getContext('2d');
    L_Eye.beginPath();
    L_Eye.strokeStyle = color;
    L_Eye.moveTo(x, y);
    L_Eye.lineTo(x2, y2);
    L_Eye.stroke();
    R_Eye.beginPath();
    R_Eye.strokeStyle = color;
    R_Eye.moveTo(x, y);
    R_Eye.lineTo(x2, y2);
    R_Eye.stroke();
};

function drawTri(pointX, pointY, pointX2, pointY2, pointX3, pointY3, color) {
    const L_Eye = leftEye.getContext('2d');
    const R_Eye = rightEye.getContext('2d');
    L_Eye.fillStyle = color
    R_Eye.fillStyle
}

//drawRECT(100, 100, 200, 200, "white");
}
catch(error) {
    alert(error)
}
