const randomNum1 = Math.floor(Math.random() * (7 - 1) + 1);
const randomNum2 = Math.floor(Math.random() * (7 - 1) + 1);

document.querySelector(".img1").src = `images/dice${randomNum1}.png`;
document.querySelector(".img2").src = `images/dice${randomNum2}.png`;

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
