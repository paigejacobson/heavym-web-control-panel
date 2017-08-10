var osc = new OSC();

var sliderlist = ['Red', 'Green', 'Blue', 'Contraste', 'Convergence', 'Twist', 'Glow', 'clear']
var buttonlist = ['RedActivate','GreenActivate','BlueActivate','ContrasteActivate','ConvergenceActivate','TwistActivate', 'GlowActivate'];

// loop through list of all sliders to generate a message for each
for (var i = 0; i < sliderlist.length; i++){
  var element = sliderlist[i];
  var message = '/Shader' + element;
  activateOscMessageSlider(element, message);
}

// loop through list of all buttons to generate a message for each
for (var i = 0; i < buttonlist.length; i++){
  var element = buttonlist[i];
  var message = '/Shader' + element;
  activateOscMessage(element, message);
}

/*
  function to listen for event types that trigger
  changes to the slider value, then send an OSC
  message with that new value

  the function should be able to take multiple
  event types, and should be able to address the
  rest of the components in the control object
  without having to reference them by ID
*/
function activateOscMessageSlider(button, message){
    var slider = document.getElementById(element);
    var spanid = element + '_span';
    var span = document.getElementById(spanid);
    slider.addEventListener('input', function(){
      span.innerHTML = slider.value;
      console.log('slider activated');
      var myMessage = new OSC.Message(message, parseInt(slider.value));
      console.log(myMessage);
      osc.send(myMessage);
    })
  }

/*
  function to listen for event types that trigger
  a shader activation, then send the osc message
*/
function activateOscMessage(button, message){
    var button = document.getElementById(element);
    button.addEventListener('click', function(){
      console.log('shader activated');
      var myMessage = new OSC.Message(message, 127);
      console.log(myMessage);
      osc.send(myMessage);
    })
  }

activateOscMessageClear('Clear', sliderlist);


function activateOscMessageClear(id, sliderlist){
  var clear = document.getElementById(id);
  clear.addEventListener('click',function(){
    for (var i = 0; i < sliderlist.length; i++){
      var element = sliderlist[i];
      var message = '/Shader' + element;
      var myMessage = new OSC.Message(message, 0);
      osc.send(myMessage);
    }
  })
}

osc.open();

osc.on('open', () => {
  console.log('osc open');
});
