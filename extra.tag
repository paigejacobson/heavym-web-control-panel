<extra>
<h1>{opts.b}</h1>

<form>
  <input ref="abc" type="text" value="type here"/>
  <input type="submit" value="Click"/>
</form>


 <!-- Block one:
<yield from="one"/>

<br><br>
<yield from="two"/>  -->

<style>
h1 {
  color: Purple;
}
</style>

<script>
this.on("mount",function(){
  console.log("mounting");
  console.log(this.refs.abc.value);
})
</script>

</extra>
