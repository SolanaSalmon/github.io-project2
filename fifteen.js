// extra feature added timer 
window.onload = function(){
  var puzzle = document.getElementById("puzzlearea");
  var pieces = puzzle.children; 
  var topPosition = 0; 
  var leftPosition = 0;
  var backgroundLeft = 0; 
  var backgroundTop = 0;
  var emptyTop = 300;
  var emptyLeft = 300; 
  var lastTop; 
  var lastLeft; 
  var shufflePieces; 
  var shuffleTimes = 400; 
 

  for(var i =0; i < pieces.length; i++){ 
  	pieces[i].addClassName ("puzzlepiece"); 
  	pieces[i].style.top = topPosition + "px"; 
  	pieces[i].style.left = leftPosition + "px"; 
  	pieces[i].style.backgroundPosition = backgroundLeft + "px " + backgroundTop + "px"; 

  	if(leftPosition < 300){ 
  		leftPosition = leftPosition + 100; 
  		backgroundLeft = backgroundLeft - 100; 
  	} 
  	else{ 
  		leftPosition = 0; 
  		backgroundLeft = 0; 
  		topPosition = topPosition + 100; 
  		backgroundTop = backgroundTop - 100; 
  	} 
  } 
  for ( i in pieces){ 
  	pieces[i].onclick=function(){ 
  		lastTop = parseInt(this.style.top); 
  		lastLeft = parseInt(this.style.left); 

  		if (lastTop == emptyTop && lastLeft == (emptyLeft-100) || 
  			lastTop == emptyTop && lastLeft == (emptyLeft+100) || 
  			lastTop == (emptyTop-100) && lastLeft == emptyLeft || 
  			lastTop == (emptyTop+100) && lastLeft == emptyLeft){
  			 this.style.top = emptyTop + "px"; 
  			 this.style.left = emptyLeft + "px"; 
  			 emptyTop = lastTop; 
  			 emptyLeft = lastLeft; 
  			} 
  		}; 

  		pieces[i].onmouseover=function(){ 
  			lastTop = parseInt(this.style.top); 
  			lastLeft = parseInt(this.style.left); 
  			if (lastTop == emptyTop && lastLeft == (emptyLeft-100) || 
  				lastTop == emptyTop && lastLeft == (emptyLeft+100) || 
  				lastTop == (emptyTop-100) && lastLeft == emptyLeft || 
  				lastTop == (emptyTop+100) && lastLeft == emptyLeft){ 
  				this.addClassName("movablepiece"); 
  		} 
  		else{ 
  			this.removeClassName("movablepiece");
  		} 
  	}; 
  } 
  $("controls").onclick = function Shuffle(){ 
  	for(var s = 0; s < shuffleTimes; s++){
  	 var picked = Math.floor (Math.random () * 4); 
  	 console.log(picked); 
  	 if ( picked == 0) { 
  	 	(getStyle((emptyTop-100)+"px", emptyLeft+"px")); 
  	 	lastTop = parseInt(shufflePieces.style.top); 
  	 	lastLeft = parseInt(shufflePieces.style.left); 
  	 	shufflePieces.style.top = emptyTop + "px"; 
  	 	shufflePieces.style.left = emptyLeft + "px"; 
  	 	emptyTop = lastTop; emptyLeft = lastLeft; 
  	 } 
  	 else if ( picked == 1) { 
  	 	(getStyle(emptyTop+"px", (emptyLeft-100)+"px")); 
  	 	lastTop = parseInt(shufflePieces.style.top); 
  	 	lastLeft = parseInt(shufflePieces.style.left); 
  	 	shufflePieces.style.top = emptyTop + "px"; 
  	 	shufflePieces.style.left = emptyLeft + "px"; 
  	 	emptyTop = lastTop; 
  	 	emptyLeft = lastLeft; 
  	 } 
  	 else if ( picked == 2) {
  	  getStyle((emptyTop+100)+"px", emptyLeft+"px"); 
  	  lastTop = parseInt(shufflePieces.style.top); 
  	  lastLeft = parseInt(shufflePieces.style.left); 
  	  shufflePieces.style.top = emptyTop + "px"; 
  	  shufflePieces.style.left = emptyLeft + "px"; 
  	  emptyTop = lastTop; 
  	  emptyLeft = lastLeft; 
  	} 
  	else {
  	 getStyle(emptyTop+"px", (emptyLeft + 100)+"px"); 
  	 lastTop = parseInt(shufflePieces.style.top); 
  	 lastLeft = parseInt(shufflePieces.style.left); 
  	 shufflePieces.style.top = emptyTop + "px"; 
  	 shufflePieces.style.left = emptyLeft + "px"; 
  	 emptyTop = lastTop; emptyLeft = lastLeft; 
  	} 
  } 
}; 
function getStyle(top, left){ 
	for(var i =0; i < pieces.length; i++){
	 if(pieces[i].style.top==top && pieces[i].style.left==left){
	  shufflePieces = pieces[i]; 
	  return shufflePieces; 
	  } 
	} 
	
} 
var seconds = 0;
var minutes = 0;
var timeCheck = document.getElementById("w3c");
timeCheck.innerHTML = "00:00";

    function updateTime(){
        if(seconds == 59){
            minutes++;
            seconds = 0;
        } 
        else {
        seconds++;
        }
        if(seconds<10){
        timeCheck.innerHTML = minutes + ':0' + seconds;
        } 
        else {
        timeCheck.innerHTML = minutes + ':' + seconds;
        }   
    }
window.setInterval(updateTime, 1000);
var timeTracker = setInterval(startTimer, 1000);
    function startTimer() {
        var date = new Date();
        document.getElementById().innerHTML = date.toLocaleTimeString();
}
window.clearInterval(updateTime);
timeTracker = setInterval(updateTime, 5000);
clearInterval(timeTracker);
};