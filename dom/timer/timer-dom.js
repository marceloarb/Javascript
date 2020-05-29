console.log("time to start the timer!");


const start = document.getElementById('start');



function timer(){
    let second = 0;
    second += 1;
    let display = document.getElementById('display');
    display.innerHTML = second++;

}