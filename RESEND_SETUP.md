# Configuration Resend pour le formulaire de contact

## Étapes pour configurer Resend

### 1. Créer un compte Resend
1. Allez sur https://resend.com
2. Cliquez sur "Sign Up"
3. Créez votre compte (gratuit jusqu'à 3,000 emails/mois)

### 2. Obtenir votre clé API
1. Connectez-vous à votre compte Resend
2. Allez dans "API Keys" : https://resend.com/api-keys
3. Cliquez sur "Create API Key"
4. Donnez un nom à votre clé (ex: "Roussillon Fenêtres Contact Form")
5. Sélectionnez les permissions : **Sending access**
6. Cliquez sur "Add"
7. **COPIEZ LA CLÉ** (elle commence par `re_...`)

### 3. Ajouter la clé dans votre projet
1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez `re_votre_cle_api_ici` par votre vraie clé API
3. Vérifiez que `CONTACT_EMAIL` contient bien votre email de réception

```env
RESEND_API_KEY=re_votre_vraie_cle_ici
CONTACT_EMAIL=guillaumeschaffer@yahoo.fr
```

### 4. (Optionnel) Configurer votre domaine personnalisé
Pour envoyer des emails depuis `contact@roussillon-fenetres.fr` au lieu de `onboarding@resend.dev` :

1. Allez dans "Domains" sur Resend : https://resend.com/domains
2. Cliquez sur "Add Domain"
3. Entrez votre domaine (ex: `roussillon-fenetres.fr`)
4. Suivez les instructions pour ajouter les enregistrements DNS
5. Une fois vérifié, modifiez le fichier `app/api/contact/route.ts` ligne 18 :

```typescript
from: "Roussillon Fenêtres <contact@roussillon-fenetres.fr>",
```

### 5. Tester le formulaire
1. Redémarrez votre serveur de développement
2. Remplissez le formulaire de contact sur votre site
3. Vérifiez que vous recevez l'email à `guillaumeschaffer@yahoo.fr`

## Configuration actuelle

- **Email de réception** : guillaumeschaffer@yahoo.fr
- **Limite gratuite** : 3,000 emails/mois
- **Prix au-delà** : 1$ pour 10,000 emails

## Besoin d'aide ?

Consultez la documentation Resend : https://resend.com/docs
