---
date: 2012-07-12T00:00:00Z
description: Présentation des différentes possibilités de positionnements d'éléments
  avec CSS
tags:
- css
- html
title: Mise en page et positionnement
---

Il existe plusieurs manières de positionner différents éléments au sein d'une page. Certaines, telles que l'utilisation des tableaux sont décriées, à tort ou à raison selon les points de vue, d'autres sont fortement plébiscitées et très souvent utilisées. Le but de cet article et de faire un point sur les différentes méthodes mises à notre disposition, et de finir par un cas pratique centré autour de la <code>position: absolute</code>.

---

## Récapitulatif des différents positionnements

### Les éléments flottants

Pour rappel, voici la définition de la propriété <code>float</code>, traduite d'après <a href="http://www.w3.org/TR/CSS2/visuren.html#floats">w3.org&nbsp;<sup>EN</sup></a>&nbsp;:

> Un élément flottant est une boîte qui est déplacée vers la gauche ou vers la droite sur la ligne actuelle. [...] L'élément sera décalé vers la gauche ou la droite jusqu'à toucher le bord de son contenant.

En partant de cette définition, il est assez facile de construire des templates de page à 2 ou 3 colonnes, voire plus. Il suffira simplement de faire "flotter" les colonnes les unes à côté des autres, en prenant bien soin d'appliquer un <code>clear: both</code> ou une autre méthode de clearfix afin que le contenu de la page reprenne son comportement normal en-dessous des éléments flottants.

Cette technique de mise en page est fortement plébiscitée, je l'utilisais d'ailleurs sur la version précédente de mon blog pour afficher ma colonne de contenu principal juxtaposée à la colonne de navigation située à droite. Elle est relativement simple à mettre en place, et joue bien son rôle - ou tout du moins le rôle qu'elle remplit aujourd'hui et <a title="Article d'Alsacréations sur les floats" href="http://www.alsacreations.com/article/lire/972-float-le-grand-bluff.html">qui n'était pas forcément le sien</a> au départ.

Pourtant, malgré tout ses avantages, elle est connue pour créer de nombreux bugs d'affichage (Guillotine bug, escaping floats bug, IE6 Peekaboo bug, double floated-margin bug et bien d'autres&nbsp;: voici une liste exhaustive de ces <a href="http://coding.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/">bugs&nbsp;<sup>EN</sup></a>).

### Inline-block

La valeur <code>inline-block</code> de la propriété <code>display</code> peut représenter une bonne alternative à l'utilisation des <code>float</code>. Elle est moins connue et utilisée que cette dernière, et pour cause&nbsp;: elle n'est pas reconnue par Internet Explorer 7 et versions précédentes. Elle présente pourtant de clairs avantages. Toujours d'après <a href="http://www.w3.org/TR/CSS2/visuren.html#propdef-display">w3.org&nbsp;<sup>EN</sup></a>&nbsp;:

> La valeur <code>inline-block</code> permet de générer un contenant fonctionnant en ligne, mais dont le contenu sera formaté comme une boîte de type "bloc".

L'intérêt de l'utilisation de <code>inline-block</code> est que, contrairement aux éléments en ligne, ils permettront, comme sur un élément de type bloc, que l'on puisse agir sur leur taille, marge etc.

Par ailleurs, le problème rencontré sur IE7 et versions inférieures pourra être facilement corrigé grâce à la mise en place de commentaires conditionnels ciblant ces navigateurs et en appliquant à l'élément concerné le CSS suivant&nbsp;:

<pre><code class="css">#bloc {
  zoom: 1;
  display: inline;
}
</code></pre>

Grâce au <code>zoom:1;</code> l'élément en question se comportera comme un élément de type <code>inline-block</code>.

### Les tableaux
A l'origine, les tableaux avaient été créés pour présenter des données tabulaires. Logique, non&nbsp;? Ils ont pourtant été détournés de leur premier usage afin de proposer des solutions de mise en page alors que le CSS n'existait pas encore. Cette technique semble pourtant être devenue obsolète de nos jours pour des raisons à mes yeux évidentes&nbsp;:

* Problèmes d'accessibilité&nbsp;: la lecture d'un tableau par un outil de lecture ne se fera pas de manière naturelle si il est utilisé pour une mise en page mais ligne par ligne, pouvant ainsi engendrer de nombreux soucis de compréhension.
* Problèmes de mise à jour&nbsp;: une mise en page en tableaux est particulièrement fastidieuse à changer, de par la complexité de sa construction.
* Problèmes de poids&nbsp;: les tableaux alourdiront vos pages car ils nécessitent de nombreuses balises dans leur construction.
* Problèmes de sémantique&nbsp;: à l'origine, ils sont créés pour présenter des données tabulaires, en les utilisant pour la mise en page d'un site ils sortent de leur rôle initial.

