const max=100;
const min=50;
const rolldice = document.getElementById("rolldice");
const RB= document.getElementById("RB");
const diceresult = document.getElementById("diceresult");

let random;
//Math.trunc(Math.random()*(max-min)) + min;

rolldice.onclick= function(){
   random=Math.trunc(Math.random()*(max-min)) + min;
   diceresult.textContent=random;
}

RB.onclick= function(){
    random=0;
    diceresult.textContent=random;
 }
 /*nutral.onclick= function(){
    counting=0
     count.textContent=counting;
 }
let ranmub=Math.trunc(Math.random()*(max-min)) + min;
console.log(ranmub);*/
