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

### 4. Appliquer la migration

```bash
npm run prisma:migrate
```

### 5. Démarrer l’application

```bash
npm run start:dev
```

## Prisma Studio

Pour visualiser, créer et manipuler les données, vous pouvez utiliser Prisma Studio :

```bash
npm run prisma:studio
```

## Swagger

Une documentation est disponible via Swagger à l’adresse suivante :

➡️ http://localhost:3000/api

Nous vous demandons **d’enrichir la documentation Swagger** des endpoints que vous implémentez dans le cadre de ce test technique.

## Rappel
L'énoncé du test technique est disponible [ici.](https://blankapp.notion.site/test-technique)
