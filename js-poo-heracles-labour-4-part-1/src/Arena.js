class Arena {
	constructor(monsters, hero, size = 9, message) {
		this.monsters = monsters;
		this.hero = hero;
		this.size = size;
	}
	getDistance(fighter1, fighter2) {
		return Math.sqrt(
			Math.pow(fighter2.x - fighter1.x, 2) +
				Math.pow(fighter2.y - fighter1.y, 2)
		).toFixed();
	}
	isTouchable(attacker, defender) {
		if (
			attacker.getRange() >= this.getDistance(attacker, defender) ||
			attacker.getSubRange() >= this.getDistance(attacker, defender)
		) {
			return true;
		} else {
			return false;
		}
	}
	// 	move(direction) {
	// 		let messages = '';
	// 		let oldPosition = {
	// 			x: this.hero.x,
	// 			y: this.hero.y,
	// 		};

	// 		if (direction === 'N') this.hero.y--;
	// 		if (direction === 'S') this.hero.y++;
	// 		if (direction === 'E') this.hero.x--;
	// 		if (direction === 'W') this.hero.x++;

	// 		console.log(this.isEnnemyOnTheCase(this.hero.x, this.hero.y));
	// 		console.log(this.isHeroOnTheMaps());
	// 		if (this.isEnnemyOnTheCase(this.hero.x, this.hero.y)) {
	// 			messages = "ne peut pas se déplacer sur présence d'ennemy";
	// 		} else if (this.isHeroOnTheMaps) {
	// 			messages = 'déplacement hors de la carte impossible';
	// 		} else {
	// 			return oldPosition;
	// 		}
	// 		document.getElementById('error').innerText = messages;
	// 		this.hero.x = oldPosition.x;
	// 		this.hero.y = oldPosition.y;
	// 		console.log(this.hero.x + ',' + this.hero.y);
	// 	}
	// 	isEnnemyOnTheCase() {
	// 		return this.monsters.some((monster) => {
	// 			monster.x === this.hero.x || monster.y === this.hero.y;
	// 		});
	// 	}
	// 	isHeroOnTheMaps() {
	// 		return (
	// 			this.hero.x < 0 ||
	// 			this.hero.x > this.size - 1 ||
	// 			this.hero.y < 0 ||
	// 			this.hero.y > this.size - 1
	// 		);
	// 	}
	// }
	move(direction) {
		// OLD POSITION
		let message = '';
		const error = document.getElementById('error');
		const oldPosition = {
			x: this.hero.x,
			y: this.hero.y,
		};

		// DESIRED MOVE
		const wantedPosition = { x: this.hero.x, y: this.hero.y };

		//déplacements plus intuitifs
		if (direction === 'E') wantedPosition.x -= 1;
		if (direction === 'W') wantedPosition.x += 1;
		if (direction === 'N') wantedPosition.y -= 1;
		if (direction === 'S') wantedPosition.y += 1;

		// CONTROL FUNCTIONS
		//check if the tile where Heracles wants to move stays on table
		if (this.isOnMap(wantedPosition) === false) {
			message = 'this tile is out of range';
			wantedPosition.x = oldPosition.x;
			wantedPosition.y = oldPosition.y;
			error.innerText = message;
		}
		//check if the tile where Heracles wants to move is free
		else if (this.isOnEnnemyTile(wantedPosition) === true) {
			message = 'this tile is already occupied';
			error.innerText = message;
			wantedPosition.x = oldPosition.x;
			wantedPosition.y = oldPosition.y;
		} else {
			error.innerText = '';
			this.hero.x = wantedPosition.x;
			this.hero.y = wantedPosition.y;
		}

		// NEW POSITION AFTER CONTROLS

		return oldPosition;
	}
	isOnMap(wantedPosition) {
		return (
			wantedPosition.x < this.size &&
			wantedPosition.x >= 0 &&
			wantedPosition.y < this.size &&
			wantedPosition.y >= 0
		);
	}
	isOnEnnemyTile(wantedPosition) {
		return this.monsters.some(
			(monster) =>
				monster.x === wantedPosition.x && monster.y === wantedPosition.y
		);
	}
}
