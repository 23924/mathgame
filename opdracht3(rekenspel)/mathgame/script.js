window.addEventListener("load",loaded,false);

function loaded(){
	var container = document.getElementById("container");
	var myAssignment = document.getElementById("myAssignment");
	var myAnswer = document.getElementById("myAnswer");
	var feedback = document.getElementById("feedback");
	var mySum;
  var score = 0;
  var scoreNummer = document.getElementById("scoreNummer");
  var tijden = [];
  var timer = document.getElementById("timer");

	function init(){
		var a = Math.floor(Math.random()*9+1);
		var b = Math.floor(Math.random()*9+1);
    var c = Math.floor(Math.random()*3+1);
    var d = Math.floor(Math.random()*5+1);
    var e = Math.floor(Math.random()*5+6);
    if(c==1) {  mySum = a + " * " + b;}
    if(c==2) {  mySum = a + " + " + b;}
    if(c==3) {  mySum = e + " - " + d;}

		myAssignment.innerHTML = mySum;
		myAnswer.focus();
	}
	init();

	myAnswer.addEventListener("keydown",keyPressed,false);

	function keyPressed(evt){
		if(evt.keyCode == 13)
		{
			if(eval(mySum) == myAnswer.value){
				feedback.src = "normaalversie/goed.png";
        container.style.backgroundColor="green";
        score = score + 1;

			} else {
				feedback.src = "normaalversie/fout.png";
        container.style.backgroundColor="red";
				score = score -1;
			}

		window.setTimeout(waiting,400);

		}
	}

	function waiting(){
		feedback.src = "normaalversie/placeholder.jpg";
    container.style.backgroundColor="orange";
		myAnswer.value ="";
    scoreNummer.innerHTML = score;
    timer.innerHTML = timer;
		init();
	}

}
