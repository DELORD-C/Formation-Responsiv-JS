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

## Rappels html

### Différence entre name et id

L'attribut `name` sert uniquemet à définir le nom de la variable qui sera envoyé en POST ou en GET sur un champ de formulaire :
```html
<input type="text" name="NOMDEVARIABLE">
```

L'id est un identifiant unique pouvant être utile en html (pour relier un label à un input par exemple) et en css ou en js pour cibler un élément

## Notions principales

- Media Query

- Images fluides

- Grilles fuildes

## Meta viewport

```html
<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
```
## Unités

px : pixels
% : pourcentage de la taille du parent
vw, vh : visual width, visuel height, pourcenntage de la taille de la fenêtre
em : taille en fonction de la taille de la police du parent
rem : taille en fonction de la taille de la police du document
fr : taille uniquement disponible avec le `display : grid`, correspond à 100% de l'espace disponible

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
- Foundation
- Materialize


## Exercices

### 1

Dupliquer la `<div id="grid">` et changer l'id de la nouvelle.
En utilisant `display: flex`, vous devez arriver au même résultat que la précédente div.


### 2

Dans media.html, faire en sorte qu'une image couvre l'integralité de la fenetre en permanence.

### 3

Dans un fichier existant ou un nouveau fichier, créez un menu html css basique (non responsive)

### 4

Rendre le template téléchargé responsive

### 5

Reproduire avec Bootstrap les 2 templates (ex.png et ex2.png)