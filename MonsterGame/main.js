new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;	
			this.monsterHealth = 100;	
			this.turns = [];
		},
		attack: function(){
			var damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'You hit monster for' + damage
			})
			if(this.checkWin()){
				return;
			}

			this.monsterAttacks();
		},
		specialAttack: function(){
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'YOu hit monster hard for' + damage
			})
			if(this.checkWin()){
				return;
			}

			this.monsterAttacks();
		},
		heal: function(){
			if(this.playerHealth <=90){
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'You heal for 10'
			})
			this.monsterAttacks();
		},
		giveUp: function(){
			this.gameIsRunning = false;
			this.turns = [];
		},
		calculateDamage: function(min, max){
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function(){
			if(this.monsterHealth <= 0){
				if(confirm('You won. Wanna play again?')){
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if(confirm('Monster won. Wanna play again?')){
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		},
		monsterAttacks: function(){
			var damage = this.calculateDamage(5, 12);
			this.checkWin();
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hit you for' + damage
			})
		}
	}
});