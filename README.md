# Moovone TestAngular5
Le test contient tous les éléments demandés avec les éléments bonus 
-   ajouter un moteur de recherche
-   ajouter le "order by" au clique sur les labels des colonnes du tableau

[Voir exercice](docs/exercice.md)

## Choix Librairies
Le choix des lib est basé principalement sur la communauté github, le nombre de forks et maintien de celles-ci (last commit).

La cohérence par rapport à la demande fonctionnelle est également déterminante.

[Liste des librairies](docs/libs.md)

## Installation du projet
git clone git@github.com:llellouche/test-angular5.git
npm install

Démarrer le projet : ng serve
Lancer les tests : ng test --code-coverage

**Couveture à 81.93%**

**Couveture minimum par fichier à ~50%**

## Application
L'application est composée de 3 routes:
- Accueil : '/'
- Datatable Albums: '/albums'
    - Modale : détails album
    - Modale : détails user
    - Modale : Slide show des photos de l'album
- Page Not Found: n'importe quelle autre route

[Modèle et Architecture](docs/archi.md)
