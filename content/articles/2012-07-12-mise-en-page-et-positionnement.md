---
date: 2012-07-12T00:00:00Z
description: Présentation des différentes possibilités de positionnements d'éléments
  avec CSS
tags:
- css
- html
title: Mise en page et positionnement
---

Il existe plusieurs manières de positionner différents éléments au sein d'une page. Certaines, telles que l'utilisation des tableaux sont décriées, à tort ou à raison selon les points de vue, d'autres sont fortement plébiscitées et très souvent utilisées. Le but de cet article et de faire un point sur les différentes méthodes mises à notre disposition, et de finir par un cas pratique centré autour de la `position: absolute`.

---

## Récapitulatif des différents positionnements

### Les éléments flottants

Pour rappel, voici la définition de la propriété `float`, traduite d'après [w3.org](http://www.w3.org/TR/CSS2/visuren.html#floats)&nbsp;:

> Un élément flottant est une boîte qui est déplacée vers la gauche ou vers la droite sur la ligne actuelle. [...] L'élément sera décalé vers la gauche ou la droite jusqu'à toucher le bord de son contenant.

En partant de cette définition, il est assez facile de construire des templates de page à 2 ou 3 colonnes, voire plus. Il suffira simplement de faire "flotter" les colonnes les unes à côté des autres, en prenant bien soin d'appliquer un `clear: both` ou une autre méthode de clearfix afin que le contenu de la page reprenne son comportement normal en-dessous des éléments flottants.

Cette technique de mise en page est fortement plébiscitée, je l'utilisais d'ailleurs sur la version précédente de mon blog pour afficher ma colonne de contenu principal juxtaposée à la colonne de navigation située à droite. Elle est relativement simple à mettre en place, et joue bien son rôle - ou tout du moins le rôle qu'elle remplit aujourd'hui et [qui n'était pas forcément le sien](http://www.alsacreations.com/article/lire/972-float-le-grand-bluff.html) au départ.

Pourtant, malgré tout ses avantages, elle est connue pour créer de nombreux bugs d'affichage (Guillotine bug, escaping floats bug, IE6 Peekaboo bug, double floated-margin bug et bien d'autres&nbsp;: voici une liste exhaustive de ces [bugs](http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/)).

### Inline-block

La valeur `inline-block` de la propriété `display` peut représenter une bonne alternative à l'utilisation des `float`. Elle est moins connue et utilisée que cette dernière, et pour cause&nbsp;: elle n'est pas reconnue par Internet Explorer 7 et versions précédentes. Elle présente pourtant de clairs avantages. Toujours d'après [w3.org](http://www.w3.org/TR/CSS2/visuren.html#propdef-display)&nbsp;:

> La valeur `inline-block` permet de générer un contenant fonctionnant en ligne, mais dont le contenu sera formaté comme une boîte de type "bloc".

L'intérêt de l'utilisation de `inline-block` est que, contrairement aux éléments en ligne, ils permettront, comme sur un élément de type bloc, que l'on puisse agir sur leur taille, marge etc.

Par ailleurs, le problème rencontré sur IE7 et versions inférieures pourra être facilement corrigé grâce à la mise en place de commentaires conditionnels ciblant ces navigateurs et en appliquant à l'élément concerné le CSS suivant&nbsp;:

    #bloc {
      zoom: 1;
      display: inline;
    }

Grâce au `zoom:1;` l'élément en question se comportera comme un élément de type `inline-block`.

### Les tableaux

A l'origine, les tableaux avaient été créés pour présenter des données tabulaires. Logique, non&nbsp;? Ils ont pourtant été détournés de leur premier usage afin de proposer des solutions de mise en page alors que le CSS n'existait pas encore. Cette technique semble pourtant être devenue obsolète de nos jours pour des raisons à mes yeux évidentes&nbsp;:

* Problèmes d'accessibilité&nbsp;: la lecture d'un tableau par un outil de lecture ne se fera pas de manière naturelle si il est utilisé pour une mise en page mais ligne par ligne, pouvant ainsi engendrer de nombreux soucis de compréhension.
* Problèmes de mise à jour&nbsp;: une mise en page en tableaux est particulièrement fastidieuse à changer, de par la complexité de sa construction.
* Problèmes de poids&nbsp;: les tableaux alourdiront vos pages car ils nécessitent de nombreuses balises dans leur construction.
* Problèmes de sémantique&nbsp;: à l'origine, ils sont créés pour présenter des données tabulaires, en les utilisant pour la mise en page d'un site ils sortent de leur rôle initial.

Mon point de vue est qu'il faut limiter dans la mesure du possible l'utilisation des tableaux à leur rôle premier, à savoir la présentation de données tabulaires.

