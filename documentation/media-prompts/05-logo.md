# Logo optimisé — Documentation uniquement

**Aucun prompt de génération IA dans ce fichier.** Le logo officiel de Watt Security existe déjà (`assets/logo/logo_watt.jpg`) et ne doit ni être régénéré, ni modifié, ni réinterprété par une IA — conformément à la consigne de ce milestone et aux instructions permanentes du projet. Ce document décrit uniquement le travail d'**optimisation technique** (export/compression) déjà identifié comme point ouvert au Milestone 19.

## Constat (Milestone 19)

Le fichier `assets/logo/logo_watt.jpg` pèse 120 Ko pour des dimensions de 2048×2041px, alors qu'il n'est jamais affiché à plus de 48px de hauteur sur le site (header : 40–48px, footer : 44px). C'est le plus gros gain de performance restant sur le site.

## Travail attendu (humain ou outil d'export, pas génération IA)

| Élément | Destination | Dimensions | Format | Poids max conseillé | Notes |
|---|---|---|---|---|---|
| Logo header/footer optimisé | `assets/logo/logo_watt.svg` *(idéal)* ou `assets/logo/logo_watt-optimized.png` | Vectoriel (SVG) ou 288×288px (PNG, @2x de l'affichage 144px max) | SVG de préférence ; PNG avec transparence sinon | < 15 Ko | Le SVG est préférable car il reste net à toute taille et ne nécessite qu'un seul fichier (pas de `@1x`/`@2x`) |
| Apple Touch Icon | `assets/icons/apple-touch-icon.png` | 180×180px | PNG, sans transparence (iOS l'ignore) | < 50 Ko | Recadrage carré du logo, fond Watt Navy plein si le logo a des zones transparentes |
| Favicon PNG (fallback) | `assets/icons/favicon-16x16.png`, `favicon-32x32.png` | 16×16, 32×32 | PNG | < 5 Ko chacun | Le favicon SVG vectoriel actuel (`assets/icons/favicon.svg`) reste la version principale pour les navigateurs modernes |

## Méthode recommandée

1. **Si un fichier source vectoriel du logo existe** (Illustrator, Figma, `.ai`, `.eps`) : exporter directement en SVG optimisé (nettoyé des métadonnées d'éditeur, per `architecture/PERFORMANCE_STRATEGY.md` §4) — c'est la solution idéale, sans perte de qualité à aucune taille d'affichage.
2. **Si seul le JPEG actuel est disponible** : recadrer au carré si nécessaire, redimensionner à 288×288px (2x de l'affichage desktop le plus grand, 48px), ré-exporter en PNG avec compression optimisée (outils : Squoosh, TinyPNG, ou équivalent), sans passer par une IA générative qui altérerait le design réel de la marque.
3. Dans les deux cas, mettre à jour les balises `<img>` dans `index.html` (header, footer) et le champ `og:image`/JSON-LD dans le `<head>` — **hors périmètre de ce milestone documentation-only**, à traiter lors du milestone d'intégration finale des médias.

## Éléments à ne jamais faire

- Ne jamais demander à un outil d'IA générative de "recréer" ou "réinterpréter" le logo — un logo d'entreprise est un actif de marque fixe, pas un sujet de génération.
- Ne jamais changer les couleurs, proportions ou le contenu du logo existant.
- Ne jamais remplacer le logo par une variante générée avant validation explicite du client.
