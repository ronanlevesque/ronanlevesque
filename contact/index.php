<?php
    define( 'MAIL_TO', /* >>>>> */'ronan.levesque@gmail.com'/* <<<<< */ );  //ajouter votre courriel
    define( 'MAIL_NAME', '' ); // valeur par défaut
    define( 'MAIL_FROM', '' ); // valeur par défaut
    define( 'MAIL_OBJECT', '' ); // valeur par défaut
    define( 'MAIL_MESSAGE', '' ); // valeur par défaut

    $mailSent = false; // drapeau qui aiguille l'affichage du formulaire OU du récapitulatif
    $errors = array(); // tableau des erreurs de saisie

    if( filter_has_var( INPUT_POST, 'send' ) ) // le formulaire a été soumis avec le bouton [Envoyer]
    {
        $from = filter_input( INPUT_POST, 'from', FILTER_VALIDATE_EMAIL );
        if( $from === NULL || $from === MAIL_FROM ) // si le courriel fourni est vide OU égale à la valeur par défaut
        {
            $errors[] = 'Vous devez renseigner votre adresse de courrier électronique.';
        }
        elseif( $from === false ) // si le courriel fourni n'est pas valide
        {
            $errors[] = 'L\'adresse de courrier électronique n\'est pas valide.';
            $from = filter_input( INPUT_POST, 'from', FILTER_SANITIZE_EMAIL );
        }

        $object = filter_input( INPUT_POST, 'object', FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_HIGH | FILTER_FLAG_ENCODE_LOW );
        if( $object === NULL OR $object === false OR empty( $object ) OR $object === MAIL_OBJECT ) // si l'objet fourni est vide, invalide ou égale à la valeur par défaut
        {
            $errors[] = 'Vous devez renseigner l\'objet.';
        }

        $name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_HIGH | FILTER_FLAG_ENCODE_LOW );
        if( $name === NULL OR $name === false OR empty( $name ) OR $name === MAIL_OBJECT ) // si l'objet fourni est vide, invalide ou égale à la valeur par défaut
        {
            $errors[] = 'Vous devez renseigner votre nom.';
        }

 /* pas besoin de nettoyer le message.
 / http://www.phpsecure.info/v2/article/MailHeadersInject.php
 / Logiquement, les parties message, To: et Subject: pourraient servir aussi à injecter quelque chose,  mais la fonction mail()
 / filtre bien les deux dernières, et la première est le message, et à partir du moment où on a sauté une ligne dans l'envoi du mail,
 / c'est considéré comme du texte; le message ne saurait donc rester qu'un message.*/
        $message = filter_input( INPUT_POST, 'message', FILTER_UNSAFE_RAW );
        if( $message === NULL OR $message === false OR empty( $message ) OR $message === MAIL_MESSAGE ) // si le message fourni est vide ou égale à la valeur par défaut
        {
            $errors[] = 'Vous devez écrire un message.';
        }

        if( count( $errors ) === 0 ) // si il n'y a pas d'erreurs
        {
            if( mail( MAIL_TO, $object, $name, $message, "From: $from\nReply-to: $from\n" ) ) // tentative d'envoi du message
            {
                $mailSent = true;
            }
            else // échec de l'envoi
            {
                $errors[] = 'Votre message n\'a pas été envoyé.';
            }
        }
    }
    else // le formulaire est affiché pour la première fois, avec les valeurs par défaut
    {
		$name = MAIL_NAME;
        $from = MAIL_FROM;
        $object = MAIL_OBJECT;
        $message = MAIL_MESSAGE;
    }
