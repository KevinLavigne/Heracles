const maxLife = 100

class Fighter {
    constructor(name , strenght , dexterity , life){
        this.name = name;
        this.strenght = strenght;
        this.dexterity = dexterity;
        this.life = maxLife;
    }

    fight(enemy){
        enemy.life = Math.max(0,enemy.life - Math.max(0,((Math.round(Math.random()* this.strenght + 1)) - enemy.dexterity)))
        console.log(`${this.name} ⚔️ ${enemy.name} 💙 ${enemy.name}: ${enemy.life}`)
    }
    

 }
 module.exports=Fighter