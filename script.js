const start = document.getElementById("startStopbtn");
const reset = document.getElementById("resetbtn");

// Declaring some useful varibales
let seconds=0;
let minutes=0;
let hours=0;

let sec=0;
let min=0;
let hr=0;

let timerInterval= null;
let timerStatus= "stopped";



// function to run stopWatch
function stopWatch(){
     
    seconds++;

    if(seconds/60 === 1){
        seconds=0;
        minutes++
        if(minutes/60===1){
            minutes=0;
            hours++;
        }
    }

    if(seconds<10){
        sec= "0" + seconds.toString();
    }else{
        sec= seconds;
    }
    if(minutes<10){
        min= "0" + minutes.toString();
    }else{
        min= minutes;
    }
    if(hours<10){
        hr= "0" + hours.toString();
    }else{
        hr= seconds;
    }


    let display = document.getElementById("timer").innerText= hr + ":" + min + ":" + sec ;

}

// window.setInterval(stopWatch, 1);

start.addEventListener('click', function(){
   
   if(timerStatus === "stopped"){

       timerInterval = window.setInterval(stopWatch, 1000);
       start.innerHTML = `<i class= "fa-solid fa-pause" id ="pause"></i>`;
       timerStatus="started";
    }else {
        window.clearInterval(timerInterval);
        start.innerHTML=`<i class= "fa-solid fa-play" id ="play"></i>`;
        timerStatus="stopped";
    }

})

reset.addEventListener('click',function(){

    window.clearInterval(timerInterval);
    seconds=0;
    minutes=0;
    hours=0;

    document.getElementById("timer").innerHTML= "00:00:00";
})