var osc = new OSC(),
  redbutton = document.getElementById('toggle_red');

redbutton.addEventListener('click', function(){
  console.log('shader activated');
  var myMessage = new OSC.Message('/ShaderRedActivate', 127);
  console.log(myMessage);
  osc.send(myMessage);
});

var slider1 = document.getElementById('slider1');
var span1 = document.getElementById('span1');

slider1.addEventListener('input', function(){
  span1.innerHTML = slider1.value;
})

/*
  function to listen for event types that trigger
  changes to the slider value, then send an OSC
  message with that new value

  the function should be able to take multiple
  event types, and should be able to address the
  rest of the components in the control object
  without having to reference them by ID
*/

/*
  function to listen for event types that trigger
  a shader activation, then send the osc message
*/

osc.open();

osc.on('open', () => {
  console.log('osc open');
});
