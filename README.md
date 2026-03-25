# Clément Bouvier - Cours d'anglais & d'allemand

Site vitrine avec système de réservation Calendly et CMS intégré (Decap CMS).

## Stack technique

- **Astro 5** - Générateur de site statique
- **TailwindCSS** - Framework CSS
- **Decap CMS** - Interface d'administration (ex-Netlify CMS)
- **Calendly** - Système de réservation (tier gratuit)
- **Netlify Forms** - Formulaire de contact
- **Netlify** - Hébergement (tier gratuit)

## Déploiement sur Netlify (pas à pas)

### 1. Créer le repo GitHub

```bash
cd clement-langues
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE-COMPTE/clement-langues.git
git push -u origin main
```

### 2. Connecter à Netlify

1. Aller sur [app.netlify.com](https://app.netlify.com)
2. Cliquer **"Add new site" > "Import an existing project"**
3. Connecter GitHub et sélectionner le repo `clement-langues`
4. Les paramètres de build sont automatiquement lus depuis `netlify.toml`
5. Cliquer **"Deploy"**

### 3. Activer Netlify Identity (pour le CMS)

1. Dans Netlify, aller dans **Site settings > Identity**
2. Cliquer **"Enable Identity"**
3. Sous **Registration**, choisir **"Invite only"** (important !)
4. Sous **Services > Git Gateway**, cliquer **"Enable Git Gateway"**
5. Aller dans l'onglet **Identity** et cliquer **"Invite users"**
6. Entrer l'email de Clément pour lui créer un accès

### 4. Configurer Calendly

1. Créer un compte gratuit sur [calendly.com](https://calendly.com)
2. Créer un type d'événement (ex: "Cours découverte - 30 min")
3. Configurer les disponibilités
4. Copier l'URL de l'événement (ex: `https://calendly.com/clement-bouvier/cours-decouverte`)
5. Se connecter à l'admin du site (`votresite.netlify.app/admin`)
6. Modifier le champ **"URL Calendly"** avec cette URL
7. Publier

### 5. Nom de domaine (optionnel)

1. Acheter un domaine (ex: `clement-langues.fr`)
2. Dans Netlify : **Domain management > Add custom domain**
3. Suivre les instructions pour configurer les DNS

## Administration du site

### Accéder à l'interface admin

Se rendre sur `https://votresite.netlify.app/admin/`

### Ce qui est modifiable

- **Textes** : nom, titre, accroche, paragraphes "À propos"
- **Langues** : ajouter/modifier/supprimer des langues enseignées
- **Tarifs** : modifier les prix, formules, détails
- **Témoignages** : ajouter/modifier/supprimer des avis
- **URL Calendly** : lien vers le calendrier de réservation
- **Coordonnées** : email, téléphone, localisation

### Comment modifier les tarifs

1. Aller sur `/admin/`
2. Cliquer sur **"Paramètres du site" > "Données du site"**
3. Descendre jusqu'à la section **"Tarifs"**
4. Modifier les champs voulus
5. Cliquer **"Publish"** en haut à droite
6. Le site se reconstruit automatiquement en ~30 secondes

## Développement local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:4321`
