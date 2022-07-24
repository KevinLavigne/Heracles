class Fighter {
	constructor(name, maxLife, strength, dexterity, image, x, y) {
		this.name = name;
		this.maxLife = maxLife;
		this.strength = strength;
		this.dexterity = dexterity;
		this.image = image;
		this.x = x;
		this.y = y;
		this.range = 1;
		this.regen = 0;
		this.lifeSteal = 0;
		this.armorPiercing = 0;
		this.life = maxLife;
		this.critDmg = 1 + this.strength / 100;
		this.experience = 0;
	}

	getRange() {
		return this.range;
	}
	crit() {
		if (this.dexterity > Math.round(Math.random() * 100 + 1)) {
			console.log(`${this.name} infict a critical hit`);
			return this.critDmg;
		} else {
			return 1;
		}
	}
	getRandom(max) {
		return 1 + Math.floor(Math.random() * max);
	}
	fight(attacker, defender) {
		defender.life = Math.max(
			0,
			defender.life -
				Math.max(
					0,
					this.getAttack(attacker) - this.getDefence(defender, attacker)
				)
		);
		console.log(
			`${attacker.name} ⚔️ ${defender.name} 💙 ${defender.name}: ${defender.life}/${defender.maxLife}`
		);
		if (attacker.lifeSteal >= 1) {
			attacker.stealLife(attacker);
			console.log(
				`${attacker.name} steal ${this.lifeStealedTemp} life point 💙`
			);
		}
		if (attacker.regen >= 1) {
			attacker.regeneration(attacker);
			console.log(
				`${attacker.name} self restore ${attacker.regen} ${attacker.life}/${attacker.maxLife}💙`
			);
		}
	}
	//affichage
	getDefense() {
		return;
		this.dexterity;
	}

	getDamage() {
		return;
		this.strength;
	}
	//stats réel en combat
	getDefence(defender, attacker) {
		this.defenceTemp = Math.max(
			0,
			defender.dexterity -
				(attacker.armorPiercing === null ? 0 : attacker.armorPiercing)
		);
		return this.defenceTemp;
	}
	defenceTemp = 0;
	getAttack(attacker) {
		this.attackTemp = attacker.getRandom(attacker.strength) + 1;
		return this.attackTemp;
	}
	attackTemp = 0;
	stealLife(attacker) {
		this.lifeStealedTemp = Math.round(
			(Math.max(0, this.attackTemp - this.defenceTemp) * attacker.lifeSteal) /
				100
		);
		return (attacker.life = Math.min(
			attacker.maxLife,
			attacker.life + this.lifeStealedTemp
		));
	}
	lifeStealedTemp = 0;
	regeneration(attacker) {
		attacker.life = Math.min(attacker.maxLife, attacker.life + attacker.regen);
	}
	isAlive() {
		return this.life > 0;
	}
}
