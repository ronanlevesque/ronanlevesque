---
date: 2015-08-19T00:00:00Z
description: Explications sur la façon dont je structure mon CSS pour une maintenance
  optimale
tags:
- css
title: Nommage et architecture CSS
---

A ma connaissance, il n'y a rien de plus casse-tête côté front que de trouver la bonne structure et le nommage correct pour assurer une maintenabilité et une lisibilité optimales de mes CSS. Certaines méthodologies, comme <abbr title="Block, Element, Modifier">BEM</abbr> ou <abbr title="Structured class names and meaningful hyphens">SUIT</abbr>, permettent cependant de faciliter ça. Je vais décrire ici la façon dont j'ai adapté ces techniques à mon workflow.

---

## Les bases&nbsp;: BEM et SUIT

Si ces deux acronymes ne vous évoquent rien, je vous suggère avant toute chose de lire mon [article](/articles/css-notation-bem/) sur le premier ainsi que la [documentation Github](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) du deuxième.

J'ai pour ma part commencé par utiliser BEM de manière traditionnelle avant d'y incorporer une part de SUIT, ce qui me donnait quelque chose de ce genre&nbsp;:

<pre><code class="css">.blockName {}
.blockName-element {}
.blockName--modifier {}</code></pre>

Je préfère cette syntaxe par rapport au BEM classique, où l'utilisation des <kbd>_</kbd> ne facilite pas vraiment l'édition du nom des classes.

## Pousser plus loin le concept des Modifiers

Le souci avec les <em>Modifiers</em>, c'est qu'ils créent des classes à rallonge, par exemple&nbsp;:

<pre><code class="html">&lt;button class="button button--small button--green button--caps"&gt;</code></pre>

J'ai récemment vu passer un article d'[Envato](http://www.envato.com/) dans lequel était décrit le principe des <em>[Chainable Modifiers](http://webuild.envato.com/blog/chainable-bem-modifiers/)</em>, principe qu'ils ont mis en place pour Envato Market.

En se basant sur cette convention, le code ci-dessus se transformerait en&nbsp;:

<pre><code class="html">&lt;button class="button -small -green -caps"&gt;</code></pre>

C'est quand même plus agréable à lire, non&nbsp;?

Et si vous utilisez Sass, le mettre en place et en assurer la maintenabilité devient un jeu d'enfant.

<pre><code class="scss">.button {
  padding: 2rem;

  &.-small {
    font-size: 1rem;
  }

  &.-green {
    background-color: green;
  }

  &.-caps {
    text-transform: uppercase;
  }
}</code></pre>

## Autres emprunts à SUIT

J'utilise également deux autres conventions provenant de SUIT&nbsp;: les classes utilitaires et les classes d'état.

### Classes utilitaires

Ce sont des classes génériques, identifiables par un préfixe `u-`&nbsp;:

<pre><code class="css">.u-white {}
.u-floatLeft {}
...</code></pre>

### Classes d'état

Celles-ci permettent d'identifier le changement d'état d'un composant; elles sont préfixées par `is-`&nbsp;:

<pre><code class="html">&lt;button class="button is-disabled"&gt;</code></pre>

## Sélecteurs JavaScript

Pour tous les sélecteurs que je vais cibler en JS, j'ajoute une classe (ou une id) préfixée par `js-`. Cette classe ne doit jamais apparaître dans mes CSS afin de maintenir une séparation claire des rôles.

## What's next&nbsp;?

Même si la mise en place de cette méthodologie m'a procuré un gain énorme en termes de maintenabilité et de lisibilité sur des grosses bases de code CSS, elle n'est pas infaillible, et les risques de non-isolation et de spécificité du code existent toujours.

Pour contourner &ndash; entre autres &ndash; ces problèmes, [Glenn Maddern](http://glenmaddern.com/articles/css-modules) a créé un système de [modules CSS](http://glenmaddern.com/articles/css-modules). Grâce à du JS, les styles sont maintenus à leur création dans un <em>scope</em> local qui permet de résoudre les questions de nommage et d'héritage. Malheureusement, cette solution rajoute un niveau de complexité supplémentaire qui risque d'en rebuter certains.

Reste a espérer qu'un standard verra enfin le jour pour corriger ce casse-tête...
