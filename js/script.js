function getRandomColor(){
    var letters="0123456789ABCDEF".split('');
    var color="#";
    for (var i=0; i < 6; i++){
        color+=letters[Math.round(Math.random()*15)];

    }

    return color;


}

var makeBoxOut;

setTimeout(function() {
    clearTimeout(makeBoxOut);
    document.getElementById("Box").style.display="none";
    document.getElementById("result").style.display="block";
    document.getElementById("tryagain").style.display="block";
    alert('Game Over');

},15000);

var clickedTime; var createdTime; var reactionTime;
var score=0; var difficult=1; var point=100; var fault=0; var bestResult1=10; var bestResult2=10; var point=50; var difficult=2; var fault=50; var difficult=3;

function makeBox() {
    var time=Math.random();
    time=time*2500;
    makeBoxOut = setTimeout(function() {

        if (Math.random()>0.5) {
            document.getElementById("Box").style.borderRadius="100px";

        }  else{

            document.getElementById("Box").style.borderRadius="0";

        }

        var top=Math.random();
        top=top*300;
        var left=Math.random();
        left=left*500;

        document.getElementById("Box").style.top=top+"px";

        document.getElementById("Box").style.left=left+"px";

        document.getElementById("Box").style.backgroundColor=getRandomColor();

        document.getElementById("Box").style.display="block";

        createdTime=Date.now();

    },time);

}

document.getElementById("Box").onclick=function(){

    clickedTime=Date.now();

    reactionTime=(clickedTime-createdTime) / 1000;

    document.getElementById("time").innerHTML=reactionTime;

    this.style.display="none";

    makeBox();

    bestResult1=reactionTime;

    if (bestResult2 > bestResult1) {
        bestResult2=bestResult1;
    }

    if ((difficult==1 && reactionTime>4) || (difficult==2 && (reactionTime > 2 && reactionTime <3))) {
        score=score;

    }

    else if (difficult==2 && reactionTime> 3) {
        score=score - fault;

    }


    else if(difficult==3 && reactionTime > 1) {
        score=score - fault;

    }

    else{
        score =score + point;

    }

    document.getElementById("score").innerHTML=score;

    if (score===0) {

        document.getElementById("bestresult").innerHTML=bestResult2;

        document.getElementById("result").style.display="block";

        document.getElementById("tryagain").style.display="block";

        document.getElementById("Box").style.display="none";

        document.getElementById("border").style.display="none";



    }

}

document.getElementById("easy").onclick=function() {

    point=100;
    difficult=1;
    fault=0;

    document.getElementById("easy").style.backgroundColor="white";

    document.getElementById("medium").style.backgroundColor="blue";

    document.getElementById("hard").style.backgroundColor="blue";

} ;

document.getElementById("medium").onclick=function() {

    point=100;
    difficult=2;
    fault=50;

    document.getElementById("easy").style.backgroundColor="blue";

    document.getElementById("medium").style.backgroundColor="white";

    document.getElementById("hard").style.backgroundColor="blue";


} ;

document.getElementById("hard").onclick=function() {

    point=50;
    difficult=3;
    fault=50;

    document.getElementById("easy").style.backgroundColor="blue";

    document.getElementById("medium").style.backgroundColor="blue";

    document.getElementById("hard").style.backgroundColor="white";

} ;
makeBox();


document.getElementById("titleButton").onclick=function(){

    alert("Click on the circle or square created as fast as you can! Difficulties are varied.")

}

document.getElementById("tryagain").onclick=function() {

    location.reload();

};