document.addEventListener("DOMContentLoaded", e => {
    let me = {};
    
    me.button = document.querySelector(".control-panel__button");
    me.timeOutput = document.querySelector(".monitor__timer-out");
    me.countOutput = document.querySelector(".monitor__count-out");
    
    me.firstClick = true;
    me.timeIsOver = false;
    me.counter = 0;
    me.time = 0;

    me.button.addEventListener("click", e => {
        
        if(me.firstClick){
            me.firstClick = false;
            me.start();
        }

        if(!me.timeIsOver){
            me.counter++;
            me.countOutput.innerHTML = me.counter;
        }

    });
    
    me.start = function(){
        let timerId = setInterval(e => {
            
            me.time++;
            me.timeOutput.innerHTML = me.time + " s"; 
            if(me.time == 10){
                clearInterval(timerId);
                me.timeIsOver = true;
                return;
            }

            
        }, 1000);               
    }

    



   
   
});