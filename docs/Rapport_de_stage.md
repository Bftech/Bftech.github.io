# Rapport de stage

2016 - 2017 : Agence de création digitale Bleu-b

> Attestation de stage

## Remerciements

Je remercie tout d’abord l’agence Bleu-B de m’avoir donné l’opportunité d’effectuer un stage chez eux afin de pouvoir conclure mon DUT.

Plus particulièrement je remercie mon tuteur Gwénaël Lesaulnier pour ses conseils de professionnel du développement Web. Ensuite je remercierais Mr. Thierry Eustache, directeur de l’agence, pour son accueil et sa confiance. De plus je remercie aussi tout le reste de l’équipe de l’agence, Isabelle, Aurore et Catherine ainsi que les autres stagiaires, pour l’excellente ambiance au sein de cette entreprise.

Je finirais en remerciant toute l’équipe de l’IUT d’Elbeuf pour ces deux années des plus enrichissantes.

## Introduction

Pour finaliser et obtenir mon DUT MMI j'ai du effectuer un stage dans l'un des domaines de ma formation. Mon veux initial était de le faire dans le secteur de l'audiovisuel mais après de nombreuses recherches infructueuses et quelques déconvenues j'ai décidé de me tourner vers le web, autre secteur sur lequel mon intéret se porte, afin d'obtenir une première expérience du monde professionel du développement de sites internets.

## Presentation

### L'agence

L'agence Bleu-B est une agence de création multi-supports basée a Dinan en Breatagne. Elle est spécialisée dans le domaine du print et du web. Bleu-B est dirigée par Mr. Thierry Eustache qui a fondé l'entreprise en 1996\. Au total 4 personnes y travail à plein temps en plus de Mr Eustache. Isabelle au secrétaria, Aurore et Catherine en print et Gwénaël en web.

L'agence se trouve dans un petit immeuble partagé par plusieurs entreprises en bordure de la ville de Dinan, position stratégique pour rayonner sur le secteur de la région de la Rance.

> L'agence Bleu B est une agence de communication créée en 1996 et située à Dinan (Côtes d'Armor - 22) en Bretagne. Elle maîtrise l'ensemble des médias de communication : du développement, hébergement, maintenance et référencement de sites Internet à la conception de chartes, création graphique et impression. L'agence s'est également doté d'un service complet de création et pose d'enseignes.
>
> - Site internet de l'agence

### Activité

L'agence effectue principalement des traveaux print et web pour différents acteurs locaux d'activités confondues[...]

## Missions

### Vacances Vertes et Bleues

Ma principale mission au sein de ce stage fut de travailler sur le site de [Vacances Vertes et Bleues](vacances-vertes-bleus.com), plateforme d'annonces de location qui édite chaques années un guide repertoriant ses meilleures annonces. Ce site permet à un utilisateur de s'inscrire pour ensuite pouvoir déposer une annonce sur un bien disponible en location saisonnière, que ce soit un particulier louant un mobil-home, un gîte ou encore un responsable de camping cherchant plus de visibilité. 

#### Situation et problèmes
Racheté par Mr Eustache il y a quelques années, le titre **Vacance Vertes et Bleues** était à l'origine juste un guide, un site web a ensuite été créé par une précédente équipe de développeurs de chez Bleu-B mais il s'avère que celui-ci se trouve maintenant obsolète face aux technologies et pratique actuelles. Pour premier exemple des plus flagrant, son manque de responsivité fiable sur les navigateurs mobiles, ensuite son architecture interne PHP repose sur un CMS *"maison"* que plus personne ne maitrise dans l'entreprise et qui rend tout ajout de fonctionnalités archaïque.

En cela, la refonte totale du site fut l'une des priorités de mon stage.

Objectifs :
- Rendre le site parfaitement responsif
- Moderniser les technologies utilisées
- Structurer le site de manière à permettre des futurs ajouts de fonctions et un entretien facilité

#### Technologies choisies
Tout d'abords nous avons décidé des rester sur le choix classique du duo PHP / MySQL, d'une part par leur performance et d'autre part parce que ce sont les langages utilisés par nos serveur.
Ensuite pour regler le problème du responsif de manière fiable (idépendante du navigateur) nous avons décider d'utiliser **Bootstrap** pour réaliser nos interface **HTML/CSS**.

**Bootstrap** est un _framework_ permettant de simplifier et d'accélérer la conception d'interfaces web multi-supports et permet de faire une abstraction quasi-total du navigateur utilisé (à l'exception des plus vieux, de toute manière obsolètes). **Bootstrap** permet de placer les éléments sur une grille virtuelle et de décider de leurs comportements en fonction de la largeur du navigateur.

Une fois le _front-end_ determiné, nous avons du réfléchir à la manière dont nous allions coder le comportement dynamique du site en **PHP**. Pour ce faire, mon tuteur à choisi de se servir du _framework_ **CodeIgniter**.

**CodeIgniter** est un _framework_ **PHP** qui se base entièrment sur le _pattern_ **MVC**, modèle de programmation idépendant de tout langage de programmation qui préscrit de séparer le code lié à l'affichage des données de celui qui le traite et de celui qui le gère. **MVC** signifie **M**odèle **V**ue **C**ontrolleur. 
