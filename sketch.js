//comment

/* 
multiple line comment 
*/

let x = 1;
let y = 2;
console.log(x + y);

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30)

  }



  
  console.log("this is my first console log!! woot woot")

  function draw() {
    background(0);
  
 for (let i = 0; i < windowWidth; i += 20)
 {
  line(0,i*2,windowWidth, i);
  stroke(255)

  line(windowWidth/2,i/2, 0, i*3)
  stroke(255)

  //line(0, windowHeight, windowWidth/3, i)

 
  //line(windowWidth/2, windowHeight/2, windowWidth, i^2+1)
  
  
   

  fill(255)
  rect(windowWidth/1.7, windowHeight/1.7, windowWidth/3, windowHeight/3)
 }
 
 /*
 textSize(10);
 fill(0)
 textFont('Serif');
 textAlign(CENTER)
 text('this is a simulation and what you are reading causes distress on the eyes to try and read',(windowWidth/3), windowHeight/1.6);
 
 textSize(10);
 fill(0)
 textFont('Serif');
 textAlign(CENTER)
 text('this is a simulation and what you are reading causes distress on the eyes to try and read',(windowWidth/3), windowHeight/1.7);

 textSize(15);
 fill(0)
 textFont('Serif');
 textAlign(CENTER)
 text('this is a simulation and what you are reading causes distress on the eyes to try and read',(windowWidth/3), windowHeight/1.8);
 textSize(15);
 fill(0)
 textFont('Serif');
 textAlign(CENTER)
 text('this is a simulation and what you are reading causes distress on the eyes to try and read',(windowWidth/3), windowHeight/1.9);
 *\

  
  
   













    /*
    fill(255);
    circle(windowWidth/2, windowHeight/2, 800);
    
    
    textSize(100);
   textAlign(CENTER);
   // textStyle(ITALIC);
    textFont('Serif');
    fill(0);
    text('Hello World',(windowWidth/2), windowHeight/2);
    
    textSize(20);
    textAlign(CENTER);
    textFont('Georgia');
    fill(0);
    text('Enjoy Your Own.', (windowWidth/2), windowHeight/3);
    

    //Left Side
    fill(0);
    rect(0,0,windowWidth/12, windowHeight);
    fill(225);
    rect(windowWidth/12,0,windowWidth/12, windowHeight);
    fill(0);
    rect(windowWidth/6,0,windowWidth/12,windowHeight);
    fill(255);
    rect(windowWidth/4,0,windowWidth/12,windowHeight);
    fill(0);
    rect(windowWidth/3,0,windowWidth/12, windowHeight)
    fill(255)
    rect(windowWidth/2.4,0,windowWidth/12,windowHeight)


    //Right Side
    strokeWeight(0)
    fill(0)
    rect(windowWidth/2,0,windowWidth/2,windowHeight/6)
    fill(255)
    rect(windowWidth/2,windowHeight/6,windowWidth/2,windowHeight/6)
    fill(0)
    rect(windowWidth/2,windowHeight/3,windowWidth/2,windowHeight/6)
    fill(255)
    rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/6)
    fill(0)
    rect(windowWidth/2,windowHeight/1.5,windowWidth/2,windowHeight/6)
    fill(255)
    rect(windowWidth/2,windowHeight/1.2,windowWidth/2,windowHeight/6)
    */
    
    
  }



