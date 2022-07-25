class Hero extends Fighter {
	constructor(
		name,
		maxLife,
		strength,
		dexterity,
		image,
		x,
		y,
		range,
		regen,
		lifeSteal,
		armorPiercing,
		life,
		experience
	) {
		super(
			name,
			maxLife,
			strength,
			dexterity,
			image,
			x,
			y,
			range,
			regen,
			lifeSteal,
			armorPiercing,
			life,
			experience
		);
		this.experience = 1000;
		this.weapon = null;
		this.subWeapon = null;
		this.shield = null;
		this.lifePotion = 3;
	}
	usePotion(attacker) {
		attacker.life = Math.min(
			attacker.maxLife,
			attacker.life + attacker.maxLife * 0.5
		);
	}
	getRange() {
		return this.weapon ? this.range + this.weapon.range : this.range;
	}
	getSubRange() {
		return this.subWeapon ? this.range + this.subWeapon.range : this.range;
	}
	//affichage
	getDefense() {
		return this.shield
			? this.dexterity + this.shield.protection
			: this.dexterity;
	}

	getDamage() {
		return this.weapon
			? this.getStrength() + this.weapon.damage
			: this.getStrength();
	}
	getSubDamage() {
		return this.subWeapon
			? this.getStrength() + this.subWeapon.damage
			: this.getStrength();
	}
	//stats réel en combat
	getDefence(defender, attacker) {
		this.defenceTemp = Math.max(
			0,
			defender.dexterity -
				(attacker.armorPiercing === null ? 0 : attacker.armorPiercing) +
				(defender.shield == null ? 0 : defender.shield.protection)
		);
		return this.defenceTemp;
	}
	defenceTemp = 0;

	getAttack(attacker, defender) {
		if (arena.getDistance(attacker, defender) === this.range) {
			this.attackTemp =
				attacker.getRandom(attacker.strength) +
				(attacker.weapon == null ? 0 : attacker.weapon.damage) +
				1;
		} else {
			this.attackTemp =
				attacker.getRandom(attacker.strength) +
				(attacker.subWeapon == null ? 0 : attacker.subWeapon.damage) +
				1;
		}
		return this.attackTemp;
	}
	attackTemp = 0;
	fight(attacker, defender) {
		if (arena.getDistance(attacker, defender) === this.range) {
			defender.life = Math.max(
				0,
				defender.life -
					parseFloat(
						Math.max(
							0,
							this.getAttack(attacker, defender) -
								defender.getDefence(defender, attacker)
						)
					)
			);
			console.log(typeof defender.life);
			console.log(typeof this.getAttack(attacker, defender));
			console.log(typeof defender.getDefence(defender, attacker));
		} else {
			defender.life = Math.max(
				0,
				defender.life -
					Math.max(
						0,
						this.getAttack(attacker, defender) -
							defender.getDefence(defender, attacker)
					)
			);
			console.log(defender.life);
			console.log(typeof this.getAttack(attacker, defender));
			console.log(typeof defender.getDefence(defender, attacker));
		}
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
		if (this.life <= this.maxLife / 2 && this.lifePotion > 0) {
			this.lifePotion -= 1;
			this.life = this.life + this.maxLife * 0.5;
		}
	}
	getStrength() {
		if (this.getLevel() === 1) {
			return this.strength;
		} else {
			return this.strength * (1 + (this.getLevel() - 1) / 4);
		}
	}
	getDexterity() {
		if (this.getLevel() === 1) {
			return this.dexterity;
		} else {
			return this.dexterity * (1 + (this.getLevel() - 1) / 4);
		}
	}
}
