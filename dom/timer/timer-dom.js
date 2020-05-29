console.log("time to start the timer!");


const start = document.getElementById('start');
let date = new Date();


function timer(){ setInterval(function(){
    let time = 0;
    
    if(time>=0){
        let display = document.getElementById('display');
        display.innerHTML = time;
        console.log(time);
        time +=1;
    }
    

},1000);}