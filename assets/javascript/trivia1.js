//function for choosing a subject
//function for each subject
//4 subjects history, sports, music, geography
//3 questions for each 1
var html
var history =[]
var music =[  ]
var geography =[ ]
var subjects=["history","sports","music","geography"]

var questions = [
    {
        question: "Who was the 16th president?",
        answers: ["Roosevelt","Kennedy","Lincoln", "Skywalker"],
        correctAnswer: "Lincoln"
    
    },
    {
        question: "Who won the World Cup in 2002?",
        answers: ["Brazil", "Japan", " France", "Germany"],
        correctAnswer: "Brazil"
    
    },
    
    {
        question: "Who played played in the band Cream before he went solo?",
        answers: ["Sid Vicious"," Eric Clapton","Ronnie Wood", "Phil Collins"],
        correctAnswer: "Eric Clapton"
    
    },
    
    {
        question: "Budapest is the capital of?",
        answers: ["Romania"," Malaysia"," Hungary"," Indonesia"],
        correctAnswer: "Hungary"
    
    },
    

    ]

    for(let i = 0; i < questions.length ; i++) {
        console.log(questions[i].question);

        html += `
        <div class = container2>
        <div class="question${i+1}">
         <p class="question">${questions[i].question}</p>
         <input value="${questions[i].answers[0]}" name="answer_group${i+1}" type="radio">${questions[i].answers[0]}</input>
         <input value="${questions[i].answers[1]}" name="answer_group${i+1}" type="radio">${questions[i].answers[1]}</input>
         <input value="${questions[i].answers[2]}" name="answer_group${i+1}" type="radio">${questions[i].answers[2]}</input>
         <input value="${questions[i].answers[3]}" name="answer_group${i+1}" type="radio">${questions[i].answers[3]}</input>
        </div>
        </div>
    
    ` 
    document.body.innerHTML = html;
console.log(questions.answers);

    
    // if(questions[0].answers[2]=val.checked);
    //  alert("you got it") 
    
    }
    
    

    // if(questions[0].answers[2])// this is for Q 1 now to possibly figure out how to move on or set for all on pg
    // alert("you got it")
    
   
    




// var buttonNumber

// var select =document.querySelector("select");
// var output =document.querySelector("#output");
// select.addEventListener("change", function(){
//   var number=0;
//   for(var i=0; i<select.options.length;i++){
//     var options = select.options[i];
//     if(options.selected)
//     number += Number(options.value);
//   }
//   output.textContent=number;
//   if(number==4){
//     alert("you got it")
//   }
// });
      
    
        

