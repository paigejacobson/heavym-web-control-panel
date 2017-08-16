<effectcontrol class="col-sm-10 col-sm-push-1 col-md-4 col-md-push-0 control-container">
  <div class="controls">
    <label for="{ this.opts.effect }Range">{ this.opts.effect }</label>
    <input ref="rangeSlider" type="range" min="0" max="127" id="{ this.opts.effect }Range" name="{ this.opts.effect }Range" value="{ this.opts.effectValue }" class="colorRange">
    <button ref="toggleButton" id="{ this.opts.effect }Toggle" class="btn btn-default"> Toggle { this.opts.effect } </button>
    <span class="slider-value">{ this.opts.effectValue }</span>
  </div>

  <style>
    .control-container{
      margin-top:2em;
    }

    .control-container .controls{
      border:1px solid #b6b6b6;
      padding:1em;
      background:#EFEFEF;
    }

    .slider-value{
      float:right;
      font-weight:700;
      margin-top:1.5em;
    }

    .control-container .btn{
      margin-top:1em;
    }

    .button-container{
      padding:1em 10px;
    }
  </style>

  <script type="text/javascript">
      this.on('mount', function(e){
        var that = this;

        this.refs.rangeSlider.oninput = function(e){
          var inputVal = e.target.value;
          var command = '/Shader' + that.opts.effect;
          var message = new OSC.Message(command, parseInt(inputVal));
          window.osc.send(message);
        }

        this.refs.toggleButton.onclick = function(e){
          var command = '/Shader' + that.opts.effect + 'Activate';
          var message = new OSC.Message(command, 127);
          window.osc.send(message);
        }
      });
  </script>
</effectcontrol>
