# Marathon

![marathon_img](https://cdn.pixabay.com/photo/2016/01/19/15/19/street-marathon-1149220_1280.jpg)

## Énoncé

Le marathon est une épreuve sportive où les participants doivent parcourir 42 kilomètres. Lors d'une soirée pizza avec vos amis, vous discutez du prochain marathon qui se tiendra dans votre ville. Vos amis sont convaincus que vous n'êtes pas capable de terminer la course et vous, vous leur jurez que vous êtes sûr(e) de finir dans les 100 premiers.
Les paris sont lancés :

* si vous terminez dans le top 100, vous gagnez 1 000 euros ;
* si vous terminez le marathon, vous gagnez 100 euros ;
* si vous ne terminez pas le marathon, vous aurez juste perdu votre crédibilité.

Vous passez la ligne de départ à une certaine place, et tous les kilomètres, vous faites le point sur le nombre de personnes qui vous ont dépassées et celles que vous avez dépassées pour connaitre votre classement.

Dans ce challenge, on considère que le marathon fait exactement 42km et que si vous terminez après la 10 000ème place, cela veut dire que vous avez abandonné.

## Objectif

Vous devez déterminer le montant gagné lors de votre pari.

## Format des données

### Entrée

Ligne 1 : un entier compris entre 1 et 20 000 correspondant à votre classement lorsque vous passez la ligne de départ.
Lignes 2 à 43 : deux entiers séparés par un espace représentant respectivement les personnes vous ayant dépassé(e) et celles que vous avez dépassées pour un kilomètre donné.

### Sortie

Un entier correspondant au montant gagné lors de votre pari. Si vous ne gagnez rien, renvoyez la chaîne de caractères KO.
