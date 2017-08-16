<effectcontrol class="col-sm-10 col-sm-push-1 col-md-4 col-md-push-0 control-container">
  <div class="controls">
    <label for="redRange"><yield/></label>
    <input type="range" min="0" max="127" id="RedRange" name="redRange" value="100" class="colorRange">
    <button id="RedToggle" class="btn btn-default">Toggle Red</button>
    <span class="slider-value">100</span>
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
</effectcontrol>
