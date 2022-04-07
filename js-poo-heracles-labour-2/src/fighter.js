const Weapon = require("./Weapon")
const Shield = require("./Shield")


class Fighters {
    constructor(name,maxLife, strenght , dexterity , weapon , shield,regen,lifeSteal, life, critDmg){
        this.name = name;
        this.maxLife = maxLife;
        this.strenght = strenght;
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.shield = shield;
        this.regen = regen;
        this.lifeSteal = lifeSteal;
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
    getRandom(max){
       return 1 + Math.floor(Math.random()* max)
    }
    fight(attacker,defender){
        defender.life = Math.max(0,defender.life - Math.max(0,(this.getAttack(attacker) - this.getDefence(defender)))) ;
        console.log(`${attacker.name} ⚔️ ${defender.name} 💙 ${defender.name}: ${defender.life}/${defender.maxLife}`);
        if (attacker.lifeSteal >= 1){
            attacker.stealLife(attacker)
            console.log(`${attacker.name} steal ${this.lifeStealedTemp} life point 💙`)
        }
        if (attacker.regen >= 1){
            attacker.regeneration(attacker)
            console.log(`${attacker.name} self restore ${attacker.regen} ${attacker.life}/${attacker.maxLife}💙`)
        }
    }
    getDefence(defender){
        this.defenceTemp = defender.dexterity + (defender.shield == null ? 0 : defender.shield.protection)
        return this.defenceTemp
    }
    defenceTemp = 0
    getAttack(attacker){
       this.attackTemp = (attacker.getRandom(attacker.strenght) +(attacker.weapon == null? 0: attacker.weapon.damage)+ 1)
       return this.attackTemp
    }
    attackTemp = 0
    stealLife(attacker){
        this.lifeStealedTemp =Math.round(Math.max(0,(this.attackTemp - this.defenceTemp)) * attacker.lifeSteal /100)
        return attacker.life = Math.min(attacker.maxLife, (attacker.life + this.lifeStealedTemp))
    }   
    lifeStealedTemp = 0
    regeneration(attacker){
        attacker.life = Math.min(attacker.maxLife, (attacker.life + attacker.regen))
    }
}
 module.exports={Fighters}

