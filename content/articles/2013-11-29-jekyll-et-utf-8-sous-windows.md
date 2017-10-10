---
date: 2013-11-29T00:00:00Z
description: Comment régler le problème d'UTF-8 avec Jekyll facilement sous Windows
tags:
- outils
- divers
- jekyll
title: Jekyll et UTF-8 sous Windows
---

La première fois que j'ai installé et lancé Jekyll pour mon blog sous Windows, je suis tombé sur une erreur liée à UTF-8. En fouillant un peu, j'ai trouvé la raison de ce problème dans cet [article](http://joseoncode.com/2011/11/27/solving-utf-problem-with-jekyll-on-windows/)&nbsp;: il semblerait que la console Ruby ne fonctionne pas avec les caractères UTF-8, d'une manière ou d'une autre.

---

L'erreur affichée était la suivante&nbsp;:

<pre><code class="bash">Liquid Exception: incompatible character encodings: UTF-8 and IBM437 in whatever.html</code></pre>

La solution à ce problème est facile. Au lieu de&nbsp;:

<pre><code class="bash">jekyll serve --watch</code></pre>

Il suffit de taper&nbsp;:

<pre><code class="bash">chcp 65001
jekyll serve --watch
</code></pre>

La première commande permet de changer le code-page. En revanche, il vaut mieux éviter de définir cette commande sur une clé de base de registres, puisque apparemment cela risque d'impacter le bon fonctionnement de Windows.
