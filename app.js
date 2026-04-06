let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let high=0;

btns=['b1','b2','b3','b4'];
body=document.querySelector("body");
highscore=document.querySelector(".highscore");
allbtn=document.querySelectorAll("button");
for (btn of allbtn){
    btn.addEventListener("click",btnPress)
}

btn=document.querySelectorAll("button");
h1=document.querySelector("h4");
document.addEventListener("keypress", function(){
    if (start==false){
        levelUp();
        start=true;
    }   
});

function levelUp(){
    userSeq=[];
    level++;

h1.innerText=`Level ${level}`;

rand=Math.floor(Math.random()*4);
randclass=btns[rand];
randbtn=document.querySelector(`.${randclass}`)
gameSeq.push(randclass)
flash(randbtn);

}
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },100 );
}

function btnPress(){
    btn=this;
    flash(btn);  
    userclass=btn.getAttribute("id");
    userSeq.push(userclass);
check(userSeq.length-1);
}
function check(index){

if(userSeq[index]==gameSeq[index]){
    if (userSeq.length==gameSeq.length){
        setTimeout(levelUp, 1000)
    }

}
else{
    h1.innerText=`Game Over! Score: ${level}`
    if (level>high){
    high=level;
    highscore.innerText=`High Score: ${high}`;
h1.innerText=`Game Over! Score: ${level} New High Score:${high}`}
    body.style.backgroundColor="red";
    setTimeout(function(){
        reset();
        body.style.backgroundColor="white";
        h1.innerText="Press any key to start";
        
    },2000)
    
}
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
