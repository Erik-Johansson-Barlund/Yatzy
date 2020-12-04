class Die {
	constructor(num) {
		this.no = num;
		this.diceArea = document.getElementById('diceArea' + this.num);
		this.value = 0;
	}
	throw() {
		this.value = Math.ceil(Math.random() * 6);
		this.diceArea.innerHTML = this.value;
		return this.value;
	}
}
class Dice {
	constructor(num = 5) {
		this.dice = [];
		this.diceValues = [];
		for (let i = 0; i < num; i++) {
			let d = new Die(i);
			this.dice.push(d);
		}
	}
	throw() {
		for (let die of this.dice) {
			die.throw();
			this.diceValues.push(die.value);
		}
	}
}

//let set = new Dice();
