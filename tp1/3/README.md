# Salle au trésor

![treasure_img](https://cdn.pixabay.com/photo/2014/11/01/22/33/gold-513062_1280.jpg)

## Énoncé

Après avoir surmonté un boss difficile de jeu vidéo, il est temps pour vous de récupérer votre récompense : vous arrivez dans une salle au trésor. Dans ce jeu, votre personnage peut ramasser deux sortes d'objets :

* les pièces d'or, qui augmentent votre richesse d'une unité ;
* les multiplicateurs, qui doublent la fortune dont vous disposez au moment de les ramasser. Donc plus vous êtes riche, plus vous vous enrichissez. (Toute ressemblance avec la réalité est une pure coïncidence.)

## Objectif

La salle est représentée par une grille carrée de taille NxN, et vous commencez dans le coin en haut à gauche. L'objectif est de déterminer la séquence de mouvements qui vous permettra de maximiser votre butin.

## Données

### Entrée

Ligne 1 : un entier N compris entre 1 et 20, représentant la taille de la grille.
Lignes 2 à N+1 : les lignes de la carte représentées par des chaînes de N caractères. Les caractères de la ligne sont soit `o` (une pièce), soit `*` (un multiplicateur), soit `.` (vide).

### Sortie

Une chaîne de caractères, indiquant les mouvements successifs à effectuer par votre personnage. Les caractères possibles sont les suivants :

* `^` : déplacement d'une case vers le haut
* `v` : déplacement d'une case vers le bas
* `<` : déplacement d'une case vers la gauche
* `>` : déplacement d'une case vers la droite
* `x` : ramasser l'objet sur la case actuelle

On demande que cette chaîne indique des mouvements légaux : le personnage ne doit pas sortir des bords de la grille, ni tenter de ramasser un objet sur une case ne contenant pas d'objet. (Après avoir été ramassé, un objet disparaît de sa case.) Il faut de plus qu'elle atteigne le score le plus grand possible.

### Exemple

```raw
4
....
o.*o
....
....
```

Une sortie acceptée est `vx>>>x<x` :

* on descend d'une case (`v`) sur la pièce la plus à gauche, puis on la ramasse (`x`) ;
* on se déplace de 3 cases vers la droite, pour atteindre la pièce de droite (en passant au-dessus du `*`, qu'on n'active pas encore);
* on ramasse cette seconde pièce, puis on se déplace vers la gauche sur le multiplicateur, qu'on ramasse à son tour.

Ainsi on obtient un total de 4 pièces (soit (1+1)×2), c'est bien le mieux qu'on puisse faire. Par exemple, si on avait utilisé le multiplicateur avant de récupérer la seconde pièce, on aurait obtenu seulement 3 pièces. Il y a d'autres façons de se déplacer pour finir par avoir 4 pièces, qui sont également des solutions acceptées.
