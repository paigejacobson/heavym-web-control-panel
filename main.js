var osc = new OSC(),
    clearButton = document.getElementById('clear');

var rangeVars = {};
var toggleVars = {};

var effects = [
  'Red','Green','Blue','BlackAndWhite','Blur','Contraste','Convergence','CutSlider',
  'Glow','Noise','OldTv','Shaker','Slitscan','Strobe','Swell','Twist'
];

// Declare effects sliders and toggles
for(var i = 0; i < effects.length; i++){
  rangeVars[effects[i] + 'Range'] = document.getElementById(effects[i] + 'Range');
  toggleVars[effects[i] + 'Toggle'] = document.getElementById(effects[i] + 'Toggle');
}

// Create the slider instances
for (const key of Object.keys(rangeVars)) {
  var channelName = rangeVars[key].id.split('Range')[0];
  inputChangeOscMessage(rangeVars[key], 'input', '/Shader' + channelName);
}

// Create the toggle instances
for (const key of Object.keys(toggleVars)) {
  var channelName = toggleVars[key].id.split('Toggle')[0];
  activateOscMessage(toggleVars[key], 'click', '/Shader' + channelName + 'Activate');
}

// Listen for changes to sliders, send OSC message
function inputChangeOscMessage(listenTo, eventType, command){
  listenTo.addEventListener(eventType, function(){
    var inputVal = listenTo.value;
    var parentEl = listenTo.parentNode;
    var children = parentEl.childNodes;
    for(var i = 0; i < children.length; i++){
      if (children[i].className == 'slider-value') {
        children[i].innerHTML = inputVal;
        break;
      }
    }
    var message = new OSC.Message(command, parseInt(inputVal));
    osc.send(message);
  });
}

// Listen for changes to buttons, send OSC activation message
function activateOscMessage(listenTo, eventType, command){
  listenTo.addEventListener(eventType, function(){
    console.log('activate msg');
    var message = new OSC.Message(command, 127);
    osc.send(message);
  });
}

// Set sliders to random values when "random colors" is selected
function rangeRandom(){
  var allSliders = document.getElementsByTagName('input');
  for(var i = 0; i < allSliders.length; i++){
    if(allSliders[i].className == 'colorRange'){
      allSliders[i].value = getRandomRange(0, 127);
      allSliders[i].dispatchEvent(inputEvent);
    }
  }
}

// Make input events bubble up
var inputEvent = new Event('input', {
    'bubbles': true,
    'cancelable': true
});

// Get random numbers in a range
function getRandomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Random Color Ranger
var startRandomColors = document.getElementById('startRandomColors');
var stopRandomColors = document.getElementById('stopRandomColors');

startRandomColors.addEventListener('click', function(){
  window.randomColorInterval = setInterval(function(){
    rangeRandom();
  }, 1000);
});

stopRandomColors.addEventListener('click', function(){
  clearInterval(window.randomColorInterval);
});

// Clear Inputs
clearButton.addEventListener('click', function(){
  redRange.value = 127;
  greenRange.value = 127;
  blueRange.value = 127;
  initRanges();
  resetColors();
});

function resetColors(){
  var clearRed = new OSC.Message('/ShaderRed', 127);
  var clearGreen = new OSC.Message('/ShaderGreen', 127);
  var clearBlue = new OSC.Message('/ShaderBlue', 127);
  osc.send(clearRed);
  osc.send(clearGreen);
  osc.send(clearBlue);
}

// Init Toggle Function
function initToggles(){
  for (const key of Object.keys(toggleVars)) {
    var effectName = key.split('Toggle')[0];
    var command = '/Shader' + effectName + 'Activate';
    var message = new OSC.Message(command, 127);
    osc.send(message);
  }
}

// Init Slider Function
function initRanges(){
  for (const key of Object.keys(rangeVars)) {
    var effectName = key.split('Range')[0];
    var command = '/Shader' + effectName;
    var message = new OSC.Message(command, 0);
    osc.send(message);
  }
}

// OSC Functions
osc.on('open', function(){
  initToggles();
  initRanges();
  resetColors();
});

osc.open(); // connect by default to ws://localhost:8080
