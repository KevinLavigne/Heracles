const { Fighters } = require('./src/fighter');
const Shield = require('./src/Shield');
const Weapon = require('./src/Weapon');
// First Labour : Heracles vs Nemean Lion
const sword = new Weapon('wooden broadsword', 10);

const shield = new Shield('wooden round shield', 10);

const heracles = new Fighters('🧔 Hercule', 100, 20, 6, null, null, 0, 0);
const monster = [
	new Fighters('🦁 Nemean Lion', 100, 11, 13, null, null),
	new Fighters('🐗 Erymanthian Boar', 100, 25, 12, null, null),
	new Fighters('The Hydra', 200, 25, 15, null, null, 5, 0),
];
let victory = 0;
function result(fighter1, fighter2) {
	if (fighter1.life <= 0) {
		console.log(`${fighter1.name} is dead 💀`);
		console.log(`${fighter2.name} Wins 🏆`);
	} else {
		console.log(`${fighter2.name} is dead 💀`);
		console.log(`${fighter1.name} Wins 🏆`);
		victory++;
		eachFightReward();
		reward();
	}
}
const halfMaxLife =(attacker)=>{
	return (attacker.maxLife / 2)
} 
let round = 0;
function brawl(fighter1, fighter2) {
	console.log(`Here was the fight of ${fighter1.name}  ⚔️ ${fighter2.name}`);
	console.log(
		`${fighter1.name} : ${fighter1.life}/${fighter1.maxLife}💙 ⚔️ ${fighter2.name} : ${fighter2.life}/${fighter2.maxLife}💙`
	);
	while (fighter1.life >= 1 || fighter2.life >= 1) {
		round++;
		console.log(`round #${round}`);
		fighter1.fight(fighter1, fighter2);
		if (fighter1.life < (halfMaxLife(fighter1)) && (fighter1.lifePotion > 0)) drinkPotion(fighter1);
		if (fighter2.life > 0) {
			fighter2.fight(fighter2, fighter1);
		}
		if (fighter1.life <= 0 || fighter2.life <= 0) {
			result(fighter1, fighter2);
			break;
		}
	}
}
const reward = () => {
	heracles.life = Math.min(100, heracles.life + 50);
	if (victory === 1) {
		heracles.weapon = sword;
		heracles.shield = shield;
		console.log(
			`God's decide to reward ${heracles.name} with an ${heracles.weapon.name} and an ${heracles.shield.name}`
		);
	}
	if (victory === 2) {
		heracles.lifeSteal = +25;
		console.log(
			`Ares give you the ability of use the blood of your oponent to restore your vitality. ${heracles.name} now have ${heracles.lifeSteal}% of vampirisme`
		);
	}
	if (victory < 3) {
		brawl(heracles, monster[victory]);
	}
	if (victory === 3) {
		console.log(`${heracles.name} defeat all enemys`);
	}
};
function eachFightReward(attacker) {
	const rand = Math.round(Math.random() * 3 + 1);
	if (rand === 1) {
		heracles.maxLife += 20;
	heracles.life = Math.min(heracles.maxLife, heracles.life + 20);
		console.log(
			`${heracles.name} gain 20 Max life point. Is actual life is ${heracles.life}/${heracles.maxLife}`
		);
	}
	if (rand === 2) {
		heracles.strenght += 5;
		console.log(
			`${heracles.name} gain 5 strenght point. Is actual strenght is ${heracles.strenght}`
		);
	}
	if (rand === 3) {
		heracles.dexterity += 5;
		console.log(
			`${heracles.name} gain 5 dexterity point. Is actual strenght is ${heracles.dexterity}`
		);
	}
}
function drinkPotion(attacker) {
	attacker.usePotion(attacker);
	console.log(
		`${attacker.name} drink an healing potion and restore ${
			halfMaxLife(attacker)
		}, he now have ${attacker.life}`
	);
	attacker.lifePotion = attacker.lifePotion - 1;
}
brawl(heracles, monster[victory]);
