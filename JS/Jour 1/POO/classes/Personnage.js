class Personnage {
    constructor(nom, classe) {
        this.nom = nom;
        this.classe = classe;
        switch (classe) {
            default:
                this.classe = 'Guerrier';
                this.hp = 500;
                this.force = 100;
                this.intelligence = -12;
                this.agilite = 20;
                break;

            case 'Mage':
                this.hp = 200;
                this.force = 2;
                this.intelligence = 120;
                this.agilite = 5;
                break;

            case 'Voleur':
                this.hp = 300;
                this.force = 20;
                this.intelligence = 20;
                this.agilite = 75;
                break;
        }
        console.log('Bienvenue ' + this.nom + " le " + this.classe + ".")
    }

    attaque (cible) {
        let degats = (this.force + this.agilite + this.intelligence) / 5;
        cible.hp -= degats;
        console.log(cible.nom + " perd " + degats + " points de vie.");
    }
}