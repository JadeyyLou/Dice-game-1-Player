let rollButton = document.getElementById("roll");
let restartBtn = document.getElementById("restartBtn");
const image = document.getElementById("image");
const winner = document.getElementById("winnerText");
const loser = document.getElementById("loserText");

let diceImg = {
	1:"dice/1.png",
	2:"dice/2.png",
	3:"dice/3.png",
	4:"dice/4.png",
	5:"dice/5.png",
	6:"dice/6.png",
}



const maxScore = 20;
let currentScore = 0;
let roll = 0;



winner.style.display = "none";
loser.style.display = "none";
restartBtn.style.display = "none";
rollButton.style.display = "block";




rollButton.addEventListener("click", () => {
	
let roll = Math.floor(Math.random() *6 +1);
        image.src = diceImg[roll];
		currentScore += roll;
		playerOneScore.textContent = currentScore;

 if (currentScore >= maxScore){
		playerOneScore.textContent = `${currentScore} YOU WIN!`;
		winner.style.display = "block"
		rollButton.style.display = "none";
		restartBtn.style.display = "block";
		score = 0;

} else if (roll == 1){
		playerOneScore.textContent = `${roll} YOU LOSE, TRY AGAIN`;
		loser.style.display= "block";
		rollButton.style.display = "none";
	    restartBtn.style.display = "block";
		score = 0;
	}
});

restartBtn.addEventListener("click",() =>{
	window.location.reload()
})











