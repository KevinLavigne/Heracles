const maxLife = 100

class Fighter {
    constructor(name , strenght , dexterity , life){
        this.name = name;
        this.strenght = strenght;
        this.dexterity = dexterity;
        this.life = maxLife;
        this.critDmg = (1 + (this.strenght/100))
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
        enemy.life = Math.max(0,enemy.life - Math.max(0,((Math.round((Math.random()* this.strenght + 1) * this.crit())) - enemy.dexterity)))
        console.log(`${this.name} ⚔️ ${enemy.name} 💙 ${enemy.name}: ${enemy.life}/${maxLife}`)
    }
    

 }
 module.exports={Fighter,maxLife}