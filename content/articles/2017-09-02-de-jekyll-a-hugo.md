---
date: 2017-09-02T00:00:00Z
description: Tutoriel sur la manière dont j'ai remplacé Jekyll, devenu trop lent, par Hugo.
tags:
- jekyll
- hugo
- outils
- divers
- tutoriels
title: De Jekyll à Hugo
---

Mon site est sous Jekyll depuis [un bon moment](/articles/goodbye-wordpress-hello-jekyll), mais j'ai remarqué qu'il devenait de plus en plus lent pour compiler tout le contenu que j'ai créé au fil du temps. J'ai donc décidé de le migrer sous [Hugo](https://gohugo.io/), dont j'ai eu de bons échos en termes de performances. J'en profite également pour faire un tuto de migration pour les personnes intéressées.

---

<p class="info">Cet article part du principe que vous êtes à l'aise avec certains mécanismes également utilisés par Jekyll (Markdown, YAML, <em>partials</em>, etc.)</p>

## Pourquoi Hugo ?

Il existe [une énorme quantité](https://www.staticgen.com/) de générateurs sites statiques, et parmi ceux-ci le choix peut s'avérer difficile. J'étais à la recherche du générateur qui m'apporterait **d'excellentes performances** en termes de compilation tout en évitant d'avoir à changer trop de choses dans le code de mon site.

Hugo revient régulièrement dans les discussions en ligne, surtout quand il s'agit de faire un comparatif avec [Jekyll](https://novelist.xyz/tech/hugo-vs-jekyll-static-site-generator/). Ecrit en Go, Hugo offre des temps de compilation réduits drastiquement par rapport à ce dernier.

La transition de l'un à l'autre semble également se faire relativement en douceur, comme vous le verrez en détails ci-dessous.

## Configuration

On commence par télécharger et installer Hugo&nbsp;:

<pre><code class="nohighlight">brew install hugo</code></pre>

Ou pour ceux qui sont sous Windows,

<pre><code class="nohighlight">choco install hugo -confirm</code></pre>

Ensuite, pour importer le contenu d'un site Jekyll vers un site Hugo, il existe une autre commande&nbsp;:

<pre><code class="nohighlight">hugo import jekyll [chemin-jekyll] [chemin-cible]</code></pre>

Qui va créer l'arborescence suivante&nbsp;:

<pre><code class="nohighlight">archetypes
content
data
layouts
static
themes
config.toml</code></pre>

Dans mon cas, les articles ont été placés dans `content/post`, et les fichiers et dossiers situés à la racine du site Jekyll ont été placés dans `static`... J'ai dû faire un peu de nettoyage pour redéplacer ce qu'il fallait au bon endroit (je reviendrai sur l'arborescence ci-dessus un peu plus tard).

Notez qu'il est aussi possible de créer un nouveau site directement si il vous prend l'envie saugrenue de migrer tous vos articles à la main&nbsp;:

<pre><code class="nohighlight">hugo new site mon-site</code></pre>

Pour finir on lance un serveur pour surveiller tout nouveau changement (accessible sur `localhost:1313`) &nbsp;:

<pre><code class="nohighlight">hugo server</code></pre>

## Création de contenu

C'est dans le dossier `content` que vont se placer tous les types de contenu&nbsp;: articles de blog, pages statiques, 404, page d'accueil etc., le tout au format `.md`.

Pour que ces pages ressemblent à quelque chose, il faudra leur créer des **templates**. Ceux-ci sont placés dans le dossier `layouts`. C'est également là-dedans que sont placés les *partials* réutilisables (header, footer, etc.).

Le template utilisé par chaque page de contenu est défini dans son *front matter* par la propriété **type**, qui peut être écrit au format `yaml` ou `toml`.

Par exemple, voici ma page `projets.md`&nbsp;:

<pre><code class="nohighlight">---
type: "static"
title: "Projets récents"
description&nbsp;: "Découvrez mes derniers projets et réalisations web."
---

Bla bla bla écrit en Markdown</code></pre>

Le template en question est un fichier `single.html` situé dans le dossier `layouts/static`. Voilà à quoi il pourrait ressembler&nbsp;:

<pre><code class="nohighlight">{{ partial "header.html" . }}

{{ .Content }}

{{ partial "footer.html" . }}</code></pre>



`.Content` insère le contenu de `projets.md`, et les *partials*, comme leur nom l'indique... importent les *partials* en question.

<p class="info">Pour plus de détails sur les différents templates utilisés par Hugo je vous invite à consulter la doc officielle.</p>

Pour ce qui est des pages du blog, le principe est à peu près similaire. J'ai créé dans le dossier `layouts` un sous-dossier intitulé `articles`. Celui-ci contient deux templates&nbsp;: `list.html` et `single.html`.

### Liste d'articles

J'ai sur mon site une page qui contient une liste de tous les articles publiés, triés par année. Voilà le code (simplifié)&nbsp;:

    {{ partial "header.html" . }}

    <h1>{{ .Page.Title }}</h1>

    {{ range (.Data.Pages.GroupByDate "2006") }}
    <h2>{{ .Key }}</h2>
    <ul>
      {{ range .Pages }}
      <li>
        <a href="{{ .RelPermalink }}">
          <h3>{{ .Title }}</h3>
          <p>{{ .Date.Format "02.01" }}</p>
        </a>
      </li>
      {{ end }}
    </ul>
    {{ end }}

    {{ partial "footer.html" . }}

Les deux `range` permettent d'itérer, pour le premier sur les dates par années, et pour le deuxième sur la liste des articles.

Et le résultat&nbsp;:

<pre><code class="nohighlight">2015

NOMMAGE ET ARCHITECTURE CSS  19.08
UNE GESTION RESPONSABLE DES WEBFONTS  25.06
LES PRINCIPALES NOUVEAUTÉS DE ES6  27.04
DROPBOX ET NODE_MODULES  02.04

2014

METTRE SES ASSETS EN CACHE AVEC JEKYLL  17.12
ANIMER SES SVG AVEC SNAP.SVG  21.07

etc.</code></pre>

### Page d'article

Voilà le template, là aussi simplifié&nbsp;:

    {{ partial "header.html" . }}

    <time>
      {{ .Date.Day }}
      {{ index .Site.Data.mois (printf "%d" .Date.Month) }}
      {{ .Date.Year }}
    </time>
    <h1>{{ .Page.Title }}</h1>
    {{ .Content }}

    {{ partial "footer.html" . }}

Celui-ci m'a posé un peu plus de soucis car je souhaitais afficher la date de publication de l'article en français, au format *01 janvier 2017*. J'ai trouvé un moyen de contourner le problème en utilisant la variable `.Site.Data`. Il m'a suffit de créer un fichier `mois.yaml` dans le dossier `data`, avec le contenu suivant&nbsp;:

<pre><code class="nohighlight">1: "janvier"
2: "février"
3: "mars"
etc.</code></pre>

La fonction `printf` m'a ensuite permis de récupérer les bonnes traductions.

## Gestion du cache

<p class="info">J'utilise Gulp pour compiler et optimiser les <em>assets</em> de mon site. Si jamais votre workflow est différent (webpack ou autre), il vous sera à priori facile d'adapter l'exemple ci-dessous à votre cas précis.</p>

Pour rappel, le but ici est d'ajouter un *fingerprint* au nom des fichiers voulus. Par exemple&nbsp;:

    <link rel="stylesheet" href="/assets/css/styles.css">

Doit être transformé en&nbsp;:

    <link rel="stylesheet" href="/assets/css/styles-b9bafce7.css">

Les *assets* de mon site Jekyll (CSS, JS, etc.) étaient *fingerprintés* grâce à [jekyll-minibundle](https://github.com/tkareine/jekyll-minibundle). Avec Hugo j'ai dû chercher une nouvelle solution pour arriver à un résultat équivalent. Je me suis servi pour ça de `gulp-hash` et `del`.

Pour arriver à la solution voulue, il faut pouvoir stocker dans le dossier `data` un fichier qui mappera les noms d'*assets* avec le dernier *hash* créé. Ces informations seront ensuite accessibles à Hugo grâce à la variable globale `.Site.Data`.

Voici par exemple ma tâche Gulp pour la gestion des styles&nbsp;:

    gulp.task('styles', () => {
      // On supprime l'ancien fichier CSS
      del(distFolder.css + '**/*')
      return gulp.src(devFolder.scss + 'styles.scss')
      .pipe($$.sass())
      .pipe($$.autoprefixer())
      .pipe($$.cssnano())
      // On crée un hash
      .pipe($$.hash())
      .pipe(gulp.dest(distFolder.css))
      // On mappe le fichier
      .pipe($$.hash.manifest('hashcss.json'))
      // On le place dans data
      .pipe(gulp.dest('data'));
    });

Ensuite, il suffit d'aller modifier le template pour y intégrer cette donnée&nbsp;:

    <link rel="stylesheet" href="/assets/css/{{ index .Site.Data.hashcss "styles.css" }}" />

Le principe est le même pour vos autres fichiers statiques à cacher.

## Mise en production

Hugo crée un dossier `public` qui contiendra l'ensemble du site. Il suffit de lancer la commande `hugo` pour cela.

## Autres infos utiles

Je ne me suis pas encore penché sur trois dossiers présents à la racine d'un site lors de sa création: `archetypes` , `static` et `themes`.

### Archétypes

Cette fonctionnalité permet de créer du nouveau contenu en utilisant un front-matter prédéfini. Par exemple, j'ai créé un archétype spécifique pour mes articles comme ceci&nbsp;:

<pre><code class="nohighlight">touch archetypes/articles.md</code></pre>

Celui-ci contient le front-matter que je souhaite utiliser pour toute nouvelle création.

<pre><code class="nohighlight">---
title: ""
description: ""
date: {{ .Date }}
tags: []
---</code></pre>

Puis&nbsp;:

<pre><code class="nohighlight">hugo new articles/mon-nouvel-article</code></pre>

### Static

Ce dossier contient par exemple dans mon cas les fichier CSS, JS, JSON, images ainsi que les pages que je veux garder indépendantes de Hugo. Ils seront placés à la racine du dossier `public` lors de la mise en production.

### Thèmes

C'est une fonctionnalité de Hugo que je n'ai pas du tout utilisée car j'ai mon propre thème maison, mais si vous voulez en savoir plus je vous invite à aller visiter la [documentation](https://gohugo.io/themes/) écrite là-dessus.

---

Voilà, je pense avoir fait le tour des points principaux pour créer un site avec Hugo sans trop de prise de tête. Si jamais vous voyez des **détails que j'aurais oublié**, n'hésitez pas à venir m'en parler sur [Twitter](https://twitter.com/ronanlevesque).
