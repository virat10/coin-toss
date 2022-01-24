


var randomNumber1 = Math.floor(Math.random()*2) + 1;


if(randomNumber1==1)
{
  document.querySelector("h1").innerHTML = "Heads!!";
  document.querySelector("h1").style.fontSize= "7rem";
  document.querySelector(".tmp2").style.display= "none";

}
else
{
  document.querySelector("h1").innerHTML = "Tails!!";
  document.querySelector("h1").style.fontSize= "7rem";
  document.querySelector(".tmp1").style.display= "none";

}
