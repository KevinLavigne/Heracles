class Monster extends Fighter {
	constructor(
		name,
		maxLife,
		strength,
		dexterity,
		image,
		x,
		y,
		regen,
		lifeSteal,
		armorPiercing
	) {
		super(
			name,
			maxLife,
			strength,
			dexterity,
			image,
			x,
			y,
			regen,
			lifeSteal,
			armorPiercing
		);
	}
	getRange() {
		return this.range;
	}
	//affichage
	getDefense() {
		return this.dexterity;
	}

	getDamage() {
		return this.strength;
	}
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
}
