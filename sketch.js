var sandy=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
background(200,sandy,80); //an RGB color for the canvas' background
}
//The draw function happens over and over again
function draw() {
  
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(5);
  fill(181,9,131); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(175,400,sandy,sandy); // center of canvas, 20px dia
fill(random(181,160),random(11,9),random(127,180));
  strokeWeight(0);
  ellipse(75,75,20,20);
  ellipse(95,75,20,20);
  triangle(65,75,85,100,105,75);
  fill(247,5,101);
  strokeWeight(10);
  
  fill(79,mouseX,mouseY);
  triangle(150,20,300,150,400,30);
  strokeWeight(0);//no outline on heart
ellipse(225,250,50,50); //left side heart
  ellipse(275,250,50,50); //right side heart
  triangle(200,250,250,400,300,250);//bottom of heart
  stroke(245,12,186);
  strokeWeight(5);
 line(100,200,400,sandy);
 textFont('Courier');
 textSize(100);
 text('Party',100,250);
}

 function mousePressed() {
  if (sandy>=300){
    sandy=0;
  }else{
    sandy=sandy+2;
}
  

}