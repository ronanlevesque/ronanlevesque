import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';

const JohnPage = () => {
  return (
    <DefaultLayout title="Projet John" url="projet-john">
      <div className="maw-800 mh-auto mv-48 ph-48 ff-roboto lh-big">
        <h1>Projet tatouage</h1>
        <p>
          L&rsquo;été dernier tu m&rsquo;avais tatoué une flèche sur la partie
          extérieure de l&rsquo;avant-bras gauche; entre temps, je me suis fait
          tatouer une tête de soldat grec sur la partie intérieure du même bras.
        </p>
        <p>Je t&rsquo;ai mis ci-dessous les deux tatouages en question :</p>
        <div className="d-grid ggap-20 sm:g-2">
          <img
            src="john/tatouage-fleche.jpg"
            className="w-100p d-block bxs-default"
          />
          <img
            src="john/tatouage-soldat.jpg"
            className="w-100p d-block bxs-default"
          />
        </div>
        <p>
          Ce que j&rsquo;aimerais maintenant, c&rsquo;est pouvoir remplir
          l&rsquo;espace vide entre les deux pour finir avec une manchette
          complète qui fait tout le tour de l&rsquo;avant-bras.
        </p>
        <p>
          J&rsquo;aime beaucoup ce que tu as fait dernièrement comme travail sur
          les tatouages géométriques, c&rsquo;est exactement ce genre que je
          recherche pour pouvoir compléter mon avant-bras. Je t&rsquo;ai mis
          juste en dessous quelques exemples qui contiennent des motifs
          géométriques pour que tu voies mieux de quoi je parle :
        </p>
        <div className="d-grid ggap-20 sm:g-2">
          <img
            src="john/exemple-1.jpg"
            className="w-100p d-block bxs-default"
          />
          <img
            src="john/exemple-2.jpg"
            className="w-100p d-block bxs-default"
          />
        </div>
        <p>
          Dans le même genre j&rsquo;aimais aussi beaucoup cette{' '}
          <a href="https://www.instagram.com/p/BvmXLPwnwpC/?utm_source=ig_web_button_share_sheet">
            vidéo
          </a>
          .
        </p>
        <p>
          Du coup, ce que je cherche c&rsquo;est des motifs géométriques qui
          complètent l&rsquo;espace vide tout en restant bien en harmonie avec
          le tatouage de mon soldat. Peut-être que tu pourrais au passage
          retoucher un peu ma flèche, en remplissant par exemple les carrés.
        </p>
        <p>
          J&rsquo;aimerais aussi en profiter pour inclure quelque part dans le
          tatouage le symbole du sagittaire, qui ressemble à ça :
        </p>
        <div className="d-grid ggap-20 sm:g-2">
          <img
            src="john/symbole-sagittaire.png"
            className="w-100p d-block bxs-default"
          />
        </div>
        <p>
          Et pour finir, je te mets quelques exemples de tatouage que
          j&rsquo;aime bien pour inspiration.
        </p>
        <div className="d-grid ggap-20 sm:g-2">
          <img
            src="john/inspiration-1.jpg"
            className="w-100p d-block bxs-default"
          />
          <img
            src="john/inspiration-2.jpg"
            className="w-100p d-block bxs-default"
          />
          <img
            src="john/inspiration-3.jpg"
            className="w-100p d-block bxs-default"
          />
          <img
            src="john/inspiration-4.jpg"
            className="w-100p d-block bxs-default"
          />
          <img
            src="john/inspiration-5.jpg"
            className="w-100p d-block bxs-default"
          />
          <img
            src="john/inspiration-6.jpg"
            className="w-100p d-block bxs-default"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default JohnPage;
