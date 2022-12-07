//Declaring my variables and array
let facts = ['Rubber bands will last much longer when they are refrigerated.','There are 293 ways to make change for a dollar.','The Grand Theft Auto franchise has lawsuits that total over $1 billion.','The eye of an ostrich is bigger than its brain.','A dime has 118 ridges on its edge.','The largest pair of eyes in the world belongs to the giant squid.','Japan has 23 vending machines per person.','Soccer balls were once used for playing basketball.','Putting sugar on a cut will make it heal faster.','April 11, 1954, was recorded as the most boring day in the world.','Buttermilk does not contain any butter.','Brunch was invented as a way of curing hangovers.','There are fewer stars than there are trees on Earth.','Children are born less frequently on Saturdays.','75 burgers are sold in McDonald’s every second.','You can’t hum while holding your nose.','Your eyeballs do not grow or change their size as you age.']; //Facts gathered from https://facts.net/random-facts/
//Setting r,g,b to 255 to use in random
let r = 255;
let g = 255;
let b = 255;
//setting counters to 0 which will later be turned into 1 if a specific action is taken
let circlecount = 0;
let squarecount = 0;
let rectanglecount = 0;
let linecount = 0;
let redcount = 0;
let greencount = 0;
let bluecount = 0;
let orangecount = 0;
let yellowcount = 0;
let purplecount = 0;
let count = 0;


function setup() {
createCanvas(600, 600);
}

//Calling functions I made
function draw() { 
  format(); 
  circles();
  squares();
  rectangles();
  lines();
  colors();
}

//Function used as the first format which uses rectangles to allow the setup to change based on which section is clicked 
function format(){ 
  background(120,160,140); // Background is green
  textSize(22); // Text size is 22
  fill(255); // White fill for text
  strokeWeight(4); //Stroke weight of 4
  text('Select which shapes/forms you want', 120, 80); //Text informing user
  fill(255); //Setting fill to white
  textSize(20); //Setting textsize to 20
  text('Click to continue to colors', 180, 530); //Text informing user
  } // End of function

//Function created to allow user to select which color they want
function colors(){ 
if(mouseIsPressed && mouseX < 400 && mouseX > 180 && mouseY < 540 && mouseY > 510){
  noLoop();
background(50,80,90);
fill(255);
textSize(20);
strokeWeight(0);
text('Select which colors you want', 150, 100); 
text('(R)ed', 100, 200);
//Red square
fill(255,0,0);
rect(70,184,20,20);
fill(255);
text('(B)lue', 100, 300); 
//Blue square
fill(0,0,255);
rect(70,284,20,20);
fill(255);
text('(G)reen', 100, 400); 
//Green square
fill(0,255,0);
rect(70,384,20,20);
fill(255);
text('(O)range',400, 200);
//Orange square
fill(250,170,30);
rect(370,184,20,20);
fill(255); 
text('(Y)ellow',400, 300); 
//Yellow square
fill(250,245,12);
rect(370,284,20,20);
fill(255); 
text('(P)urple',400, 400); 
//Purple square
fill(130,30,200);
rect(370,384,20,20);
fill(255); 
text('Press each letter for the colors you pick',110, 500);   
text('Press c to continue to see your art',120, 550);   
}
}  

//Key function used for selecting which color was choosen based on the key pressed
function keyTyped() {
  noLoop();
if (key === 'r') {
  redcount = 1;
}
if(key == 'b'){
   bluecount = 1;
}
if(key == 'g' ){
   greencount = 1;
}
if(key ==  'o'){
   orangecount = 1;
}
if(key == 'y' ){
   yellowcount = 1;
}
if(key == 'p'){
   purplecount = 1;
}
  
//Continue key to move onto the random art page
if(key == 'c'){
  background(random(r),random(g),random(b));
  count = 1;
  randomart();
  fill(255);
  textSize(15);
  text(random(facts), 100, 480);
}
}

//Function for keeping count if circle was choosen
function circles(){ 
  noFill();
  ellipse(100,200,80,80)
   if(mouseIsPressed && mouseX < 140 && mouseX > 60 && mouseY < 240 && mouseY > 160){ // If statment making sure it's inside the limitations
     circlecount = 1;
   }
}

//Function for keeping count if square was choosen
function squares(){
  noFill();
  rect(400,160,80,80);
  if(mouseIsPressed && mouseX < 480 && mouseX > 400 && mouseY < 240 && mouseY > 160){// If statment making sure it's inside the limitations
    squarecount = 1;
  }  
}

//Function for keeping count if rectangle was choosen
function rectangles(){
  noFill();
  rect(60,380,120,80)
  if(mouseIsPressed && mouseX < 180 && mouseX > 60 && mouseY < 460 && mouseY > 380){ // If statment making sure it's inside the limitations
  rectanglecount = 1;
  }  
}

//Function for keeping count if line was choosen
function lines(){ 
  strokeWeight(10);
  line(400,380,480,450);
  if(mouseIsPressed && mouseX < 500 && mouseX > 390 && mouseY < 470 && mouseY > 380){ // If statment making sure it's inside the limitations
    linecount = 1;
  } 
}

//Function for creating randomized art based on the users input
function randomart(){
//Checking if c and square were selected
if(count == 1 && squarecount == 1){
noLoop();
//Checking if red was selected
if(redcount == 1){
fill(random(100,250),random(10),random(20));
}
//Checking if purple was selected
else if(purplecount == 1){
fill(random(46,170),random(10,20),random(70,140));
}
//Randomizing placement and size
rect(random(200,300),random(200,300),random(20,50),random(20,50));  
rect(random(100,200),random(100,200),random(70),random(25));  
}  
  
//Checking if c and circle were selected
if(count == 1 && circlecount == 1){  
noLoop();
//Checking if blue was selected
if(bluecount == 1){
fill(random(10),random(10),random(100,250));
}
//Checking if yellow was selected
else if(yellowcount == 1){
fill(random(170,190),random(170,190),random(20,30));
}  
//Randomizing placement and size
ellipse(random(100,500),random(100,500),random(20,50),random(10,20));  
ellipse(random(100,500),random(100,500),random(50,70),random(50,70));   
}
  
//Checking if c and rectangle were selected
if(count == 1 && rectanglecount == 1){  
noLoop();
//Checking if green was selected
if(greencount == 1){
fill(random(10),random(100,250),random(10));
}
//Randomizing placement and size
rect(random(100,500),random(100,500),random(100,150),random(70));  
rect(random(100,500),random(100,500),random(90,150),random(70));   
}
  
//Checking if c and line were selected
if(count == 1 && linecount == 1){  
noLoop();
//Checking if orange was selected
if(orangecount == 1){
strokeWeight(5);
stroke(random(190,250),random(140,170),random(20));
}
//Randomizing placement and size
line(random(400),random(380),random(480),random(450));
line(random(50),random(60),random(80),random(80));   
}
}