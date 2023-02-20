//your code here
var butt=document.getElementById("btn")
butt.addEventListener('click',guessNum)
var val=document.getElementById("num")
var guess=document.getElementById("guess")
var responce=document.getElementById("respond")
function guessNum() {
	var random=Math.floor(Math.random()*40)-20
	val.innerText=random
	if (Math.abs(Number(guess.value)-Number(random))<=5) {
		responce.innerText="Hot"
	}
	else responce.innerText="Cold"
}
