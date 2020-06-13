var number=4;
var guess=prompt("Guess the secret number(from 1 to 10): ")
if(guess==number){
    alert("Bingo! Correct Answer!")
}else if(guess+1==number){
    alert("Close Enough to Correct answer")
}