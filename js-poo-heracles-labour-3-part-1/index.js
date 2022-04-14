/** Part for the starting instanciation */
/** creating the hero Heracles */
const heracles = new Fighter('👨 Heracles',100, 20, 6, './images/heracles.svg',2,4);

/** Creating his weapon and associating it */
const weapon = new Weapon('sword', 10, './images/sword.svg');
heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
heracles.shield = shield;

/** Creating all of his adversaries */
const birds = [
new Monster('Bird',100, 25, 12, './images/bird.svg',6,2),
new Monster('Bird',100, 25, 12, './images/bird.svg',6,4),
new Monster('Bird',100, 25, 12, './images/bird.svg',6,6),
]
/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(heracles, birds[0]);

/** Your code goes here */
const arena1st = new Arena(birds, heracles)
const ArenaHTML = new ArenaTemplate('arena'); ArenaHTML.createArena(arena1st)

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate('heroInfo');
    heroInfo.createHeroInfoTemplate(heracles);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
}

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
}