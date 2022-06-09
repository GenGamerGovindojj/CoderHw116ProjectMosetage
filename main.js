moseX = 0
moseY = 0
function preload() {
    moseimage=loadImage("https://i.postimg.cc/tCZyV8Zk/PNGPIX-COM-Moustache-PNG-Image-2.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    postNet = ml5.poseNet(video, modelLoaded);
    postNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {


        console.log(results);
     moseX=results[0].pose.nose.x
     moseY=results[0].pose.nose.y
        console.log("nose x =" + moseX);
        console.log("nose y =" + moseY );
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(moseimage,moseX -12,moseY-11,24,24 )
}

function take_pick() {
    save("moseFilter.png");
}