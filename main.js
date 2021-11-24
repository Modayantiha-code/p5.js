function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}



function draw() {
    image(video, 0, 0, 500, 400);
    stroke("purple");
    fill("black");
    circle(100, 100, 50);
    circle(50, 300, 50);
    circle(200, 100, 50);
    circle(40, 20, 50);
    rect(250, 200, 5, 400);
}