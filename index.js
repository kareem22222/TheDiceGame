var ran = Math.random();
ran = Math.floor(ran*6+1);


document.querySelector(".img1").src ="./images/dice"+ran+".png"

var rand = Math.random();
rand = Math.floor(rand*6+1);

  document.querySelector(".img2").src ="./images/dice"+rand+".png"



if(ran === rand){
document.querySelector("h1").innerHTML = " DRAW";

}
else if(ran>rand)
{
  document.querySelector("h1").innerText = " Player 1 Is Winner";
}
else {
  document.querySelector("h1").innerText = " Player 2 Is Winner";
}
