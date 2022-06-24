# Responsive Design

## Liens utiles 

Repository Github
> https://github.com/DELORD-C/Responsiv-JS

Jeu Flex
> https://flexboxfroggy.com/#fr

CSS Diner
> https://flukeout.github.io/

Template Site Web
> https://epitechfr-my.sharepoint.com/:u:/g/personal/clement_delord_epitech_eu/ERm-vC5exHRLqagChMLJb1EB9yS7ckP5VQZwJhpmOvWBIA?e=AJlSxm

Fichiers d'exemples
> https://samplelib.com/sample-mp4.html

Gamified learning
> CodeCombat
> CodingGame
> HexInvaders
> Screeps
> Untrusted
> Dungeons & Developers
> Rootme
> https://mastery.games/flexboxzombies/
> http://www.flexboxdefense.com/
> https://cssgridgarden.com/
> https://rupl.github.io/unfold/
> https://cssbattle.dev/

Documentation MDN
> https://developer.mozilla.org/fr/

Font Awesome
> https://fontawesome.com

Doc Bootstrap
> https://getbootstrap.com/docs/5.2/getting-started/introduction/

Regex 101
> https://regex101.com

## Rappels html

### Différence entre name et id

L'attribut `name` sert uniquemet à définir le nom de la variable qui sera envoyé en POST ou en GET sur un champ de formulaire :
```htmlmixed=
<input type="text" name="NOMDEVARIABLE">
```

L'id est un identifiant unique pouvant être utile en html (pour relier un label à un input par exemple) et en css ou en js pour cibler un élément

## Notions principales

- Media Query

- Images fluides

- Grilles fuildes

## Meta viewport

```htmlmixed=
<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```
## Unités



