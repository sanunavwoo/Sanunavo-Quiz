var readLineSync= require("readline-sync");

function welcome(){
  var outputName= readLineSync.question("Please tell us your name: ");
  var fixedOutputName= outputName.slice(0,1).toUpperCase() + outputName.slice(1,).toLowerCase(); 
  console.log("Welcome "+fixedOutputName+" to DO YOU KNOW SANU?");
}
var score=0;
var highScores= [
  {
    name1: "Jags",
    scored: "3"
  },
  {
    name1: "Rishi",
    scored: "3"
  }
];

var questionsArr= [

  {
      question: "What is my favourite sport?",
      answer: "football"
  },
  
  {
    question: "What is my favourite hobby?",
    answer: "guitar"
  }, 
  {
    question: "Where do I live",
    answer: "kolkata"
  }

];
function game(){
  for(var i=0; i<questionsArr.length; i++)
  {
  
    var userAnswer= readLineSync.question(questionsArr[i].question +"\n");
    if((userAnswer.toLowerCase())===questionsArr[i].answer){
      score=score+1;
      console.log("That's Right!!")
      console.log("Score: "+score);
    }
    else{
      /// Something
      console.log("That's not right");
    }
  }
  console.log("=====================");
  console.log("\n\nYour Score: "+score);
  
}



function showAllScores(){
  console.log("\nAll High Scores\n");
  highScores.map(i=>console.log("Name: "+i.name1+"\nScored: "+i.scored))
  
}


welcome();
game();
showAllScores();
