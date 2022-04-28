class Arena {
	constructor(monsters, hero, size = 9) {
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
  move(direction) {
    let oldPosition= {
			x: this.hero.x,
			y: this.hero.y
		}
		let newPosition= {
			x: oldPosition.x,
			y: oldPosition.y
		}
		if (direction === "N" && oldPosition.y -1 >= 0){
			newPosition.y--
			this.verif(newPosition.x , newPosition.y).length === 0 ? this.hero.y-- : console.log("u can't move on ennemy")
			console.log(this.hero)
		}else if (direction === "S" && this.hero.y +1 <= this.size){
			newPosition.y++
			this.verif(newPosition.x , newPosition.y).length === 0 ? this.hero.y++ : console.log("u can't move on ennemy")
			console.log(this.hero)
		}else if (direction === "W" && this.hero.x -1 >= 0){
			newPosition.x--
			this.verif(newPosition.x , newPosition.y).length === 0 ? this.hero.x-- : console.log("u can't move on ennemy")
			console.log(this.hero)
		}else if (direction === "E" && this.hero.x +1 <= this.size){
			newPosition.y--
			this.verif(newPosition.x , newPosition.y).length === 0 ? this.hero.x++ : console.log("u can't move on ennemy")
			console.log(this.hero)
			if (this.verif(newPosition.x , newPosition.y) !== [] ) {con} 
		} else {
			console.log("U can't move out of arena")
		}
		console.log("new position ")
		console.log(newPosition)
		return oldPosition
  }
	verif(x , y){
		return this.monsters.filter(monster => {
			(monster.x !=	x && monster.y !=	y)
		})
	}
	// move(direction) {
	// 	 let oldCoord = {
	// 		x: this.hero.x,
	// 		y: this.hero.y,
	// 	};
	// 	this.verif(direction)
	// }
	// verif(direction) {
	// 	if (direction === "N" && this.hero.y-- >= 0){
	// 		this.occuped(monster.y, this.hero.y--)
	// 	}else if (direction === "S" && this.hero.y++ <= this.size){
	// 		this.occuped(monster.y, this.hero.y++)
	// 	}else if (direction === "W" && this.hero.x-- >=0){
	// 		this.occuped(monster.x, this.hero.x--)
	// 	}else if (direction === "E" && this.hero.x++ <= this.size){
	// 		this.occuped(monster.x, this.hero.x++)
	// 	} else {
	// 		return false
	// 	}
	// }
	// 	occuped(axe , verif) {
	// 		if (this.monsters.filter(monster => {
	// 			monster.axe === this.hero.axe - verif 
	// 		}) !== []){
	// 			return false && console.log("false")
	// 		} else {
	// 			false && console.log("true")
	// 		}
	// 	}


	}

