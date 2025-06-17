# Pizzapp — TP Design Patterns

## 🎯 Objectif

Ce projet a été réalisé dans le cadre du TP de mise en œuvre des Design Patterns.

L'objectif est de développer un système de gestion de commandes de pizzas en appliquant trois patterns :

- Factory Pattern : création de pizzas prédéfinies selon un type donné.
- Builder Pattern : création fluide de pizzas personnalisées.
- Singleton Pattern : gestion centralisée et unique des commandes de pizzas.

## 🛠 Technologies utilisées

- TypeScript
- Node.js
- Vitest

## 📦 Structure du projet

Pizzapp/
├── builderPattern/ → Implémentation du Builder Pattern
│ └── PizzaBuilder.ts
├── factoryPattern/ → Implémentation du Factory Pattern
│ └── PizzaFactory.ts
├── models/ → Modèle de base Pizza
│ └── Pizza.ts
├── singleton/ → Implémentation du Singleton Pattern
│ └── CommandeManager.ts
├── tests/ → Tests unitaires avec Vitest
│ ├── PizzaFactory.test.ts
│ ├── CommandeManager.test.ts
│ └── PizzaBuilder.test.ts
├── index.ts → Démonstration manuelle globale
├── package.json
├── tsconfig.json
└── node_modules/

## 🚀 Installation & Exécution

### 1️⃣ Installer les dépendances

```bash
npm install
```

### 2️⃣ Compiler le projet

```bash
npm run build
```

### 3️⃣ Exécuter l'application de démonstration

```bash
npm run start
```

### 4️⃣ Lancer les tests unitaires

```bash
npm run test
```

- Projet réalisé par : Valentin Saraiva
