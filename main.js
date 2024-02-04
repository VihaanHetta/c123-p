noseX = 0;
noseY = 0;

function preload(){
  moustache = loadImage( 'https://i.postimg.cc/85ST8BXC/moustache1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(299 , 299);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('PoseNet is Initialized');
}

function take_snapshot(){
  save('myFilterImage.png');
}

function gotPoses(results)
{
  if (results.length > 0)
  {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }

}

function draw(){
image(video, 0 , 0 , 300 , 300);
image(moustache, noseX- 45, noseY-10, 100, 60);

}

