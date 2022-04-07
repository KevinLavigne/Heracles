const Weapon = require("./Weapon")
const Shield = require("./Shield")
const maxLife = 100

class Fighter {
    constructor(name , strenght , dexterity , weapon , shield,stealLife,regen, life, critDmg){
        this.name = name;
        this.strenght = strenght;
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.shield = shield;
        this.stealLife = stealLife;
        this.regen = regen;
        this.life = maxLife;
        this.critDmg = (1 + (this.strenght/100));
    }
    
    crit(){
        if ( this.dexterity > Math.round(Math.random()* 100 +1 )){
            console.log(`${this.name} infict a critical hit`)
            return this.critDmg
        } else {
            return 1
        }
    }
    fight(enemy){
        enemy.life = Math.round(Math.max(0,(enemy.life - Math.max(0, this.getAttack() * this.crit())) - enemy.getDefence(enemy)))
        console.log(`${this.name} ⚔️ ${enemy.name} 💙 ${enemy.name}: ${enemy.life}/${maxLife}`)
        this.regeneration
    }
    getDefence(enemy){
        return enemy.dexterity + (enemy.shield =! null? 0 : enemy.shield.protection )
    }
    getAttack(){
       return (Math.random()* this.strenght +(this.weapon =! null? 0 : this.weapon.damage )+ 1)
    }
    regeneration(){
        this.life += (this.regen > 0 ? this.regen : 0)
    }
}
 module.exports={Fighter,maxLife}

