document.addEventListener('DOMContentLoaded', function (e) {
	let btn = document.getElementById('btn');

	btn.addEventListener('click', function (e) {
		let values = [];
		let player_1_ones = document.getElementById('player_1_ones').value;
		let player_1_twos = document.getElementById('player_1_twos').value;
		let player_1_threes = document.getElementById('player_1_threes').value;
		let player_1_fours = document.getElementById('player_1_fours').value;
		let player_1_fives = document.getElementById('player_1_fives').value;
		let player_1_sixes = document.getElementById('player_1_sixes').value;

		values = [
			player_1_ones,
			player_1_twos,
			player_1_threes,
			player_1_fours,
			player_1_fives,
			player_1_sixes,
		];
		let player_1_sum = document.getElementById('player_1_sum');
		let player_1_bonus = document.getElementById('player_1_bonus');

		//console.log(player_1_ones);
		countDiceValues(values);
	});
});
function countDiceValues(values) {
	let result = 0;

	for (let value = 0; value < values.length; value++) {
		let current = Number(values[value]) * (value + 1);
		result += current;
	}
	if (result >= 63) {
		player_1_bonus.innerHTML = '50';
	}
	player_1_sum.innerHTML = result;
}
/*		
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
*/
