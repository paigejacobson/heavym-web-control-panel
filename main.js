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


osc.open();

osc.on('open', () => {
  console.log('osc open');
});
