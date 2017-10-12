---
date: 2012-07-02T00:00:00Z
description: Tutoriel de création d'un menu complexe en dropdown, avec CSS3
tags:
- css
- html
- tutoriels
title: Créer un menu avec dropdown en CSS3
---

Les menus avec dropdown sont de nos jours fortement utilisés sur les sites possédant beaucoup de contenu. Ils s'appuient en général sur du JavaScript pour fonctionner. Pourtant il existe un moyen simple de créer des dropdown uniquement en CSS3 (malgré une très légère exception en fin d'article). Dans cet article nous allons voir comment mettre ce type de dropdown en place.

---

![Menu dropdown CSS 1](/assets/img/menu-dropdown-css-1.jpg)

<p class="demo"><a href="http://ronanlevesque.fr/demos/menu-dropdown-css3.html">Voir la démo</a></p>

Voici le tutoriel détaillé pour arriver à ce résultat.

## La structure HTML

Le but est de commencer par une structure HTML claire et simple sous forme de liste&nbsp;:

    <ul id="menu">
      <li><a href="#">Accueil</a></li>
      <li>
        <a href="#">Catégories</a>
        <ul>
          <li><a href="#">CSS</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">Webdesign</a></li>
          <li><a href="#"<Autres</a></li>
        </ul>
      </li>
      <li><a href="#">Travaux</a></li>
      <li><a href="#">A propos</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

Pour l'instant, aucun style n'a été appliqué, mais l'important est ici que le code respecte la sémantique HTML</a>.

![Menu dropdown CSS 2](/assets/img/menu-dropdown-css-2.jpg)

Dans cet exemple, une seule sous-catégorie a été créée, mais rien ne vous empêche d'en créer plus en respectant la sémantique initiale.

## Le CSS

