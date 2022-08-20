let imgrock;
let imgpaper;
let imgscissors;

let last_p1_move = "FORTNITE"
let last_ai_move = "FORTNITE"
let textout = ""

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
}

function ai_next_move(p1) {
    //if (p1 == "FORTNITE"){
      t = randomNum(1,4)
      if (t == 1){
        return "r"
      }
      if (t == 2){
        return "p"
      }
      if (t == 3){
        return "s"
      }
    //}
    //if (p1 == "r"){
    //    return "p";
    //}
    //if (p1 == "p"){
    //    return "s";
    //}
    //if (p1 == "s"){
    //    return "r";
    //}
}

function setup() {
  createCanvas(600, 400);
  imgrock = createImg('rock.jpg');
  imgrock.position(0,50);
  imgrock.size(200,200)
  imgrock.mousePressed(function() { rpslogic("r");});
  imgpaper = createImg('paper.jpg');
  imgpaper.position(200,50);
  imgpaper.size(200,200)
  imgpaper.mousePressed(function() { rpslogic("p");});
  imgscissors = createImg('scissors.jpg');
  imgscissors.position(400,50);
  imgscissors.size(200,200)
  imgscissors.mousePressed(function() { rpslogic("s");});
}

function draw() {
  background(220);
  textSize(32);
  text('Click one', 240, 30);
  textSize(20);
  text(textout, 180, 300);
}

function rpslogic(item) {
  choice = item
  ai = ai_next_move(last_p1_move);
  textout = "";

  textout += "you chose " + choice + " ai chose " +ai;

  if (choice == "r" && ai == "s" || choice == "p" && ai == "r" || choice == "s" && ai == "p"){
      textout += " - You win!"
  }

  if (ai == "r" && choice == "s" || ai == "p" && choice == "r" || ai == "s" && choice == "p"){
      textout += " - You lose!"
  }
  if (choice == ai){
      textout += " - Tie!"
  }

  last_p1_move = choice
  last_ai_move = ai
  console.log(textout);
}