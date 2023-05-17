# Suivi-Candidatures

## Description
Suivi-Candidatures est un outil de suivi des candidatures pour l'alternance. Il permet de centraliser toutes les informations pertinentes concernant chaque candidature.

## Objectif du projet
L'objectif principal de ce projet est de développer une application web qui simplifie le suivi des candidatures en fournissant un moyen efficace de collecter, organiser et retrouver les détails de chaque candidature.

## Technologies utilisées
Le projet utilise les technologies suivantes :

- Base de données : MongoDB
- Back-end : Spring Boot
- Front-end : Angular et Bootstrap 4
- Déploiement : Conteneurs Docker

## Fonctionnalités principales
- Ajouter une nouvelle candidature avec des informations détaillées (nom de l'entreprise, poste, date de candidature, etc.).
- Visualiser la liste de toutes les candidatures enregistrées avec leurs détails.
- Mettre à jour les détails d'une candidature existante.
- Supprimer une candidature de la liste.

## Installation et exécution
Pour exécuter l'application localement, suivez ces étapes :

1. Assurez-vous d'avoir installé MongoDB, Spring Boot et Angular sur votre machine.
2. Clonez ce dépôt GitHub : `git clone https://github.com/ferhat-ramdani/suivi-candidatures.git`.
3. Accédez au répertoire backend : `cd back-end`.
4. Configurez la base de données MongoDB dans le fichier `exemple.env`, n'oubliez pas de renommer le fichier `.env`.
5. Lancez le serveur Spring Boot : `mvn spring-boot:run`.
6. Accédez au répertoire frontend : `cd ../front-end`.
7. Installez les dépendances Angular : `npm install`.
8. Démarrez le serveur de développement Angular : `ng serve`.
9. Ouvrez votre navigateur et accédez à `http://localhost:4200`.


## Auteurs
- RAMDANI Ferhat
