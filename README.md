# Roussillon Fenêtres - Site E-commerce

Site marchand Next.js 15 pour la vente de moustiquaires enroulables ECO avec intégration Stripe et composants shadcn/ui.

## Fonctionnalités

- Page d'accueil avec présentation du produit "Moustiquaire Enroulable ECO"
- Système de paiement sécurisé via Stripe
- Pages de confirmation (succès/annulation)
- Design responsive avec Tailwind CSS et shadcn/ui
- Support du mode sombre
- TypeScript pour la sécurité du code

## Installation

1. Installez les dépendances :
```bash
npm install
```

2. Configurez vos clés Stripe dans le fichier `.env.local` :

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

Pour obtenir vos clés Stripe :
- Créez un compte sur [Stripe](https://stripe.com)
- Allez dans Développeurs > Clés API
- Copiez vos clés de test

3. Lancez le serveur de développement :

```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Structure du projet

```
app/
├── page.tsx                 # Page d'accueil avec le produit
├── checkout/
│   └── page.tsx            # Page de redirection vers Stripe
├── success/
│   └── page.tsx            # Page de confirmation d'achat
├── cancel/
│   └── page.tsx            # Page d'annulation
└── api/
    └── checkout/
        └── route.ts        # API route pour créer la session Stripe

components/
└── ui/                      # Composants shadcn/ui
    ├── button.tsx
    ├── card.tsx
    ├── badge.tsx
    └── separator.tsx
```

## Configuration du produit

Le produit est configuré dans `app/api/checkout/route.ts` :
- Nom : Moustiquaire Enroulable ECO
- Prix : 149,99 €
- Description : Moustiquaire enroulable de qualité

Pour modifier le prix ou les détails, éditez le fichier `app/api/checkout/route.ts`.

## Mode Production

1. Remplacez les clés de test Stripe par vos clés de production dans `.env.local`
2. Mettez à jour `NEXT_PUBLIC_DOMAIN` avec votre URL de production
3. Buildez le projet :

```bash
npm run build
npm start
```

## Technologies utilisées

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide Icons
- Stripe
- @stripe/stripe-js

## Support

Pour toute question ou problème, consultez la documentation :
- [Next.js](https://nextjs.org/docs)
- [Stripe](https://stripe.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
