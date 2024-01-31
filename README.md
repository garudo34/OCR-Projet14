![HRnet](/public/logo.png)

# HRnet

## Description :

Projet réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez [OpenClassrooms](https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react)

> Faites passer une librairie jQuery vers React.
>
> #### Compétences évaluées :
>
> - Analyser la performance d'une application web
> - Déployer une application front-end
> - Programmer en JavaScript
> - Utilisation d'un gestionnaire d'état
> - Refondre une application pour réduire la dette technique

### Contexte du projet :

Vous travaillez pour le département technologique d'une grande société financière, WealthHealth.

Cette société utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne. Votre équipe de développement s'efforce depuis un certain temps déjà de mettre à niveau l'application.

### Objectifs :

- Convertir l'ensemble du projet en React.
  - Faire une nouvelle version des pages "Create Employee" et "Employee List".
  - Ajouter un système de gestion d'état.
  - S'assurer que tout est cohérent au niveau du style. Pour cela, il n'est pas obligé de refaire le design de l'application, mais s'il faut changer le style pour quelque chose de plus moderne, cela est bienvenu.
- Convertir l'un des quatre plugins jQuery actuels en librairie React. Remplacer les trois plugins jQuery restants par des composants React dans l'application.
  - Ne convertir que le code qui traite de la fonctionnalité réelle de l'interface utilisateur du plugin.
  - Publier le composant React sur npm sous forme de package ou sur Github.
- Effectuer des tests de performance Lighthouse afin de mesurer des données quantifiables (ex. : temps de chargement des pages, appels réseau) en comparant l'ancienne et la nouvelle application.

## Installation :

1. Cloner le repository:

- `git clone https://github.com/garudo34/hrnet.git`

2. Installer toutes les dépendances pour le front-end:

- `npm install` ou `yarn`

3. Lancer le front-end:

- `npm start` ou `yarn start`

Le front-end sera lancé à l'URL:
`http://localhost:3000/`.

## Ressources :

- [React 18](https://fr.reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [Prop-types](https://www.npmjs.com/package/prop-types)
- [Redux](https://redux.js.org/)
- [JSDoc](https://jsdoc.app/)
- [Better-Docs](https://www.npmjs.com/package/better-docs) - si problème de dépendances `npm i --legacy-peer-deps better-docs`
- [Redux](https://redux.js.org/)
- [React Data Table Component](https://www.npmjs.com/package/react-data-table-component)
- [React Date Picker](https://www.npmjs.com/package/react-datepicker)
- [React-Select](https://www.npmjs.com/package/react-select)
- [HRnet-modal-library](https://www.npmjs.com/package/hrnet-modal-library) - **Conversion personnel du plugin JQuery-modal en React**
