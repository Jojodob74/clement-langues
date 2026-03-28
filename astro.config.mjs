import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://clement-langues.netlify.app',
});
```

Mais attendons — avant de modifier, on doit aussi remettre `@astrojs/tailwind` dans le `package.json` avec la bonne version de TailwindCSS.

## Le vrai plan de correction

On va remettre les deux fichiers dans un état cohérent. Dans **`package.json`**, remplace la ligne 13 :
```
"tailwindcss": "^3.4.0"
```
par :
```
"@astrojs/tailwind": "^6.0.0",
"tailwindcss": "^3.4.0"
