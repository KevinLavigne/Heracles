const {Fighters} = require("./src/fighter")
const Shield = require("./src/Shield")
const Weapon = require("./src/Weapon")
// First Labour : Heracles vs Nemean Lion
const sword = new Weapon("sword", 10)

const shield = new Shield("shield", 10)

const heracles = new Fighters("🧔 Heracles",100, 20 , 6, null , null,0,0)
const monster = [
new Fighters("🦁 Nemean Lion",100, 11 , 13,null,null),
new Fighters("🐗 Erymanthian Boar",100, 25, 12,null,null),
new Fighters("The Hydra",200,25,15,null,null,5,0)
]
let victory =0
function result(fighter1 , fighter2){
    if(fighter1.life <= 0){
        console.log(`${fighter1.name} is dead 💀`)
        console.log(`${fighter2.name} Wins 🏆`)
    }else{
        console.log(`${fighter2.name} is dead 💀`)
        console.log(`${fighter1.name} Wins 🏆`)
        victory++
        reward()
        }
}
let round = 0
function brawl(fighter1 ,fighter2){
console.log(`Here was the fight of ${fighter1.name}  ⚔️ ${fighter2.name}`)
console.log(`${fighter1.name} : ${fighter1.life}/${fighter1.maxLife}💙 ⚔️ ${fighter2.name} : ${fighter2.life}/${fighter2.maxLife}💙`)
    while (fighter1.life >= 1 || fighter2.life >= 1 ) {
        round++
        console.log(`round #${round}`)
        fighter1.fight(fighter1,fighter2)
        if (fighter2.life > 0){
            fighter2.fight(fighter2 ,fighter1)
        }
        if ((fighter1.life <= 0) || (fighter2.life <=0)){
            result(fighter1 ,fighter2)
            break
        }
    } 
}
const reward=() => {
    heracles.life = (Math.min(100, heracles.life + 50 ));
    if (victory === 1){
        heracles.weapon = sword
        heracles.shield = shield
    }
    if (victory === 2){
        heracles.lifeSteal =+ 25
    }
    if (victory < 3){
    brawl(heracles, monster[victory])
    }
    if (victory == 3){ 
    console.log(`${heracles.name} defeat all enemys`)
    }
}
brawl(heracles,monster[victory])
