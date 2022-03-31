// First Labour : Heracles vs Nemean Lion

let i = 1
const maxLife = 100

 class Fighter {
   constructor(name , strenght , dexterity , life){
       this.name = name;
       this.strenght = strenght;
       this.dexterity = dexterity;
       this.life = maxLife;

   }
       fight(){
           i = i + 1
           if (heracles.life > 0 && nemeanLion.life > 0){
                console.log(`round #${i}`)
                nemeanLion.life = Math.max(0,nemeanLion.life - Math.max(0,((Math.round(Math.random()* heracles.strenght + 1)) - nemeanLion.dexterity)))
                console.log(`${heracles.name} ⚔️ ${nemeanLion.name} 💙 ${nemeanLion.name}: ${nemeanLion.life}`)
                if (nemeanLion.life > 0){
                    heracles.life = Math.max(0,heracles.life - Math.max(0,((Math.round(Math.random()* nemeanLion.strenght + 1)) - heracles.dexterity)))
                    console.log(`${nemeanLion.name} ⚔️ ${heracles.name} 💙 ${heracles.name}: ${heracles.life}`)
                    this.fight()
                } else {
                    this.fight()
                }
            }
            else if (heracles.life < 1){
                console.log(`${heracles.name} is dead 💀`)
                console.log(`${nemeanLion.name} Wins 🏆`)
            }
            else if (nemeanLion.life < 1){
                console.log(`${nemeanLion.name} is dead 💀`)
                console.log(`${heracles.name} Wins 🏆`)
            }
        }    
}
const heracles = new Fighter("🧔 Heracles", 20 , 6)
const nemeanLion = new Fighter("🦁 Nemean Lion", 11 , 13)
console.log(`Here was the fight of ${heracles.name}  ⚔️ ${nemeanLion.name}`)
console.log(`${heracles.name} : ${heracles.life}💙 ⚔️ ${nemeanLion.name} : ${nemeanLion.life} 💙`)
heracles.fight()
