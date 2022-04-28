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
      range,
      regen,
      lifeSteal,
      armorPiercing
    );
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
  getRange(){
    return this.weapon ? this.range + this.weapon.range : this.range;
  }
  getSubRange(){
    return this.subWeapon ? this.range + this.subWeapon.range : this.range;
  }
  //affichage
  getDefense() {
    return this.shield
      ? this.dexterity + this.shield.protection
      : this.dexterity;
  }

  getDamage() {
    return this.weapon ? this.strength + this.weapon.damage : this.strength;
  }
  getSubDamage() {
    return this.subWeapon ? this.strength + this.subWeapon.damage : this.strength;
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

  getAttack(attacker) {
    this.attackTemp =
      attacker.getRandom(attacker.strength) +
      (attacker.weapon == null ? 0 : attacker.weapon.damage) +
      1;
    return this.attackTemp;
  }
  attackTemp = 0;
}
