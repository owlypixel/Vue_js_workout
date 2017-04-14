<template>
  <div class="container">
  <progress-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></progress-header>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="removeQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: You need to click on a quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';

export default {
  data: function(){
    return {
      maxQuotes: 10,
      quotes: ['Just a quote', 'another-one']
    }
  },
  components: {
    'quote-grid': QuoteGrid,
    'new-quote': NewQuote,
    'progress-header': Header
  },
  methods: {
    newQuote(quote){
      if(this.quotes.length >= this.maxQuotes){
        alert('You need to delete quotes')
        return;
      }
      this.quotes.push(quote);
    },
    removeQuote(index){
      this.quotes.splice(index, 1);
    }
  }
 
}
</script>

<style>

</style>
