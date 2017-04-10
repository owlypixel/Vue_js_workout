Vue.component('todo-item', {
	props: ['todo'],	
	template: '<li>{{ todo.text }}</li>'
})


var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello, Vue!',
		title: 'You loaded this page on' + new Date(),
		seen: true,
		show: true,
		todos: [
			{text: "Do one thing"},
			{text: "Do another thing"},
		],
		paragraph: "Habla-babla",
		consoleHello: function(){
			console.log("Hello!")
		},
		ingredients: ['meat', 'fruit', 'cookies'],
		persons: [
			{name: 'Ana', age: 18, color: 'blue'},
			{name: 'John', age: 34, color: 'red'}
		]
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});

