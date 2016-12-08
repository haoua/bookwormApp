# Readme.md
<p> La première page sert de page de connexion. Elle permet à un utilisateur d'atteindre sa page "Votre bibliothèque." </p>
<p> Sur la page "Bibliothèque", un bouton est présent qui permet de scanner le code barre d'un livre. Une fois le code barre flashé, une alerte montre le code isbn identifié.</p>
<p>La liste des livres scannés est disponible en dessous</p>
<p>Via le menu l'utilisateur peut changer de page et accéder à sa page profil. Dans cette page sont présentes ces informations utilisateurs.</p>
<br>
<p>L'API contient les différentes routes pour les utilisateurs :</p>
<ul>
	<li>Une route pour ajouter un utilisateur</li>
	<li>Une route pour modifier le mdp d'un utilisateur</li>
</ul>

<p>L'API contient les différentes routes pour les livres avec un lien via isbndb :</p>
<ul>
	<li>Une route qui lorsqu'elle reçoit un isbn (celui qui serait scanné) permet d'identifier le livre sur Isbndb et de l'ajouter dans la BDD</li>
	<li>Une route qui permet à un utilisateur de marquer comme lu un livre qui serait présent dans sa bibliothèque</li>
</ul>