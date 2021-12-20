
function countdowntimer(){
var future=new Date('December 27,2021 00:00:00').getTime();
var now=new Date().getTime();


let second=1000;
let minute=second*60;
let hour=minute*60;
let day=hour*24;

 let diff=future-now;

 let days=Math.floor(diff/day);
 let hours=Math.floor((diff % day)/hour);
 let minutes=Math.floor((diff % hour)/minute);
 let seconds=Math.floor((diff % minute)/second);

 document.getElementById('days').innerHTML=days;
 document.getElementById('hours').innerHTML=hours;
 document.getElementById('minutes').innerHTML=minutes;
 document.getElementById('seconds').innerHTML=seconds;

 
}

setInterval(countdowntimer,1000);