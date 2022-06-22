let personnage = {
    pv: 10,
    pa: 12,
    pm: 6,
    force: 200,
    intelligence: 0,
    agilité: 0,
    chance: 50,
    attaque: function () {
        console.log('Personnage attaque avec ' + (this.force / 5) + ' points de dégâts.');
    }
}

let pv = 10, pa = 12, pm = 6;

let perso = {pv, pa, pm};

console.log(perso);

console.log(personnage);
personnage.attaque();

let kiki = new Personnage('Kiki', 'Mage');
let garen = new Personnage('Garen', 'Gogole');

kiki.attaque(garen);

console.log(garen);