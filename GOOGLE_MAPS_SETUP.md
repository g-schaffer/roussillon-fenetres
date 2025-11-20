# Configuration Google Maps pour la carte de localisation

## Étapes pour configurer Google Maps

### 1. Créer un projet Google Cloud
1. Allez sur https://console.cloud.google.com
2. Connectez-vous avec votre compte Google
3. Cliquez sur le menu déroulant des projets en haut
4. Cliquez sur "Nouveau projet"
5. Donnez un nom au projet (ex: "Roussillon Fenêtres")
6. Cliquez sur "Créer"

### 2. Activer l'API Maps Embed
1. Dans le menu de gauche, cliquez sur "APIs & Services" > "Library"
2. Recherchez "Maps Embed API"
3. Cliquez sur "Maps Embed API"
4. Cliquez sur "Activer" (Enable)

### 3. Créer une clé API
1. Dans le menu de gauche, cliquez sur "APIs & Services" > "Credentials"
2. Cliquez sur "Create Credentials" > "API key"
3. Une clé API sera générée (elle commence par `AIza...`)
4. **COPIEZ LA CLÉ**

### 4. (Recommandé) Sécuriser votre clé API
1. Cliquez sur votre clé API pour l'éditer
2. Sous "Application restrictions", sélectionnez "HTTP referrers (web sites)"
3. Ajoutez vos domaines autorisés :
   - `localhost:3000/*` (pour le développement)
   - `votre-domaine.com/*` (pour la production)
4. Sous "API restrictions", sélectionnez "Restrict key"
5. Cochez uniquement "Maps Embed API"
6. Cliquez sur "Save"

### 5. Ajouter la clé dans votre projet
1. Ouvrez le fichier `.env.local` à la racine du projet
2. Remplacez `votre_cle_google_maps_ici` par votre vraie clé API

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaVotreCleAPIIci
```

### 6. Personnaliser l'adresse
Dans le fichier `components/map-section.tsx`, modifiez :

**Ligne 8** : L'adresse à afficher
```typescript
const address = "Votre adresse complète ici";
```

**Ligne 9** : L'URL de la carte (remplacez `Cabestany,Perpignan,France` par votre adresse)
```typescript
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Votre+Adresse+Ici`;
```

**Lignes 22-25** : Adresse complète affichée
```typescript
<p className="text-muted-foreground">
  Roussillon Fenêtres<br />
  Votre adresse ligne 1<br />
  Votre adresse ligne 2
</p>
```

**Ligne 38** : Numéro de téléphone
```typescript
<a href="tel:+33468123456" className="...">
  04 68 12 34 56
</a>
```

**Lignes 64-66** : Horaires d'ouverture
```typescript
<p>Lundi - Vendredi: 9h - 18h</p>
<p>Samedi: 9h - 12h</p>
<p>Dimanche: Fermé</p>
```

### 7. Tester la carte
1. Redémarrez votre serveur de développement
2. Allez sur votre page d'accueil
3. La carte devrait s'afficher avec un marqueur sur votre adresse

## Tarification Google Maps

- **Gratuit** : 28,000 chargements de carte par mois
- Au-delà : 7$ pour 1,000 chargements supplémentaires
- Pour un site vitrine normal, vous resterez dans la limite gratuite

## Aide supplémentaire

Documentation Google Maps : https://developers.google.com/maps/documentation/embed/get-started
