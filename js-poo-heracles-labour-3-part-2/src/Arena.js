class Arena {
  constructor(monsters, hero, size =9) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }
  getDistance(fighter1, fighter2) {
    return (Math.sqrt(Math.pow((fighter2.x - fighter1.x),2)+Math.pow((fighter2.y - fighter1.y),2))).toFixed()
    }
  isTouchable(attacker, defender){
    if ((attacker.getRange() >= this.getDistance(attacker, defender)|| (attacker.getSubRange() >= this.getDistance(attacker, defender)))){
      return true
    } else {
      return false
    }
  }
}