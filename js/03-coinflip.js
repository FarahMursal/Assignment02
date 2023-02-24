let coinFlip = Math.round(Math.random())
let choice = prompt("Enter 'Heads' or 'Tails'");

if(coinFlip === 0){
    if(choice === 'Heads'){
        alert(" The flip was Heads and you chose Heads... YOU WIN!!!");
    }else{
        alert( "The flip was heads and you chose Tails... YOU LOSE!!!");
    }
}else{
    if(choice === 'Tails'){
        alert("The flip was tails but you chose heads...you lose!");
    }else{
        alert('The flip was tails and you chose tails...you win!');
    }
}