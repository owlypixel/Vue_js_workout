<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in deirectives</h1>
        <p v-text="'This is the text'"></p>
        <p v-html="'<strong>This is in bold</strong>'"></p>
      </div>
      <hr>
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom deirectives</h1>
        <p v-highlight:background.delayed="'red'">Color this</p>
        <p v-local-highlight:background.delayed.blink="'red'">Color this too</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 directives: {
  'local-highlight': {
    bind(el, binding, vnode){
      var delay = 0;
      if(binding.modifiers['delayed']){
        delay = 3000;
      }
      if(binding.modifiers['blink']){
        let mainColor = binding.value;
        let secondcolor = "blue";
        let currentColor = mainColor;
        setTimeout(() => {
          setInterval(() => {
            currentColor == secondcolor ? currentColor = mainColor : currentColor = secondcolor;
            if(binding.arg == 'background'){
              el.style.backgroundColor = currentColor;
            } else {
              el.style.color = currentColor;
            }
          }, 1000);
         
        }, delay)
      } else {
        setTimeout(() => {
          if(binding.arg == 'background'){
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay)
      }
     
    }
  }
 }
}
</script>

<style>

</style>