### Position absolue

La valeur `absolute` de la propriété `position` est une autre alternative pour positionner un élément. Une fois de plus, reprenons la définition donnée par [w3.org](http://www.w3.org/TR/CSS2/visuren.html#absolute-positioning)&nbsp;:

> Dans le modèle de la position absolue, une boîte est retirée du flux normal de la page. Son contenu ne s'écoulera pas autour des autres boîtes, mais pourra les masquer ou être masqué (`z-index`).

Un élément positionné en absolu se positionne par rapport à la page html par défaut, ou par rapport à son parent le plus proche, si celui-ci s'est vu assigner une position autre que `static` (positionnement par défaut).

## Position absolue&nbsp;: un exemple concret

Cette méthode de positionnement semble être peu appréciée de la plupart des intégrateurs. En effet, des outils d'édition de contenu de type WYSIWYG (Dreamweaver) l'utilisent un peu à tort et à travers, lui attribuant par défaut certaines valeurs qui semblent en faire un outil peu flexible. Raphaël Goetter résume assez bien la chose dans son article [défendant la position absolue](http://www.alsacreations.com/actu/lire/104-rendez-moi-ma-position-absolue.html/).

Pour ma part j'ai très souvent recours à cette méthode pour deux raisons principales&nbsp;:

* Elle est simple à visualiser dans l'espace (imaginons qu'on cherche tout simplement à disposer divers éléments au sein d'un même bloc).
* Elle génère à ma connaissance peu, voire pas de bugs, même sur d'anciens navigateurs.

Prenons un cas concret&nbsp;: nous souhaitons construire un bloc mettant en avant une offre promotionnelle pour la vente d'un de mes splendides dessins avec image, titre, court descriptif, prix et _call to action_. Le résultat souhaité est visible ci-dessous.

![Wire 2](/assets/img/wire-1.jpg)

Nous avons donc 6 éléments&nbsp;: le bloc "conteneur" et les 5 éléments que nous souhaitons faire apparaître dedans&nbsp;:

![Wire 2](/assets/img/wire-2.jpg)

Pour arriver à ce résultat, on utilisera le code suivant&nbsp;:

    #conteneur {
      width: 500px;
      height: 200px;
      border: 1px solid #ccc;
      position: relative;
    }

    #image, #conteneur h2, #conteneur p, #prix, #commander {position: absolute;}

    #image {
      width: 176px;
      height: 176px;
      top: 12px;
      left: 12px;
    }

    #conteneur h2 {
      margin: 0;
      padding: 0;
      top: 10px;
      left: 200px;
    }

    #conteneur p {
      margin: 0;
      padding: 0;
      top: 50px;
      left: 200px;
      width: 270px;
    }

    #prix {
      top: 170px;
      left: 200px;
    }

    #commander {
      padding: 0.5em;
      bottom: 12px;
      right: 12px;
      color: #fff;
      background: #0087ef;
    }

<p></p>

    <div id="conteneur">
      <img src="image.jpg" id="image" alt="image" />
      <h2>Fan Art&nbsp;: the Wire</h2>
      <p>Découvrez à un tarif défiant toute concurrence etc.</p>
      <span id="prix">2500 €</span>
      <div id="commander">JE COMMANDE ></div>
    </div>

Comme vous pouvez le voir, le markup HTML est relativement simple, clair et ordonné dans sa présentation. On peut ensuite jouer avec les propriétés `top`, `bottom`, `left` et `right` pour déplacer les éléments et les ajuster comme on le souhaite.

A mes yeux l'utilisation de `position:absolute;` est la solution idéale dans ce cas précis, où le but est de disposer plusieurs éléments au sein d'un contenu principal dont on connait les dimensions. Par ailleurs, j'ai utilisé dans mon exemple des valeurs absolues pour dimensionner les éléments mais rien n'empêche d'utiliser des `em` ou même des pourcentages, permettant ainsi d'adapter notre design en fonction des résolutions d'écran.

## TL;DR&nbsp;: en conclusion...

Pour clore le sujet, il faut donc retenir qu'il existe plusieurs moyens de positionner nos éléments au sein d'une page, certains étant pour moi plus pertinents que d'autres. La mise en page sous forme de tableaux parait aujourd'hui plutôt obsolète, même si elle peut s'avérer une solution viable dans certains cas précis. `Float` est une solution populaire, quoique victime de nombreux bugs. La propriété `display:inline-block` reste trop peu utilisée, malgré d'évidents avantages en terme d'utilisation. Enfin, la `position:absolute`, souvent décriée, reste un outil extrêmement intéressant qu'il ne faudrait surtout pas enterrer trop vite.
