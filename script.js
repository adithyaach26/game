let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const genComChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
     msg.innerText = "Game was Draw!";
     msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin, userChoice , comChoice) => {
    if(userWin){
        userScore++;
        userPara.innerText= userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compPara.innerText= compScore;
         msg.innerText = `You Lose! ${comChoice} beats ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = genComChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock") {
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice==="paper") {
            userWin = compChoice === "scissors"?false:true;
        }else{
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});