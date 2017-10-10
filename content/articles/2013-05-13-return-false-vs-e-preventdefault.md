---
date: 2013-05-13T00:00:00Z
description: Gérer la propagation d'événement avec JS et jQuery
tags:
- javascript
title: return false VS e.preventDefault
url: "/articles/return-false-vs-e-preventdefault"
---

J'ai été confronté récemment à un problème plutôt pénible en écrivant une fonction jQuery pour un projet en cours, problème lié à l'utilisation de <code>return false</code>. Pour rappel celui-ci permet d'empêcher le comportement par défaut de l'objet appelé par une fonction, par exemple il évitera un retour en haut de page si on utilise un <code>&lt;a href="#"&gt;</code>. Le hic, c'est qu'il bloquera du coup la propagation à l'utilisation d'événements clicks additionnels.

---

Prenons un exemple&nbsp;:

<pre><code class="js">$('a.blabla').click(function(){
  // action
  return false;
});

$('a').click() {
  // action
}
</code></pre>

Dans cet exemple, à cause du <code>return false</code> la deuxième fonction ne pourra pas être déclenchée. On pourrait contourner le problème en le supprimant, mais on se retrouve avec un rétablissement du comportement de l'ancre par défaut, plutôt pénible. J'ai heureusement trouvé une solution simple sur <a href="http://firebreaksice.com/avoid-return-false-in-jquery-click-bindings/">firebreaksice.com</a>, d'où j'ai tiré mon exemple. Il suffit de modifier notre code pour le faire ressembler à ceci&nbsp;:

<pre><code class="js">$('a.blabla').click(function(e){
  e.preventDefault();
  // action
});

$('a').click(e) {
  e.preventDefault();
  // action
}
</code></pre>

En fait on rajoute un paramètre événement à chaque fonction, puis on appelle ensuite tout simplement <code>preventDefault()</code> avec, ce qui permet d'éviter le comportement par défaut de notre événement tout en évitant que cela soit aussi propagé à la fonction suivante.
