/** Part for the starting instanciation */
/** creating the hero Heracles */
const heracles = new Hero('👨 Heracles',100, 20, 6, './images/heracles.svg',2,4);

/** Creating his weapon and associating it */
const sword = new Weapon('sword', 10, './images/sword.svg');
const bow = new Weapon('sword', 8, './images/bow.svg',5);
heracles.weapon = sword;
heracles.subWeapon = bow;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
heracles.shield = shield;

/** Creating all of his adversaries */
const mare1 = new Monster('🐴 Jument',100, 25, 12, './images/jument.png', 7, 7);
const mare2 = new Monster('🐴 Jument',100, 25, 12, './images/jument.png', 4, 3);
const mare3 = new Monster('🐴 Jument',100, 25, 12, './images/jument.png', 6, 2);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(heracles, mare1);

/** Your code goes here */
const arena = new Arena([mare1,mare2,mare3], heracles)
const ArenaHTML = new ArenaTemplate('arena'); ArenaHTML.createArena(arena)

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