# Test technique
**Prérequis:** `docker`, `docker-compose`, `Node.js`, `npm`

![node][node]
![npm][npm]

[node]: https://img.shields.io/badge/node-%3E%3D22.17.0-green
[npm]: https://img.shields.io/badge/npm-%3E%3D%20v10.9.2-blue

**Durée:** ~4h

## Setup

### 1. Installer les dépendances

```bash
npm install
```

### 2. Variable d'environnement

Créez un fichier `.env` à partir de l’exemple, à la racine :

```bash
cp .env.example .env
```

Modifiez le fichier si besoin afin qu'il corresponde à votre environnement local.

### 3. Lancer le container de la base de données PostgreSQL

```bash
docker-compose up -d
```

### 4. Générer le Prisma Client

```bash
npm run prisma:generate
```

### 5. Appliquer la migration

```bash
npm run prisma:migrate
```

### 6. Démarrer l’application

```bash
npm run start:dev
```

## Prisma Studio

Pour visualiser, créer et manipuler les données, vous pouvez utiliser Prisma Studio :

```bash
npm run prisma:studio
```

## Concernant le test des endpoints

Le projet ne comprend pas d’interface utilisateur.
Vous êtes libre d'utiliser l’outil de votre choix pour tester les endpoints :

* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/)
* `curl` ou tout autre client HTTP

Nous vous demandons de renseigner dans le README du rendu une section décrivant les endpoints que vous avez créés, ainsi que des exemples de requêtes (payloads JSON, paramètres, etc.) dans le but de faciliter la revue.

## Rappel
Votre rendu sera évalué selon les critères suivants :
* La qualité de la modélisation des données.
* Le respect précis des règles métier propres aux virements bancaires.
* La bonne gestion de l’atomicité et des conditions de concurrence (race conditions).
* La clarté, la rigueur et la conformité du code aux bonnes pratiques.
* La pertinence et la lisibilité des explications fournies dans le README (raisonnements techniques, arbitrages, choix d’architecture, etc.).