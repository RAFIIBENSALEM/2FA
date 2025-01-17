// Pseudo-code Authenification avec 2FA
/*
Données:
email=martin@gmail.com
password=123456
telephone=065547889
tentatives=0
session=0
miniteur=0
*/
/*
DEBUT
RÉCUPÉRER les données de L'UTILISATEUR
SI"tentatives">2
    ALORS 
        BLOQUER le formulaire
        AFFICHER un message d'erreur
        LANCER un "minuteur" de 5 minutes
        REMETTRE les"tentatives" à 0
        FIN
SINON
       VÉRIFIER l'existence de l'UTILISATEUR avec son email
        SI L'UTILISATEUR n'existe pas
           ALORS
               INCREMENTER "tentatives"
               AFFICHER un message d'erreur
        SINON
           VÉRIFIER le "password"
            SI"password" est incorrect
               ALORS
                   INCREMENTER "tentatives"
                   AFFICHER un message d'erreur
            SINON
               LANCER la procédure 2FA
            FIN SI
            SI 2FA = FAUX
            ALORS
             INCREMENTER "tentatives"
             AFFICHER un message d'erreur
            SINON
             AUTHENTIFIER L'UTILISATEUR 
             REDIRIGER L'UTULISATEUR vers une page
             FIN
            FIN SI
        FIN SI
    FIN SI
FIN
*/