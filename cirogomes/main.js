leftWristX = 0
rightWristX = 0
leftWristY = 0
rightWristY = 0
function preload() {
song = loadSound("music.mp3")
song2 = loadSound("active1.mp3")
posenet = ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)
posenet = ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)
}
function setup() {
    canvas = createCanvas(600,500)
canvas.center()
video = createCapture(VIDEO)
video.hide
}
function draw() {
image(video,0,0,600,500)


}
function modelLoaded() {
    console.log("wenomechainthesuma")
    
    }
function play() {
song.play()


}
gotPoses = function(results) {
    if (results.length > 0) {
        console.log(results)
leftWristY = results[0].pose.leftWrist.y;
leftWristX = results[0].pose.leftWrist.x;
rightWristY = results[0].pose.rightWrist.y;
rightWristX = results[0].pose.rightWrist.x;
    }
    }
