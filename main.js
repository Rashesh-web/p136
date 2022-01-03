status= " ";
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(480,380);
    video.hide();
    video.size(480, 380);
}

function draw(){
 image(video ,0,0,480,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Object";
    input_value = document.getElementById("input").value;
}

function modelLoaded(){
    console.log(" Model Loaded!");
    status = true;
}