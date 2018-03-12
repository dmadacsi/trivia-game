//function for choosing a subject
//function for each subject
//4 subjects history, sports, music, geography
//3 questions for each 1

var history =["Who was the 16th president?","Roosevelt","Kennedy","Lincoln",]
var sports =[ "Who won the Superbowl in 2002", "Brazil", "Japan", " France", "Germany"]
var music =[ "Who played played in the band Cream before he went solo?", " Sid Vicious"," Eric Clapton","Ronnie Wood", "Phil Collins"]
var geography =[ "Budapest is the capital of", " Romania"," Malaysia"," Hungary"," Indonesia"]
var subjects=["history","sports","music","geography"]
var buttonNumber

var select =document.querySelector("select");
var output =document.querySelector("#output");
select.addEventListener("change", function(){
  var number=0;
  for(var i=0; i<select.options.length;i++){
    var options = select.options[i];
    if(options.selected)
    number += Number(options.value);
  }
  output.textContent=number;
  if(number==4){
    alert("you got it")
  }
});
      
    
        