Mon point de vue est qu'il faut limiter dans la mesure du possible l'utilisation des tableaux à leur rôle premier, à savoir la présentation de données tabulaires.

### Position absolue

La valeur <code>absolute</code> de la propriété <code>position</code> est une autre alternative pour positionner un élément. Une fois de plus, reprenons la définition donnée par <a href="http://www.w3.org/TR/CSS2/visuren.html#absolute-positioning">w3.org&nbsp;<sup>EN</sup></a>&nbsp;:

> Dans le modèle de la position absolue, une boîte est retirée du flux normal de la page. Son contenu ne s'écoulera pas autour des autres boîtes, mais pourra les masquer ou être masqué (<code>z-index</code>).

Un élément positionné en absolu se positionne par rapport à la page html par défaut, ou par rapport à son parent le plus proche, si celui-ci s'est vu assigner une position autre que <code>static</code> (positionnement par défaut).

## Position absolue&nbsp;: un exemple concret

Cette méthode de positionnement semble être peu appréciée de la plupart des intégrateurs. En effet, des outils d'édition de contenu de type WYSIWYG (Dreamweaver) l'utilisent un peu à tort et à travers, lui attribuant par défaut certaines valeurs qui semblent en faire un outil peu flexible. Raphaël Goetter résume assez bien la chose dans son article <a href="http://www.alsacreations.com/actu/lire/104-rendez-moi-ma-position-absolue.html/">défendant la position absolue</a>.

Pour ma part j'ai très souvent recours à cette méthode pour deux raisons principales&nbsp;:

* Elle est simple à visualiser dans l'espace (imaginons qu'on cherche tout simplement à disposer divers éléments au sein d'un même bloc).
* Elle génère à ma connaissance peu, voire pas de bugs, même sur d'anciens navigateurs.

Prenons un cas concret&nbsp;: nous souhaitons construire un bloc mettant en avant une offre promotionnelle pour la vente d'un de mes splendides <a title="Visitez !&nbsp;:)" href="http://www.eskiiss.fr">dessins</a> avec image, titre, court descriptif, prix et <em>call to action</em>. Le résultat souhaité est visible ci-dessous.

<img src="/assets/img/wire-1.jpg" alt="wire 1" style="border: 1px solid #ddd; "/>

Nous avons donc 6 éléments&nbsp;: le bloc "conteneur" et les 5 éléments que nous souhaitons faire apparaître dedans&nbsp;:

<img src="/assets/img/wire-2.jpg" alt="wire 2" style="border: 1px solid #ddd;" />

Pour arriver à ce résultat, on utilisera le code suivant&nbsp;:

<pre><code class="css">#conteneur {
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
</code></pre>

<pre><code class="html">&lt;div id="conteneur"&gt;
	&lt;img src="image.jpg" id="image" alt="image" /&gt;
	&lt;h2&gt;Fan Art&nbsp;: the Wire&lt;/h2&gt;
	&lt;p&gt;Découvrez à un tarif défiant toute concurrence etc.&lt;/p&gt;
	&lt;span id="prix"&gt;2500 €&lt;/span&gt;
	&lt;div id="commander"&gt;JE COMMANDE &gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>

Comme vous pouvez le voir, le markup HTML est relativement simple, clair et ordonné dans sa présentation. On peut ensuite jouer avec les propriétés <code>top</code>, <code>bottom</code>, <code>left</code> et <code>right</code> pour déplacer les éléments et les ajuster comme on le souhaite.

A mes yeux l'utilisation de <code>position:absolute;</code> est la solution idéale dans ce cas précis, où le but est de disposer plusieurs éléments au sein d'un contenu principal dont on connait les dimensions. Par ailleurs, j'ai utilisé dans mon exemple des valeurs absolues pour dimensionner les éléments mais rien n'empêche d'utiliser des <code>em</code> ou même des pourcentages, permettant ainsi d'adapter notre design en fonction des résolutions d'écran.

## TL;DR&nbsp;: en conclusion...
Pour clore le sujet, il faut donc retenir qu'il existe plusieurs moyens de positionner nos éléments au sein d'une page, certains étant pour moi plus pertinents que d'autres. La mise en page sous forme de tableaux parait aujourd'hui plutôt obsolète, même si elle peut s'avérer une solution viable dans certains cas précis. <code>Float</code> est une solution populaire, quoique victime de nombreux bugs. La propriété <code>display:inline-block</code> reste trop peu utilisée, malgré d'évidents avantages en terme d'utilisation. Enfin, la <code>position:absolute</code>, souvent décriée, reste un outil extrêmement intéressant qu'il ne faudrait surtout pas enterrer trop vite.
