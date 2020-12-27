const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const userChoice = document.querySelector('.user-choice');
const cpuChoice = document.querySelector('.cpu-choice');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
let userScore=0;  
let cpuScore=0;

function CPU() {
    const options = ['rock','paper','scissor'];
    num = Math.floor(Math.random()*3);
    cpuChoice.innerHTML = `cpu choice: ${options[num]}`;
    return options[num];
}

function win(){
    result.innerHTML = `you win!!!`;
    userScore++;
    score.innerHTML = `${userScore}:${cpuScore}`
}
function lose(){
    result.innerHTML = `You lose!!!`;
    cpuScore++;
    score.innerHTML = `${userScore}:${cpuScore}`
}
function draw(){
    result.innerHTML = `It's a draw`;
    score.innerHTML = `${userScore}:${cpuScore}`

}

function resultCard(x){
    const opponent = CPU();
    switch(x + opponent) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            draw();
            break;
        case 'rockpaper':
        case 'scissorrock':
        case 'paperscissor':
            lose();
            break;
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win();
            break;
    }
}
rock.addEventListener('click',()=>{
    userChoice.innerHTML = `user choice: rock`
    user = 'rock';
    resultCard(user);
});
paper.addEventListener('click',()=>{
    userChoice.innerHTML = `user choice: paper`
    user = 'paper';
    resultCard(user);
});
scissor.addEventListener('click',()=>{
    userChoice.innerHTML = `user choice: scissor`
    user = 'scissor';
    resultCard(user);
});


