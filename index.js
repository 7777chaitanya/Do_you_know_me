console.log("Heyo friend! Welcome to Chaitanya's quiz challenge");
console.log("------------------------------------------------------");
var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please enter your name here to view the questions: ")
console.log();

welcome_statement = userName+", answer all the 3 questions correctly to grab a chance to position yourself in the leaderboard!"
console.log(welcome_statement+"\n");



var score = 0;
var leaderBoard = ["Kishore","Venkat"];

//questions and options
var q1 = "What is Chaitanya's favorite color?\n1)blue\n2)orange\n3)green\n";

var q2 = "Who is Chaitanya's rolemodel?\n1)Steve Jobs\n2)David Goggins\n3)Linus Torvalds\n"

var q3 = "What designation does Chaitanya want to land into?\n1) Software Developer\n2) Data Scientist\n3) Front End Engineer\n"



//array of objects with correct options stored as values
var questions = [{question:q1,answer:1},{question:q2,answer:3},{question:q3,answer:3}];

for(var i=0;i<questions.length;i++){
  questions[i].question;
  var userAnswer = readlineSync.question(questions[i].question);
  if(userAnswer == questions[i].answer){
    console.log("Woohooo! That's the right Answer!!")
    score++;
  }
  else{
    console.log("That's a wrong answer.");
    score--;
  }
  console.log();
}

console.log("Your score is "+score);


if(score === 3){
  leaderBoard.push(userName);
  console.log("Congratulations "+userName+", You occupied a place in the Mega Quiz Leaderboard!\n");
}
else{
  console.log("You did not score enough to occupy the Leaderboard, "+userName+"\n");
}
console.log("-----------------CURRENT LEADERBAORD----------------")
if(leaderBoard.length!=0)
{
  for(let i=0;i<leaderBoard.length;i++){
    console.log((i+1)+") "+leaderBoard[i])
  }
}