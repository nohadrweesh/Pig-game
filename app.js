/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScores,activePlayer,gamePlaying,prevDice=-1;
init();
//Put func name or write the whole inst as anonymous func
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(gamePlaying){
           //random nmber
           var dice1=Math.floor((Math.random()*6)+1);
           var dice2=Math.floor((Math.random()*6)+1);
            //update img
           /* var diceDOM=document.querySelector(".dice");
            diceDOM.src= "dice-"+dice+".png";
            diceDOM.style.display="block";*/
        document.getElementById("dice-1").src="dice-"+dice1+".png";
        document.getElementById("dice-2").src="dice-"+dice2+".png";
        document.getElementById("dice-1").style.display="block";
        document.getElementById("dice-2").style.display="block";
        
            //update current score unless 1
        if(dice1 === 1||dice2===1){
                document.querySelector("#current-"+activePlayer).textContent='0';

               //change player
                changePlayer();

            }else{
                roundScores+=dice1+dice2;
                document.querySelector("#current-"+activePlayer).textContent= roundScores; 

            } 
        /*if(prevDice===6&&dice===6){
            //loses
            scores[activePlayer]=0;
            document.querySelector("#score-"+activePlayer).textContent='0';
            alert("You rolled the dice twice for 6 in a row!!You losses.")
            changePlayer();
        }
           else if(dice === 1){
                document.querySelector("#current-"+activePlayer).textContent='0';

               //change player
                changePlayer();

            }else{
                roundScores+=dice;
                document.querySelector("#current-"+activePlayer).textContent= roundScores; 

            } 
        prevDice=dice;*/
    }
    
    
});
//querSelector chooses the first element only
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gamePlaying){
            scores[activePlayer]+=roundScores;
            roundScores=0;
             document.querySelector("#score-"+activePlayer).textContent= scores[activePlayer];
        //winning score
        var winningScore,input;
        input=document.querySelector('.final-score').value;
        //undefined,null,0  -->corced to false
        if(input){
            winningScore=input;
        }else{
            winningScore=20;
        }
            //check winnner
            if(scores[activePlayer]>=winningScore){
                document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
                document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
                document.querySelector("#name-"+activePlayer).textContent="Winner";
                  document.getElementById("dice-1").style.display="none";
                  document.getElementById("dice-2").style.display="none";
                gamePlaying=false;
            }
            else{

            //change player
             changePlayer();
            }
    }
    
    
    
    
    
});
function changePlayer(){
    activePlayer=(activePlayer===0)?1:0;
        
        roundScores=0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    // document.querySelector(".player-1-panel").classList.add("active");
       // document.querySelector(".player-1-panel").classList.remove("active");
    document.getElementById("dice-1").style.display="none";
    document.getElementById("dice-2").style.display="none";
        
}
document.querySelector(".btn-new").addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScores=0;
    activePlayer=0;
    gamePlaying=true;
   /* finalScore=document.querySelector('.final-score').textContent;
    if(finalScore==="0"){
        alert("final score0");
        finalScore=100;
        document.querySelector('.final-score').textContent='100';
    }*/
    document.querySelector('.final-score').textContent="0";
    document.getElementById("dice-1").style.display="none";
    document.getElementById("dice-2").style.display="none";

    document.getElementById("score-0").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";
    
    document.getElementById("name-0").textContent="Player 1";
    document.getElementById("name-1").textContent="Player 2";
    
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    
    
    
    
}









