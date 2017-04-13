<template>
  <div class='container'>
    <div class="row">
      <div class="col-xs-12">
        <my-quote>
          <h1 slot="title">{{ quoteTitle }}</h1>
          <p slot="content">What an awesome quote</p>
        </my-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';

  export default {
    data: function(){
      return {
        quoteTitle: 'Quote Title'
      }
    },
    components: {
      'my-quote': Quote
    }
  }
</script>

<style>

</style>
