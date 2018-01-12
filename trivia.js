var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===3){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===4){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===5){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===6){
    y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===7){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===8){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===9){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
}
if (ans===10){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
        new Audio('right.mp3').play()
        document.getElementById("imgr").style.visibility="visible"
        document.getElementById("imgw").style.visibility="hidden"
    }
    else {
        document.getElementById("question").value="You are wrong"
        new Audio('wrong.mp3').play()
        document.getElementById("imgw").style.visibility="visible"
        document.getElementById("imgr").style.visibility="hidden"
    }
    document.view.qscore.value=score
} 
ans++
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="How often are the Modern Olympic Games held?\na)2 \nb)4 \nc)5 \nd)8";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Where did the first Modern Olympic Games held? \na)America \nb)Britain \nc)Canada \nd)Greece";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one is not the Olympic spirit? \na)stronger \nb)faster \nc)better \nd)higher";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one is the most popular sport in the world? \na)Football \nb)Basketball \nc)Volleyball \nd)Badminton";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Where the Table Tennis come from? \na)Germany \nb)British \nc)America \nd)China";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one is the world record for 100m sprint? \na)9.79s \nb)9.69 \nc)9.71s \nd)9.75s";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is “The father of the Olympic Games”? \na)Killanin\nb)Vikelas \nc)Coubertin \nd)Samaranch";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is the first president for IOC? \na)Killanin \nb)Vikelas \nc)Coubertin \nd)Samaranch";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one is a track? \na)Long Jump\nb)High Jump \nc)1000m Run \nd)shot put";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many bones are a Normal adult have? \na)206\nb)208 \nc)212 \nd)202";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
}
i++
}