Il va ensuite falloir appliquer vos styles CSS à cette liste, histoire de rendre tout ça un peu plus sexy, attention restez bien concentrés...

    #menu {
      width: 100%;
      margin: 0;
      padding: 10px 0 0 0;
      list-style: none;
      background: #111;
      background: -moz-linear-gradient(#444, #111);
      background: -webkit-gradient(linear,left bottom,left top,color-stop(0, #111),color-stop(1, #444));
      background: -webkit-linear-gradient(#444, #111);
      background: -o-linear-gradient(#444, #111);
      background: -ms-linear-gradient(#444, #111);
      background: linear-gradient(#444, #111);
      -moz-border-radius: 10px;
      border-radius: 10px;
    }

    #menu li {
      float: left;
      padding: 0 0 10px 0;
      position: relative;
      line-height: 0;
    }

    #menu a {
      float: left;
      height: 25px;
      padding: 0 25px;
      color: #999;
      text-transform: uppercase;
      font: bold 12px/25px Arial, Helvetica;
      text-decoration: none;
      text-shadow: 0 1px 0 #000;
    }

    #menu li:hover > a {
      color: #fafafa;
    }

    *html #menu li a:hover /* IE6 */ {
      color: #fafafa;
    }

    #menu li:hover > ul {
      display: block;
    }

    #menu ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: none;
      position: absolute;
      top: 35px;
      left: 0;
      z-index: 99999;
      background: #444;
      background: -moz-linear-gradient(#444, #111);
      background: -webkit-gradient(linear,left bottom,left top,color-stop(0, #111),color-stop(1, #444));
      background: -webkit-linear-gradient(#444, #111);
      background: -o-linear-gradient(#444, #111);
      background: -ms-linear-gradient(#444, #111);
      background: linear-gradient(#444, #111);
      -moz-box-shadow: 0 0 2px rgba(255,255,255,.5);
      -webkit-box-shadow: 0 0 2px rgba(255,255,255,.5);
      box-shadow: 0 0 2px rgba(255,255,255,.5);
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    #menu ul ul {
      top: 0;
      left: 150px;
    }

    #menu ul li {
      float: none;
      margin: 0;
      padding: 0;
      display: block;
      -moz-box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
      -webkit-box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
      box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
    }

    #menu ul li:last-child {
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    #menu ul a {
      padding: 10px;
      height: 10px;
      width: 130px;
      height: auto;
      line-height: 1;
      display: block;
      white-space: nowrap;
      float: none;
      text-transform: none;
    }

    *html #menu ul a /* IE6 */ {
      height: 10px;
    }

    *:first-child+html #menu ul a /* IE7 */ {
      height: 10px;
    }

    #menu ul a:hover {
      background: #0186ba;
      background: -moz-linear-gradient(#04acec,  #0186ba);
      background: -webkit-gradient(linear, left top, left bottom, from(#04acec), to(#0186ba));
      background: -webkit-linear-gradient(#04acec,  #0186ba);
      background: -o-linear-gradient(#04acec,  #0186ba);
      background: -ms-linear-gradient(#04acec,  #0186ba);
      background: linear-gradient(#04acec,  #0186ba);
    }

    #menu ul li:first-child > a {
      -moz-border-radius: 5px 5px 0 0;
      border-radius: 5px 5px 0 0;
    }

    #menu ul li:first-child > a:after {
      content: '';
      position: absolute;
      left: 30px;
      top: -8px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 8px solid #444;
    }

    #menu ul ul li:first-child a:after {
      left: -8px;
      top: 12px;
      width: 0;
      height: 0;
      border-left: 0;
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      border-right: 8px solid #444;
    }

    #menu ul li:first-child a:hover:after {
      border-bottom-color: #04acec;
    }

    #menu ul ul li:first-child a:hover:after {
      border-right-color: #04acec;
      border-bottom-color: transparent;
    }

    #menu ul li:last-child > a {
      -moz-border-radius: 0 0 5px 5px;
      border-radius: 0 0 5px 5px;
    }

    #menu:after  {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }

    * html #menu             { zoom: 1; } /* IE6 */
    *:first-child+html #menu { zoom: 1; } /* IE7 */

En regardant la démo de près, vous avez sans doute pu remarquer une flèche située juste en dessous ou à côté du menu principal ou des menus secondaires, afin d'améliorer la lisibilité du menu&nbsp;:

![Menu dropdown CSS 3](/assets/img/menu-dropdown-css-3.jpg)

Cette flèche est simplement créée en utilisant le pseudo-élément <code>after</code>. Voici un zoom sur le code en question&nbsp;:

    #menu ul ul li:first-child a:after {
      left: -8px;
      top: 12px;
      width: 0;
      height: 0;
      border-left: 0;
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      border-right: 8px solid #444;
    }

Cela marchera sur la plupart des navigateurs récents, et jusqu'à IE8 compris.

## Fallback pour IE6

Bien évidemment, IE6 va poser (comme souvent) un problème si on en reste là. En effet, les sous-menus s'affichent quand on survole les éléments <code>li</code> du menu. Or IE6 ne supporte pas le survol d'éléments sans ancre. Pour s'assurer que ce menu fonctionne correctement sous ce dernier, il va donc falloir utiliser un peu de JavaScript (jQuery)&nbsp;:

    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript">
      $(function() {
        if ($.browser.msie && $.browser.version.substr(0,1)<7)
        {
        $('li').has('ul').mouseover(function(){
          $(this).children('ul').show();
          }).mouseout(function(){
          $(this).children('ul').hide();
          })
        }
      });
    </script>

Vous pouvez choisir de sauter cette étape, en effet IE6 est en passe de disparaître complètement de notre paysage (vivement qu'IE7 suive la même voie...).

---

<p class="info">Crédits&nbsp;: Article originalement rédigé par <a href="http://www.red-team-design.com/about">Catalin Rosu</a> (Version originale en anglais accessible <a href="http://www.red-team-design.com/css3-dropdown-menu">ici</a>.)</p>
