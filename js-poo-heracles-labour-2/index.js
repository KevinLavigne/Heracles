const {Fighter,maxLife} = require("./src/fighter")
const Shield = require("./src/Shield")
const Weapon = require("./src/Weapon")
// First Labour : Heracles vs Nemean Lion
const sword = new Weapon("sword", 10)

const shield = new Shield("shield", 10)

const heracles = new Fighter("🧔 Heracles", 20 , 6, sword , shield)
const nemeanLion = new Fighter("🦁 Nemean Lion", 11 , 13,null,null)
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12,null,null);


console.log(`Here was the fight of ${heracles.name}  ⚔️ ${nemeanLion.name}`)
console.log(`${heracles.name} : ${heracles.life}/${maxLife}💙 ⚔️ ${nemeanLion.name} : ${nemeanLion.life}/${maxLife}💙`)

function result(fighter1 , fighter2){
    if(fighter1.life === 0){
        console.log(`${fighter1.name} is dead 💀`)
        console.log(`${fighter2.name} Wins 🏆`)
    }else{
        console.log(`${fighter2.name} is dead 💀`)
        console.log(`${fighter1.name} Wins 🏆`)
        if (fighter2.name === "🦁 Nemean Lion")
            brawl(heracles, boar)
        }
}
let round = 1
function brawl(fighter1 ,fighter2){
    while (fighter1.life >= 1 || fighter2.life >= 1 ) {
        round++
        console.log(`round #${round}`)
        fighter1.fight(fighter2)
        if (fighter2.life >0){
            fighter2.fight(fighter1)
        }
        if ((fighter1.life == 0) || (fighter2.life ==0)){
            result(fighter1 ,fighter2)
            break
        }
    } 
}

brawl(heracles,nemeanLion)