?>
<!DOCTYPE html>
<!--[if lte IE 7]> <html class="ie7 no-js" lang="fr"> <![endif]-->
<!--[if IE 8]> <html class="ie8 no-js" lang="fr"> <![endif]-->
<!--[if IE 9]> <html class="ie9 no-js" lang="fr"> <![endif]-->
<html lang="fr" class="no-js">
<head>
	<meta charset="UTF-8">
	<title>Ronan Levesque - Formulaire de contact</title>
	<!-- Remove this if Modernizr is used -->
	<script>document.documentElement.className = document.documentElement.className.replace(/(\s|^)no-js(\s|$)/, '$1js$2');</script>
	<meta name="description" content="Contactez-moi par e-mail, Twitter, Linkedin ou Viadeo">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if lte IE 8]><link rel="stylesheet" href="/css/fox-ie.css"><![endif]-->
	<!--[if gt IE 8]><!--><link rel="stylesheet" href="/css/fox.css"><!--<![endif]-->
	<link href='http://fonts.googleapis.com/css?family=Merriweather:400,400italic,700%7CMerriweather+Sans:400,800' rel='stylesheet' type='text/css'>
	<!--[if (gte IE 6)&(lte IE 8)]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
 	<![endif]-->
</head>

<body>
	<header class="main-header" role="banner">
		<div class="main-header__inner">
			<div class="main-header__left">
				<a href="/" class="logo"><img src="/img/logo-ronan-levesque.svg" alt="Logo Ronan Levesque"></a>
			</div><!--
			--><div class="main-header__right">
				<a href="#" class="nav-mobile" data-state="closed">Menu</a>
			</div><!--
			--><nav class="main-nav" role="navigation">
				<ul data-state="closed">
					<li><a href="/projets">Projets</a></li><!--
					--><li><a href="/articles">Articles</a></li><!--
					--><li><a href="/a-propos">A propos</a></li><!--
					--><li><a href="/contact" class="selected">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>
	<main role="main">
		<article class="article--page">
			<div class="article__inner">
				<h1>Formulaire de contact</h1>
				<form class="contactform" id="contact" method="post" action="<?php echo( $_SERVER['REQUEST_URI'] ); ?>">
                	<?php
					    if( $mailSent === true ) // si le message a bien été envoyé, on affiche le récapitulatif
					    {
					?>
					        <p class="succes">Votre message a bien été envoyé.</p>
					<?php
					    }
					    else // le formulaire est affiché pour la première fois ou le formulaire a été soumis mais contenait des erreurs
					    {
					        if( count( $errors ) !== 0 )
					        {
					            echo( "<p class=\"erreur\">Merci de remplir correctement tous les champs.</p>" );
					        }
					?>
					<?php
					    }
					?>
					<p>Vous avez un projet ou une question en tête ? Contactez-moi via le formulaire ci-dessous. Vous pouvez également me joindre sur les réseaux sociaux : <a href="https://github.com/eskiiss">Github</a>, <a href="https://twitter.com/ronanlevesque">Twitter</a>, <a href="http://fr.linkedin.com/in/ronanlevesque">Linkedin</a> ou <a href="http://www.viadeo.com/fr/profile/ronan.levesque">Viadeo</a>.</p>
					<label for="name">Nom</label><input type="text" name="name" id="name" value="<?php echo( $name ); ?>" />
					<label for="from">Email</label><input type="text" name="from" id="from" value="<?php echo( $from ); ?>" />
					<label for="object">Objet</label><input type="text" name="object" id="object" value="<?php echo( $object ); ?>" />
					<label for="message">Message</label><textarea name="message" id="message"><?php echo( $message ); ?></textarea>
                	<input type="submit" name="send" value="Envoyer" />
        		</form>
			</div>
		</article>
	</main>
	<footer class="main-footer" role="contentinfo">
		<div class="main-footer__inner">
			<p class="main-footer__left">(c) Ronan Levesque 2014</p><!--
			--><div class="main-footer__right">
				<a href="https://twitter.com/ronanlevesque" class="twitter-follow-button" data-show-count="false" data-lang="fr" data-size="large">Suivre @ronanlevesque</a>
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			</div>
		</div>
	</footer>
  <div class="spinner"></div>
	<!--[if (gte IE 6)&(lte IE 9)]>
 	<script src="/js/ie/matchmedia.js"></script>
 	<![endif]-->
	<script src="/js/main.js"></script>
</body>
</html>
