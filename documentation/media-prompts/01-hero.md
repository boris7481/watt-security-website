# Hero Section — Photo & Vidéo

Contexte : `specifications/HOME_PAGE_SPECIFICATION.md` §1. La vidéo joue en boucle sur desktop/tablette ; la photo sert à la fois de poster (première frame pendant le chargement de la vidéo) et remplace entièrement la vidéo sur mobile (économie de données).

---

## 1. Hero — Photo (poster / fallback mobile)

**Destination :** `assets/images/hero/hero-poster.webp` (+ fallback `.jpg`) — dossier à créer.

| Critère | Spécification |
|---|---|
| Style photographique | Photographie éditoriale corporate, format reportage posé — sujet réel, posture naturelle mais dirigée, jamais un cliché de banque d'images |
| Ambiance | Calme, maîtrisée, vigilante — autorité tranquille, pas de tension ni d'agressivité |
| Couleurs | Étalonnage froid/neutre dominante Watt Navy (`#0B1A33`) / Watt Navy Deep (`#08131F`) ; touche de Watt Gold (`#B8933E`) uniquement sur un détail (écusson, liseré d'uniforme) — jamais en grande surface |
| Vêtements | Uniforme de sécurité privée sombre (bleu marine/noir), coupe ajustée et soignée, écusson/badge Watt Security discret sur la poitrine, pas de logo tiers |
| Véhicules | Un véhicule de patrouille floqué discrètement (Watt Navy, liseré gold fin) visible en arrière-plan flou, optionnel |
| Chiens | Non applicable pour cette image (le K9 a sa propre section, voir `03-k9-section.md`) |
| Type de bâtiment | Entrée d'un immeuble de bureaux moderne ou site industriel/résidentiel à Douala — architecture ouest-africaine contemporaine, pas de décor occidental |
| Éclairage | Lumière naturelle rasante de fin de journée (golden hour atténuée, sans dominante orange forte) ou éclairage nocturne maîtrisé (lampadaires, projecteurs de site) — cohérent avec le thème "vigilance 24h/24" |
| Heure | Crépuscule ou nuit tombante — renforce le message de surveillance continue |
| Cadrage | Plan large, sujet légèrement décentré (règle des tiers) pour laisser un espace négatif à gauche ou à droite, réservé au texte H1/CTA superposé |
| Focale | Équivalent 35–50 mm, faible profondeur de champ (f/2.8–f/4) pour détacher le sujet du fond |
| Niveau de réalisme | Photoréalisme absolu — aucun artefact IA visible (mains, visages, texte d'arrière-plan cohérents) |
| Résolution souhaitée | 1920×1080 minimum (livrable final), source si possible en 3840×2160 pour permettre un recadrage mobile propre |
| Ratio | 16:9 (desktop) — prévoir un recadrage vertical 3:4 pour la variante mobile (750×1000) |
| Éléments à éviter | Armes braquées ou menaçantes, expression agressive, flou de bougé non maîtrisé, logo concurrent, texte incrusté dans l'image, style cartoon/3D/illustration, éclairage plat et terne |

**Prompt final assemblé :**
> Ultra-realistic editorial corporate photograph of a professional private security agent standing calmly at the entrance of a modern office building in Douala, Cameroon, at dusk. Dark navy blue uniform, sharply tailored, small discreet security badge on the chest, calm and vigilant posture, hands relaxed. Cool, neutral color grading with a deep navy blue dominant tone and a single subtle warm gold accent on the badge — no orange or warm cast. Soft directional dusk light with practical building lights turning on in the background, shallow depth of field (f/2.8), 35–50mm equivalent framing, subject offset to one third of the frame to leave negative space for text overlay. Contemporary West African architecture, authentic Douala context, no Western stock-photo look. Extremely photorealistic, no visible AI artifacts, no distorted hands or faces, no invented background text or logos. No weapons drawn, no aggressive expression, no competitor branding. 16:9 aspect ratio, minimum 1920×1080, ideally sourced at 3840×2160 for a clean vertical crop.

---

## 2. Hero — Vidéo (boucle desktop/tablette)

**Destination :** `assets/videos/hero/hero-loop.mp4` (+ `.webm`) — dossier à créer.

| Critère | Spécification |
|---|---|
| Style photographique (vidéographie) | B-roll institutionnel calme, mouvements de caméra lents et stabilisés (travelling latéral ou léger zoom avant imperceptible) — jamais de caméra à l'épaule nerveuse |
| Ambiance | Contrôle, discipline, professionnalisme — aucune dramatisation, aucun montage "film d'action" |
| Couleurs | Même étalonnage que la photo hero : froid/neutre, dominante Watt Navy, aucune dominante chaude |
| Vêtements | Identique à la photo hero — uniforme sombre, écusson Watt Security discret |
| Véhicules | Un véhicule de patrouille floqué peut apparaître en mouvement lent (arrivée/départ de site), toujours en second plan |
| Chiens | Non applicable |
| Type de bâtiment | Site d'entreprise ou zone résidentielle surveillée, architecture Douala authentique |
| Éclairage | Lumière naturelle de fin de journée ou éclairage nocturne de site (projecteurs, lampadaires) — cohérent avec la photo poster (même scène/heure si possible pour une continuité poster→vidéo) |
| Heure | Crépuscule ou nuit |
| Cadrage | Plan large fixe ou travelling très lent, sujet cadré avec espace négatf pour le texte superposé (H1, CTA) qui reste identique pendant toute la boucle |
| Focale | Équivalent 24–35mm pour les plans larges (contexte du site), 50mm pour un éventuel plan resserré sur l'agent |
| Niveau de réalisme | Photoréalisme vidéo complet, aucun artefact de génération (scintillement, morphing, membres qui se déforment) |
| Résolution souhaitée | 1920×1080 (1080p) minimum, débit contrôlé ~4–6 Mbps à l'export final |
| Ratio | 16:9 |
| Éléments à éviter | Musique ou son (la vidéo doit rester muette par défaut), coupes rapides, zoom brutal, texte incrusté, armes, scène de confrontation, logo concurrent, style "montage publicitaire agressif" |

**Prompt final assemblé :**
> Extremely realistic, calm institutional b-roll video loop (15–30 seconds, seamless loop) of a professional private security presence at a corporate site entrance in Douala, Cameroon, at dusk. Slow, stabilized camera movement — a gentle lateral pan or barely perceptible slow push-in, never handheld or shaky. A security agent in a dark navy tailored uniform with a small discreet badge stands or walks calmly across the frame; a subtly branded navy patrol vehicle with a thin gold accent line may arrive or depart slowly in the background. Cool, neutral color grading, deep navy dominant tones, no warm/orange cast, consistent with the poster frame. Soft dusk light or controlled nighttime site lighting (streetlights, floodlights). Wide 24–35mm equivalent framing with negative space reserved for overlaid text that stays constant throughout the loop. Authentic contemporary West African architecture. Fully photorealistic video, no morphing artifacts, no flickering, no distorted limbs or faces. No music, no dialogue, no fast cuts, no weapons, no confrontation, no competitor branding, no on-screen text baked into the footage. 16:9, 1920×1080 minimum, ~4–6 Mbps target bitrate, calm procedural tone throughout.
