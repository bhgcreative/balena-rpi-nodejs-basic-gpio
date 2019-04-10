var  ledToggle, pressCount;
//provision the gpio pins 13 for the led output and 18 for the button input
var led= require("pi-pins").connect(13),
    button = require("pi-pins").connect(18);

//set the pin mode,  setting pin 13 as an output and 18 as an input
button.mode('in');
led.mode('out');

//set the initial value of the LED to be off.
ledToggle = false;
pressCount= 0;
led.value(true);

//look for a button press event and switch on the LED for 2 seconds when this happens.
button.on('rise', function () {
    console.log("button pressed: "+ (++pressCount) +" time(s)");
    ledToggle = !ledToggle;
    led.value(ledToggle);
});
