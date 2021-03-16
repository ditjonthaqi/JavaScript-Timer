export default class Timer {

    constructor(inputFiled, startButton, pauseButton, timeout) {
    
        this.inputFiled = inputFiled;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.timeout = timeout
       
        this.startButton.addEventListener('click', this.startTimer);
        this.pauseButton.addEventListener('click', this.pauseTimer);

        this.start = new CustomEvent('start',{
            detail: {
               duration:  this.inputFiled
            }
        });
        this.pause = new CustomEvent('pause');
        this.tick = new CustomEvent('tick');
  
    }

    startTimer = () => {

            document.dispatchEvent(this.start);
            this.tickTimer();
            this.interval =  setInterval(this.tickTimer, this.timeout );

    }

    tickTimer = () => {
        
        if(parseFloat(this.inputFiled.value) > 0) {
            document.dispatchEvent(this.tick);
            return this.inputFiled.value = ( parseFloat(this.inputFiled.value)  -  
                                                        this.timeout/1000 ).toFixed(2) ;
        }
        this.pauseTimer();

    }

    pauseTimer = () => {
      
        document.dispatchEvent(this.pause);
        clearInterval(this.interval);

    }

}