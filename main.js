var osc = new OSC(),
  redbutton = document.getElementById('toggle_red');

redbutton.addEventListener('click', function(){
  console.log('red button clicked');
  var imessage = new OSC.Message('/ShaderRedActivate', 127);
  osc.send(imessage);
});
