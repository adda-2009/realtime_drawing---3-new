noseX=0;
noseY=0;
leftWristX=0;
rightWristx=0;
difference=0;

function setup()
{
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
document.getElementbyid("shape1").innerHTML="width and height os a squarewill be" + difference + "px";
background('#FFCCD3');
fill('#14FCF5');
stroke('#14FCF5');
square(noseX,noseY,difference);
}

function modelLoaded()
{
console.log('PoseNet Is Initialized !');
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX = "+ noseX + "noseY = " + noseY);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX = "+ leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}