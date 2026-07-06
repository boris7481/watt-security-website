# Prompts de génération des médias — Watt Security

Ce dossier contient l'ensemble des prompts détaillés permettant de générer, avec un outil d'IA générative (image ou vidéo), tous les médias finaux du site Watt Security, en remplacement des placeholders SVG actuels (`assets/images/*/placeholder-*.svg`).

**Ce dossier ne contient que de la documentation.** Aucune image, aucune vidéo n'a été générée ni téléchargée dans le cadre de ce milestone — conformément à la consigne, aucun fichier HTML, CSS, JavaScript ou JSON n'a été modifié non plus.

## Comment utiliser ces documents

Chaque fichier de ce dossier couvre un emplacement média identifié lors de l'audit du Milestone 20 (`documentation` du projet). Pour chaque média, vous trouverez :

1. Un tableau détaillant les 15 critères requis (style, ambiance, couleurs, vêtements, véhicules, chiens, type de bâtiment, éclairage, heure, cadrage, focale, réalisme, résolution, ratio, éléments à éviter).
2. Un **prompt final assemblé**, prêt à copier-coller directement dans un outil de génération d'image ou de vidéo (Midjourney, DALL·E, Stable Diffusion, Runway, Sora, etc. — le texte est rédigé de façon générique, sans paramètres propriétaires à un outil en particulier).
3. Le fichier de destination exact où le média final devra être placé (même nom de dossier, seul le nom de fichier passe de `placeholder-*.svg` à l'asset réel, per `architecture/FILE_NAMING_CONVENTIONS.md`).

## Fichiers de ce dossier

| Fichier | Contenu |
|---|---|
| [01-hero.md](01-hero.md) | Hero Section — photo (poster/fallback) et vidéo |
| [02-gallery.md](02-gallery.md) | Les 9 photos de la Galerie (8 demandées + Surveillance industrielle, voir note) |
| [03-k9-section.md](03-k9-section.md) | Image vedette de la section K9 (distincte de la vignette Galerie K9) |
| [04-open-graph.md](04-open-graph.md) | Image de partage social (Open Graph / Twitter Card) |
| [05-logo.md](05-logo.md) | Documentation d'optimisation du logo existant (aucun prompt IA — le logo officiel n'est ni régénéré ni modifié) |

## Identité graphique commune à tous les prompts (à ne jamais omettre)

Chaque prompt individuel intègre déjà ces éléments, mais ils sont rassemblés ici comme référence unique — per `design/DESIGN_SYSTEM.md`, `design/COLOR_PALETTE.md` et `specifications/MEDIA_SPECIFICATION.md` :

- **Philosophie visuelle :** Autorité, Sobriété, Précision — l'esthétique de référence est celle des groupes de sécurité, de défense et des services corporate premium internationaux, jamais celle d'une startup tech (pas de couleurs vives, pas de formes arrondies ludiques, pas de mise en scène spectaculaire).
- **Palette obligatoire :** Watt Navy `#0B1A33`, Watt Navy Deep `#08131F`, Watt Gold `#B8933E` (accent réservé, jamais dominant), Pearl White `#F7F7F5`. Aucune autre teinte dominante (pas de bleu vif, pas de vert, pas de orange chaud).
- **Étalonnage colorimétrique :** légèrement froid/neutre, jamais chaud/orangé — cohérent avec le fond Watt Navy sur lequel les médias seront superposés (bandeaux, overlays).
- **Ton :** calme, procédural, professionnel — jamais dramatisé, jamais façon film d'action. Aucune arme braquée, aucune scène de confrontation ou de violence implicite.
- **Contexte géographique :** Douala, Cameroun — architecture, lumière et carnation ouest-africaines authentiques ; à éviter : imagerie stock générique, mannequins non-représentatifs, décor occidental/européen.
- **Marque :** aucun logo concurrent visible, aucune marque de sécurité tierce sur les uniformes/véhicules/écussons.
- **Réalisme :** photographie éditoriale corporate haut de gamme, jamais un rendu 3D, illustration, cartoon, ou style "IA" reconnaissable (pas de mains déformées, pas de texte incohérent en arrière-plan, pas de logos inventés flous).

## Note sur la couverture (Milestone 20)

La liste fournie pour ce milestone énumère 8 catégories de Galerie. L'audit du Milestone 20 en avait identifié **9** (la 9ᵉ étant *Surveillance industrielle*, `assets/images/surveillance/placeholder-surveillance.svg` — déjà présente sur le site et listée comme service à part entière dans `README.md`). Pour respecter la consigne de test de ce milestone (« vérifier que chaque emplacement média identifié au Milestone 20 possède désormais un prompt correspondant »), j'ai ajouté un prompt pour cette 9ᵉ catégorie — signalé explicitement dans [02-gallery.md](02-gallery.md) et dans le rapport final, à valider.

Les avatars de témoignages, le favicon et l'Apple Touch Icon (également présents dans l'audit du Milestone 20) n'ont **pas** reçu de prompt : ce ne sont pas des candidats à la génération IA au même titre que les photos de site (respectivement : photos de clients réels donc problématique de consentement/fabrication d'identité, et exports techniques dérivés du logo). Voir le rapport final pour le détail.
