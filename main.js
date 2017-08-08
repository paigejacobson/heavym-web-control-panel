var osc = new OSC(),
  redbutton = document.getElementById('toggle_red');

redbutton.addEventListener('click', function(){
  console.log('shader activated');
  var myMessage = new OSC.Message('/ShaderTwistActivate', 127);
  console.log(myMessage);
  osc.send(myMessage, {host:"10.57.166.141"});
});

function Value1(newValue){
	document.getElementById('input1').value = newValue;
}

function Value2(newValue){
	document.getElementById('input2').value = newValue;
}

function Value3(newValue){
	document.getElementById('input3').value = newValue;
}

osc.open();

osc.on('open', () => {
  console.log('osc open');
});
