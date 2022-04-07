const {Fighter,maxLife} = require("./fighter")

// First Labour : Heracles vs Nemean Lion

const heracles = new Fighter("🧔 Heracles", 20 , 6)
const nemeanLion = new Fighter("🦁 Nemean Lion", 11 , 13)


console.log(`Here was the fight of ${heracles.name}  ⚔️ ${nemeanLion.name}`)
console.log(`${heracles.name} : ${heracles.life}/${maxLife}💙 ⚔️ ${nemeanLion.name} : ${nemeanLion.life}/${maxLife}💙`)

function result(){
    if(heracles.life === 0){
        console.log(`${heracles.name} is dead 💀`)
        console.log(`${nemeanLion.name} Wins 🏆`)
    }else{
        console.log(`${nemeanLion.name} is dead 💀`)
        console.log(`${heracles.name} Wins 🏆`)
    }
}
let round = 1
function brawl(){
    while (heracles.life >= 1 || nemeanLion.life >= 1 ) {
        round++
        console.log(`round #${round}`)
        heracles.fight(nemeanLion)
        if (nemeanLion.life >0){
            nemeanLion.fight(heracles)
        }
        if (heracles.life === 0){
            console.log(`${heracles.name} is dead 💀`)
            console.log(`${nemeanLion.name} Wins 🏆`)
            break
        }
        if(nemeanLion.life === 0){
            console.log(`${nemeanLion.name} is dead 💀`)
            console.log(`${heracles.name} Wins 🏆`)
            break
        }
    } 
}
brawl()
console.log(heracles.critDmg)