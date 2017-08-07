var osc = new OSC(),
  redbutton = document.getElementById('toggle_red');

redbutton.addEventListener('click', function(){
  console.log('red button clicked');
  var myMessage = new OSC.Message('/ShaderRedActivate', 127);
  console.log(myMessage);
  osc.send(myMessage);
});

osc.open();

osc.on('open', () => {
  console.log('osc open');
});
