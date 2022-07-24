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
		console.log('a', attacker.name === this.hero.name);
		if (
			attacker.getRange() >= this.getDistance(attacker, defender) ||
			(attacker.getSubRange
				? attacker.getSubRange() >= this.getDistance(attacker, defender)
				: null)
		) {
			return true;
		} else {
			return false;
		}
	}

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
		return this.monsters
			.filter((el) => el.isAlive())
			.some(
				(monster) =>
					monster.x === wantedPosition.x && monster.y === wantedPosition.y
			);
	}
	battle(id) {
		if (!this.isTouchable(this.hero, this.monsters[id])) {
			error.innerText = 'This monster is not touchable, please move first';
		} else {
			console.log(this.monsters[id]);
			this.hero.fight(this.hero, this.monsters[id]);
			error.innerText = `${this.hero.name} ⚔️ ${this.monsters[id].name} 💙 ${this.monsters[id].name}: ${this.monsters[id].life}/${this.monsters[id].maxLife}`;
			if (
				this.isTouchable(this.monsters[id], this.hero) &&
				this.monsters[id].isAlive()
			) {
				this.monsters[id].fight(this.monsters[id], this.hero);
				error.innerHTML += `<br/>${this.monsters[id].name} counter attack ⚔️ ${this.hero.name} 💙 ${this.hero.name}: ${this.hero.life}/${this.hero.maxLife}`;
			}
			if (this.monsters[id].isAlive() === false) {
				error.innerText = `${this.hero.name} won 🗡️  ${this.hero.life}/${this.hero.maxLife} 💙 ${this.monsters[id].name} is dead !!!`;
				this.checkBattle();
				return true;
			}
		}
	}
	checkBattle() {
		console.log(
			'c',
			this.monsters.some((monster) => monster.isAlive()) === false
		);
		if (this.monsters.some((monster) => monster.isAlive()) === false)
			error.innerText = 'You Won !!!';
	}
}
