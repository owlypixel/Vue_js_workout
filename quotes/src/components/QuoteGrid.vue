<template>
	<div class="row">
		<quote-tmp v-for="(quote, index) in quotes" @click.native="deleteQuote(index)"> {{ quote }}</quote-tmp>		
	</div>
</template>
<script>
import Quote from './Quote.vue';

	export default {
		props: ['quotes'],
		components: {
			'quote-tmp': Quote
		},
		methods: {
			deleteQuote(index){
				this.$emit('quoteDeleted', index);
			}
		}

	}
</script>
<style>
	
</style>