---
date: 2013-11-26T00:00:00Z
description: Description de ma première expérience de construction d'une web app avec
  AngularJS
tags:
- javascript
- outils
title: Premiers pas avec AngularJS
---

J'ai commencé à m'intéresser il y a peu à [AngularJS](http://angularjs.org/), un framework JavaScript "client-side" orienté MVC/MVVM dont j'entends beaucoup parler en ce moment. Angular est parfait pour créer des SPA (single pages apps), voire même des sites complets. J'ai voulu tester son potentiel en créant pour l'occasion une app de A à Z.

---

Attention, cet article n'est pas un tutoriel. Je cherche simplement à décrire ici l'app que j'ai créée, sa mise en place ainsi que les obstacles que j'ai rencontrés.

## Angular, c'est quoi&nbsp;?

Angular est comme précisé plus haut un framework JS MVC. Il est développé en open-source par Google. L'explication donnée par [Wikipédia](http://fr.wikipedia.org/wiki/AngularJS) me paraît excellente pour mieux saisir son concept&nbsp;:

<blockquote><p>Angular adapte et étend le HTML traditionnel pour servir le contenu dynamique de façon améliorée grâce à un data-binding bidirectionnel qui permet la synchronisation automatique des modèles et des vues.</p></blockquote>

Pour résumer cela&nbsp;: la vue mettra à jour le modèle, et vice-versa. Angular a baptisé ça "<em>Two-way Data Binding</em>".

De plus, grâce à l'injection de dépendances, beaucoup de fonctionnalités traditionnellement gérées côté serveur vont pouvoir l'être côté client, allégeant ainsi le code du premier pour des applications plus légères et rapides.

## Moovies

L'idée que j'avais en tête était de créer <strong>Moovies</strong>, une app qui permettrait de lister les films que ma copine ou moi souhaitions voir ainsi qu'un lien renvoyant vers la fiche de chaque film. <strong>Moovies</strong> devait remplir les critères suivants&nbsp;:

* recherche par titre parmi la liste des films affichés
* possibilité de les trier alphabétiquement ou par catégorie
* espace d'administration avec authentification par mail/mot de passe
* ajout, édition ou suppression des films via l'admin.

Le tout étant entièrement managé via Angular, et sans gestion côté serveur. Le résultat est disponible ci-dessous&nbsp;:

<p class="link"><a href="http://ronanlevesque.fr/mv">Voir Moovies en action</a></p>

## Par où commencer&nbsp;?

Pour ceux qui comme moi débutent totalement avec Angular, je pense que l'idéal est de commencer par le [tutoriel officiel](http://docs.angularjs.org/tutorial). Je l'ai trouvé très clair et détaillé; il permet également de comprendre la philosophie d'Angular ainsi que de saisir ses concepts basiques.

Le site [egghead.io](http://egghead.io/lessons) propose aussi des leçons vidéo, allant de cours basiques à des cours avancés. Todd Motto, un spécialiste du sujet, a écrit un article très poussé sur son site, ["Ultimate guide to learning AngularJS in one day"](http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/).

En revanche, j'ai trouvé que la documentation officielle n'était pas si bien documentée que cela en fin de compte. J'ai dû pas mal fouiller, notamment sur [Stackoverflow](http://stackoverflow.com/questions/tagged/angularjs), pour trouver les réponses à certains problèmes complexes que j'avais pu rencontrer.

## La tentation jQuery

Une fois lancé dans la création de mon app, j'ai très vite été tenté de passer par jQuery pour me simplifier la vie lors la manipulation du DOM. En fait, il s'avère que [90% du temps](http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background?rq=1) - voire plus - jQuery n'est pas nécessaire, Angular proposant déjà un très large choix de solutions maison (`ng-click`, `ng-hide`, `ng-show` et j'en passe).

Ceci dit, je dois avouer que j'y ai quand même eu recours à 2-3 reprises. Mais avec le degré de compréhension que j'ai maintenant d'Angular, je pense que pour mon prochain projet ça ne sera même plus nécessaire.

Par ailleurs, pour info Angular embarque par défaut jQuery lite.

## Les bases de données

Angular utilise des données au format JSON comme structure de bases. C'est très pratique, car il est du coup facile d'exporter par exemple des données Excel vers son app.

Pour <strong>Moovies</strong>, la première piste que j'ai suivie a été de créer un tableau de données sur Google Spreadsheets, puis de lier l'un et l'autre (oui, Angular permet de faire ça&nbsp;:)). En fin de compte, cela s'est avéré moyennement intéressant, car pour ajouter ou supprimer un film il fallait à chaque fois repasser par Spreadsheets. Ca s'accordait peu avec mon envie de tout centraliser sur une page.

La deuxième piste a été de passer par [Firebase](https://www.firebase.com), un backend externalisé qui a en plus développé spécifiquement un module pour Angular&nbsp;: [AngularFire](http://angularfire.com/). L'avantage de cette solution, c'est qu'il n'y presque aucun code à écrire, ni aucune gestion à effectuer côté serveur. Son énorme atout, c'est qu'elle permet de créer du "<em>Three-way Data Binding</em>", en ajoutant au <em>Binding</em> d'Angular ses propres données backend. Pour faire simple, une modification dans l'app mettra à jour les bases de données et réciproquement. En gros&nbsp;: surpuissant&nbsp;:)

## Une question de sécurité

<strong>Moovies</strong> contient des données qui n'ont rien de sensible, mais je voulais quand même tester à quel point son niveau de sécurité pouvait être fiable.

La première étape a été de créer un système d'authentification, lié à la base de données que j'avais créée sur Firebase. Une fois ce système mis en place, les options d'édition, d'ajout et de suppression de films ne deviennent disponibles que lorsque l'on est connecté.

Le souci, c'est que n'importe quelle personne ayant une connaissance relative d'Angular aurait pu télécharger localement les fichiers puis modifier mon code pour afficher par défaut les options d'administration, gérées via des directives spécifiques.

Heureusement, AngularFire apporte un degré de protection supplémentaire puisqu'il permet de définir des autorisations de lecture et/ou d'écriture selon le fait que l'utilisateur est authentifié ou non. Avec les paramètres que j'ai définis, sans authentification aucune manipulation des données n'est possible.

## Pour finir...

En guise de conclusion, je trouve que <strong>Moovies</strong>, même si elle reste assez simple en tant qu'app, a été une excellente expérience pour découvrir et comprendre la façon dont Angular fonctionne. Il me reste encore beaucoup à apprendre sur le sujet, mais je suis en tout cas pleinement rassuré sur son potentiel. Le fait qu'il supporte également les [Web Components](http://www.journaldunet.com/developpeur/client-web/web-components-0913.shtml) est très prometteur pour l'avenir.

De plus, comme cette app a été développée pour un usage personnel, j'ai décidé de laisser tomber le support des navigateurs obsolètes et j'ai pu m'amuser au niveau de mon code, par exemple avec du `calc` pour certaines propriétés CSS. Et c'est vraiment rafraîchissant de coder uniquement pour le futur, en oubliant les polyfills&nbsp;:)
