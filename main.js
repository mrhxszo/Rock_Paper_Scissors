function computerPlay(){
    /*This function calculates the move of the computer*/ 
    let rand = Math.random();
    
    if (rand <= 0.33){
        return 0;//("ROCK")
    }
    
    else if(rand > 0.33 && rand >= 0.66 ){
        return 1;//("PAPER")
    }

    else{
        return 2;//("SCISSORS")
    }
    }

function playRound(selected){
    let a = computerPlay();
    let computerSelection;
    if (a == 0 ){
        computerSelection = 'Rock';
    }
    
    else if (a == 1 ){
        computerSelection = 'Paper';
    }
    
    else if (a == 2 ){
        computerSelection = 'Scissors';
    }

    /*This function calculates the winner in one round.*/
        div.classList.add("addeddiv");
        if ((selected + 1) % 3 == a){
            setTimeout( () => div.textContent= `I win! I choose ${computerSelection}`, 100) ;
            main.insertBefore(div, Images);
            return 1;
        }
    
        else if (selected == a){
            setTimeout( () => div.textContent= `It's a draw! I choose ${computerSelection}`, 100) ;
            main.insertBefore(div, Images);
            return 0;
        }
    
        else{
            setTimeout( () => div.textContent= `You win! I choose ${computerSelection}`, 100) ;
            main.insertBefore(div, Images);
            return -1;
        }
    }



function playerSelection(e){
    if (e.target.classList.value == 'rock'){
        return playRound(0);
    }   
    if (e.target.classList.value == 'paper'){
        return playRound(1);
    }
    if (e.target.classList.value == 'scissors'){
        return playRound(2);
    }

}
function game(e){
    /*this function calculates the winner in a best of five games and a tie breaker */
    if(gameCounter <= 4){
        score.classList.add("scorediv");
        main.after(score);
        let result = playerSelection(e);
        counter = counter + result;
        if (result === -1){
            player++;
            score.textContent= `You: ${player} Me: ${computer} `;
        }
        if (result === 1){
            computer++;
            score.textContent= `You: ${player} Me: ${computer} `;
        }
        else {
            score.textContent= `You: ${player} Me: ${computer} `;
        }
    }
    // this portion calculates the winner after 5 rounds.

    if(counter > 0 & gameCounter == 4){
        setTimeout( () =>div.textContent="I win this round!",1000);
        console.log(`loose counter ${counter}`);
        gameCounter++;
        return;
    }
    else if (counter < 0 & gameCounter == 4){
        setTimeout( () =>div.textContent="You win this round!",1000);
        console.log(`win counter ${counter}`);
        gameCounter++;
        return;
    }
    else if (gameCounter == 4 & counter == 0){
        setTimeout( () =>div.textContent="This round is a tie!",1000);
        console.log("Tie");
        gameCounter++;
        return;
    }
    else if (gameCounter > 4 ){
        div.textContent= "Hit replay!";
    }
    console.log(gameCounter);
    gameCounter++;
    return;
}

function replay(){
    gameCounter = 0;
    counter = 0;
    player = 0;
    computer = 0;
    score.textContent= `You: ${player} Me: ${computer} `;
    div.textContent = " ";
return;
}

function animation(h2){
    const strText = h2.textContent;
    const splitText = strText.split("");
    h2.textContent = "";

    for(let i = 0; i< splitText.length; i++){
        h2.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 100);

    function onTick(){
        const span = h2.querySelectorAll("span")[char];
        span.classList.add('fade');
        char++;
        if (char === splitText.length){
            complete();
            return;
        }
    }

    function complete (){
        clearInterval(timer);
        timer = null;
    }

    return;
    }


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const Images = document.querySelector(".Images")
const main = document.querySelector(".main");
const reset = document.querySelector('.Reset');
const h2 = document.querySelector(".h2");

const div = document.createElement('div');
const score = document.createElement("div");

let counter = 0 ;
let gameCounter =0;
let player = 0;
let computer = 0;
paper.addEventListener('click', game);
rock.addEventListener('click', game);
scissors.addEventListener('click', game);
reset.addEventListener('click', replay);

animation(h2);