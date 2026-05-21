let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let msgBox=document.querySelector(".msg-container");

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
   
   
}
const drawGame=()=>{
    msg.innerText="Game was a draw, Play again!";
    msg.style.backgroundColor="#1e3888";
    
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("Computer win");
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="#9C3848";
    }
}
const playGame=(userChoice)=>{
    // console.log("User choice=",userChoice)
   const compChoice=genCompChoice();
    // console.log("Computer choice=",compChoice);
    if(userChoice===compChoice)
    {
        // console.log("draw");
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
        }
       else   {  
        userWin=compChoice==="rock"?false:true;
       }
    
   showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