| Unité | Description | Doc |
| -------- | -------- | -------- |
| px     | Taille en pixels     | [Doc](https://developer.mozilla.org/fr/docs/Glossary/CSS_pixel)     |
| %     | Pourcentage de la taille du parent     | [Doc](https://developer.mozilla.org/fr/docs/Web/CSS/percentage)     |
| vw, vh     | Visual width, visuel height, pourcentage de la taille de la fenêtre     | [Doc](https://developer.mozilla.org/fr/docs/Web/CSS/length)     |
| rem     | Taille en fonction de la taille de la police du document     | [Doc](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Values_and_units)     |
| em     | Taille en fonction de la taille de la police du parent     | [Doc](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Values_and_units)     |
| fr     | Taille uniquement disponible avec le `display : grid`, correspond à 100% de l'espace disponible     | [Doc](https://mozilladevelopers.github.io/playground/css-grid/04-fr-unit/)     |


## Display

### Flex

> Grille fluide par défaut, plus compact que le display grid

### Grid

> Grille fixe personnalisable

## Box-Sizing

> Sert à définir si les tailles s'apploquent en plus du padding, ou ne le prennent pas en compte.

## Frameworks CSS

### Frameworks populaires
- Bootstrap
- Tailwind
- Semantic
- Foundation (deprécié)
- Materialize
- Bulma

## Exercices

### Exercice 1

Dupliquer la `<div id="grid">` et changer l'id de la nouvelle.
En utilisant `display: flex`, vous devez arriver au même résultat que la précédente div.


### Exercice 2

Dans media.html, faire en sorte qu'une image couvre l'integralité de la fenetre en permanence.

### Exercice 3

Dans un fichier existant ou un nouveau fichier, créez un menu html css basique (non responsive)

### Exercice 4

Rendre le template téléchargé responsive

### Exercice 5

Reproduire avec Bootstrap les 2 templates (ex.png et ex2.png)

### Exercice 6

Reproduire la disposition du template html utilisé au jour 1 avec un framework css de votre choix.

# Javascript

## Les environnements utilisants JavaScript

- Navigateur Web
- Suite adobe
- Serveurs NodeJS
- Mozilla Firefox et Thunderbird
- SVG

## Les bases

### Déclaration

Afficher dans la console
```js
console.log('Hello World');
```

Déclarer une variable
```js
let a = 1;
var b = 2;

// On ne peut pas redéclarer une variable définie avec let, au contraire de var. Il faut donc essayer d'utiliser let au maximum pour faciliter le débug.
```

Déclarer des variables à la chaîne
```js
let a = 1,
    b = 2,
    c = 3;
```

Déclarer une constante
```js
const A = 1;
```

Les types de donnée
- string
- number
- boolean
- undefined
- object
- array

### Opérateurs

#### Opérateurs de calcul
- `+`
- `-`
- `*`
- `/`
- `%`
- `++`
- `--`
- `**`

#### Opérateurs de comparaison
- `==`
- `>=`
- `!=`
- `<=`
- `===`
- `!==`
- `<`
- `>`

#### Opérateurs de condition
- `&&`
- `^^`
- `||`

### Portée des variables

Toutes les variables sont accessibles dans leur scope et les scopes inférieurs uniquement.

### Structures de contrôle

#### Conditionnelles
```js
if (a === b) {
    console.log('a egal b');
}
else if (a === c) {
    console.log('a egal c');
}
else {
    console.log('pas égal');
}

switch (a) {
    case 12:
        console.log('douze');
        break;

    case 11:
        console.log('onze');
        break;

    default:
        console.log('pas egal à onze ou douze');
        break;
}
```

#### Itératives

```js
while (condition) {
    operation
}

for (let i = 0; i < 10; i++) {
    operation
}

for (let element in array) {
    console.log(element)
}

array.forEach(element => {
    console.log(element)
});
```

### Fonctions


#### Fonction nommée
```js
function nomDeLaFonction (a, b = 10) {
    return a + b;
}

nomDeLaFonction(10);
```

### Sucres syntaxiques

#### Ternaires
```js
if (a == b) {
    c = true;
}
else {
    c = false
}

c = a == b ? true : false
VARIABLE = CONDITION ? VALEUR SI VRAI : VALEUR SI FAUX
```

#### Fonction fléchée anonyme
```js
() => {
    actions();
}
```

#### Fonction anonyme auto invoquée
```js
(function () {
    actions();    
})
```

#### Fonction anonyme
```js
function () {
    actions();
}
```

#### Fonction anonyme stockée
```js
let variable = function () {
    actions();
}
```

#### Fonction nommée stockée
```js
let variable = function functionName () {
    actions();
}
```

#### Décomposition
```js
let x, y, rest;
[x, y] = [10, 20];
[x, y, ...rest] = [10, 20, 30, 40, 50, 06, 90];
```

### Console

```js
console.log(variable ou valeur);
console.debug(variable ou valeur);
console.info(variable ou valeur);
console.error(variable ou valeur);
```

### Timeout et Interval

```js
let timeout = setTimeout(() => {
    console.log('test');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout);
}, 1500);

let interval = setInterval(() => {
    console.log('testInt');
}, 3000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);
```

## Interaction avec le DOM

### Selectionner un élément avec son id
```js
document.getElementById('id');
document.querySelector('#id');
```

### Selectionner des éléments avec leur classe
```js
document.getElementsByClassname('classe');
document.querySelectorAll('.classe');
```

#### Classlist
la propriété classlist permet d'interagir avec les classes d'un élément :
```js
// Ajouter une classe
element.classlist.add('classe');

element.classlist.contains('classe')
// Retourne true si l'element possède la classe donnée en paramètre

// Supprimer une classe
element.classlist.remove('classe')
```

### Ajouter, supprimer, déplacer un élément

```js
//Ajouter un élément
document.body.appendChild(element);

//Ajouter n'importe quoi
document.body.append(anything);

//Supprimer un élément
element.remove();
```
> Pour déplacer un élément, il suffit de le stocker dans une variable, de le supprimer, puis de l'ajouter où on le souhaite.

### Affecter le css d'un élément

```js
element.style.color = 'red'
```

### children et parent

```js
element.parent
//retourne l'element parent de element
```

```js
element.children
//retourne une collection HTML contenant les enfants de element
```


### NextSibling et PreviousSibling

```js
element.nextElementSibling
//retourne l'element voisin suivant de element
```

```js
element.previousElementSibling
//retourne l'element voisin précédent de element
```

## Ecouteurs d'évenement (eventListener)

Liste des listener les plus utilisés :
- mousemove
- onclick / mousedown
- hover
- keypress
- loaded
- scroll
- drag
- mouseout / mousein
- focus

Pour écouter un évènement
```js
element.addEventListener('TYPE', FONCTION());
```

### Les fonctions preventDefault() et stopPropagation()

```js
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //effectuer nos vérifications sur le formulaire
    //si nos vérification son justes alors on envoi le formulaire
    form.submit();
});
```

## Programmation Orientée Objet

### Définir un objet litéral

```js
let personnage = {
    pv: 10,
    pa: 12,
    pm: 6,
    attaque: function () {
        console.log('Personnage attaque avec ' + (this.pa / 5) + ' points de dégâts.');
    }
}
```

#### Property Shorthand

```js
let pv = 10, pa = 12, pm = 6;
let perso = {pv, pa, pm};
```

### Déclarer une Classe

> Une classe est un "schéma" d'objet réutilisable.

```js
class Personnage {
    constructor(arg1, arg2, ...) {
        //Les arguments sont optionnels et permettent de passer des valeurs à notre instance d'objet lorsque l'on va l'instancier
        this.nom = arg1;
        this.classe =arg2;
    }

    attaque (cible) {
        console.log(
            this.nom + " attaque " + cible.nom
        );
    }
}
```

### Instancier un objet

```js
let joueur1 = new Personnage ('Georges', 'Guerrier');
```

## Exercices

### Exercice 1

Créer une fonction qui prend 1 paramètre x et qui affiche dans la console un sapin de x hauteur

```js
fonctionSapin(6);
```
```shell
     o
    ooo
   ooooo
  ooooooo
 ooooooooo
ooooooooooo
     |
```

### Exercice 2

Dans le template html copié, reliez un script js puis :
- Supprimer le footer
- Ajouter un élément au menu
- Mettre tous les paragraphe en rouge
- Grossir la taille d'un titre sur deux
- Mettre le fond en noir et tous les textes noir en blanc
- Mettre le formulaire de newsletter en haut de la page

### Exercice 3

Lorsqu'un pesonnage attaque un autre personnage et que ces points de vie atteignent 0 ou moins, l'objet du personnage cible doit être détruit et une phrase annonçant sa mort doit apparaitre.

~~BONUS : l'annonce de la mort ne doit pas être déclanchée manuellement.~~

### Exercice 4

Valider le formulaire en JS (valider le format des deux champs, le nom doit comporter au moins 4 caractères, et l'email doit être valide);

BONUS : Les champs invalides doivent être mis en avant (ex : bordure rouge)

### Exercice 5

Réordonner une liste avec du drag & drop

### Projet

En solo ou en équipe de 4 maximum, choisissez un exercice :

- Reprendre le code sur la POO (avec la classe Personnage) et en faire un jeu jouable dans le navigateur (avec interractions et dynamisme)

- Créer un jeu / site interractif avec Javascript, ça peut aller d'une reproduction de Spotify jusqu'à un puissance 4 contre une IA.

# Autre

## Commandes utiles

### Résoudre les problème d'authorisation d'execution de script sur windows

Lancez la commande suivant dans un cmd / powershell en administrateur
```shell=
Set-ExecutionPolicy RemoteSigned
```

#### Regex email

```re
^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
```