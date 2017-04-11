var vm1 = new Vue({
	el: '#app1',
	data: {
		title: "This is my title",
		showParagraph: false
	},
	methods: {
		show: function(){
			this.showParagraph = true;
			this.updateTitle("New updated title");
			console.log(this.$refs)
			this.$refs.myButton.innerText = "TEST!"
		},
		updateTitle: function(title) {
			this.title = title;
		}
	}
});

setTimeout(function(){
	vm1.title = "Changed by SetTimeout!"
}, 3000);

console.log(vm1);

var vm2 = new Vue({
	el: '#app2',
	data: {
		title: 'The second instance'
	},
	methods: {
		onChange: function(){
			vm1.title = 'Title changed from second instance';
		}
	}
})