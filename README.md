# JavaScript-Timer
Event Driven timer for JavaScript 

#Usage
Create an instance of Timer Class and pass this 4 parameters to the contstuctor:
  1.Input Tag object  - for getitng  the duration
  2.Start Button tag - for starting the timer 
  3.Pause Button tag - for pausing the timer
  4.timeout - numebr
 
#Important

3 Events are added to the DOM (document)
  1.start
  2.pause
  3.tick

You can listen for these events just like this

document.addEventListener('start', (e) => {
    console.log('started');
})


document.addEventListener('pause', (e) => {
    console.log('paused');
})


document.addEventListener('tick', (e) => {
    console.log('ticked');
})


Why events?
When this events are triggered you can extend the app for animations etc

Timeout
This can be thought as the number of ticks (fps in animation for example)
