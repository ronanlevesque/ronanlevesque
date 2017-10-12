---
date: 2013-05-13T00:00:00Z
description: Gérer la propagation d'événement avec JS et jQuery
tags:
- javascript
title: return false VS e.preventDefault
url: "/articles/return-false-vs-e-preventdefault"
---

J'ai été confronté récemment à un problème plutôt pénible en écrivant une fonction jQuery pour un projet en cours, problème lié à l'utilisation de `return false`. Pour rappel celui-ci permet d'empêcher le comportement par défaut de l'objet appelé par une fonction, par exemple il évitera un retour en haut de page si on utilise un `<a href="#">`. Le hic, c'est qu'il bloquera du coup la propagation à l'utilisation d'événements clicks additionnels.

---

Prenons un exemple&nbsp;:

    $('a.blabla').click(function(){
      // action
      return false;
    });

    $('a').click() {
      // action
    }

Dans cet exemple, à cause du `return false` la deuxième fonction ne pourra pas être déclenchée. On pourrait contourner le problème en le supprimant, mais on se retrouve avec un rétablissement du comportement de l'ancre par défaut, plutôt pénible. J'ai heureusement trouvé une solution simple sur [firebreaksice.com](http://firebreaksice.com/avoid-return-false-in-jquery-click-bindings/), d'où j'ai tiré mon exemple. Il suffit de modifier notre code pour le faire ressembler à ceci&nbsp;:

    $('a.blabla').click(function(e){
      e.preventDefault();
      // action
    });

    $('a').click(e) {
      e.preventDefault();
      // action
    }

En fait on rajoute un paramètre événement à chaque fonction, puis on appelle ensuite tout simplement `preventDefault()` avec, ce qui permet d'éviter le comportement par défaut de notre événement tout en évitant que cela soit aussi propagé à la fonction suivante.
