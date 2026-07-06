# Galerie photo — 9 catégories

Contexte : `specifications/HOME_PAGE_SPECIFICATION.md` §8, `specifications/MEDIA_SPECIFICATION.md` §1. Toutes les images de cette section partagent le même gabarit technique : **ratio 4:3, 1200×900px, WebP (primaire) + JPEG (fallback), poids cible < 250–300 Ko, `srcset` recommandé (600w / 900w / 1200w).**

8 catégories étaient listées explicitement dans ce milestone ; la 9ᵉ (*Surveillance industrielle*) a été ajoutée pour couvrir l'intégralité de l'audit du Milestone 20 (voir `README.md` de ce dossier) — signalée ci-dessous.

---

## 1. Sécurité d'entreprise

**Destination :** `assets/images/corporate/corporate-office-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Reportage corporate posé, sujet réel en situation |
| Ambiance | Professionnalisme discret, sérénité maîtrisée |
| Couleurs | Froid/neutre, dominante Watt Navy, accent gold minime (badge) |
| Vêtements | Uniforme sombre ajusté, badge Watt Security discret, pas de logo tiers |
| Véhicules | Non applicable (scène d'intérieur/entrée d'immeuble) |
| Chiens | Non applicable |
| Type de bâtiment | Hall d'entrée ou façade d'un immeuble de bureaux moderne à Douala, verre et béton, architecture contemporaine ouest-africaine |
| Éclairage | Lumière de jour naturelle diffuse, complétée par l'éclairage intérieur du hall |
| Heure | Milieu de journée |
| Cadrage | Plan moyen, agent posté près de l'entrée, ligne de fuite du hall visible |
| Focale | Équivalent 35mm |
| Niveau de réalisme | Photoréalisme absolu, aucun artefact IA |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Décor occidental générique, logo concurrent, sourire forcé façon stock photo, éclairage plat |

**Prompt final assemblé :**
> Ultra-realistic corporate editorial photograph of a professional private security agent stationed calmly at the glass entrance lobby of a modern office building in Douala, Cameroon, at midday. Dark navy tailored uniform, discreet Watt Security badge, composed and attentive posture. Cool neutral color grading, navy-dominant tones, subtle gold accent only on the badge. Natural diffused daylight combined with warm interior lobby lighting. Medium shot, 35mm equivalent, leading lines of the lobby visible behind the subject. Authentic contemporary West African corporate architecture — glass and concrete. Fully photorealistic, no AI artifacts, no distorted hands, no invented logos. No competitor branding, no forced stock-photo smile, no flat lighting. 4:3 aspect ratio, 1200×900 minimum.

---

## 2. Surveillance industrielle *(ajoutée — voir note de couverture)*

**Destination :** `assets/images/surveillance/surveillance-site-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Photographie industrielle/technique, cadrage précis |
| Ambiance | Rigueur technique, vigilance continue |
| Couleurs | Froid/neutre, dominante Watt Navy Deep en cas de scène nocturne |
| Vêtements | Non applicable (le sujet principal est l'équipement) — si un agent est présent en arrière-plan, uniforme identique aux autres prompts |
| Véhicules | Non applicable |
| Chiens | Non applicable |
| Type de bâtiment | Site industriel/entrepôt à Douala — clôture, portail, façade métallique |
| Éclairage | Lumière naturelle en journée ou éclairage de site nocturne (projecteurs) pour une caméra visiblement active la nuit |
| Heure | Indifféremment jour ou nuit — privilégier la nuit pour renforcer le message "surveillance continue" |
| Cadrage | Plan rapproché sur une caméra de vidéosurveillance montée sur mât ou façade, site industriel net en arrière-plan flou |
| Focale | Équivalent 50–85mm (isolation du sujet caméra) |
| Niveau de réalisme | Photoréalisme technique, détails de la caméra crédibles (pas de modèle inventé absurde) |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Caméra factice/jouet, style science-fiction, halo lumineux irréaliste, logo de marque de caméra inventé et illisible |

**Prompt final assemblé :**
> Ultra-realistic technical photograph of a professional CCTV surveillance camera mounted on an industrial site facade in Douala, Cameroon, at night. Cool neutral color grading, deep navy night tones, site floodlights providing controlled practical illumination. Close-up framing on the camera housing (50–85mm equivalent) with the industrial warehouse site softly blurred behind it. Credible, realistic camera hardware design — no invented sci-fi devices. Fully photorealistic, no unrealistic lens flare or glowing halos, no illegible fake brand logos. 4:3 aspect ratio, 1200×900 minimum.

---

## 3. Sécurité résidentielle

**Destination :** `assets/images/residential/residential-site-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Reportage discret, posture protectrice non intrusive |
| Ambiance | Confiance tranquille, discrétion |
| Couleurs | Froid/neutre, dominante Watt Navy |
| Vêtements | Uniforme sombre, badge discret |
| Véhicules | Non applicable |
| Chiens | Non applicable |
| Type de bâtiment | Résidence privée à Douala — portail, mur d'enceinte, villa moderne |
| Éclairage | Lumière de fin d'après-midi, douce |
| Heure | Fin d'après-midi |
| Cadrage | Plan moyen, agent posté devant le portail, résidence visible en arrière-plan |
| Focale | Équivalent 35–50mm |
| Niveau de réalisme | Photoréalisme absolu |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Air menaçant, clôture délabrée, style favela/insécurité, logo concurrent |

**Prompt final assemblé :**
> Ultra-realistic editorial photograph of a professional private security agent standing discreetly at the gate of a modern private residence in Douala, Cameroon, in the soft light of late afternoon. Dark navy tailored uniform, discreet badge, calm and reassuring posture, non-intrusive stance. Cool neutral color grading, navy-dominant tones. Medium shot, 35–50mm equivalent, well-maintained residential compound wall and modern villa visible behind. Fully photorealistic, no AI artifacts. No threatening expression, no run-down fencing, no informal/insecure aesthetic, no competitor branding. 4:3 aspect ratio, 1200×900 minimum.

---

## 4. Sécurité événementielle

**Destination :** `assets/images/events/event-security-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Reportage événementiel dynamique mais posé |
| Ambiance | Contrôle fluide des flux, professionnalisme |
| Couleurs | Froid/neutre, dominante Watt Navy, éventuelle lumière scénique en arrière-plan sans dominer l'image |
| Vêtements | Uniforme sombre, badge visible, éventuellement oreillette discrète |
| Véhicules | Non applicable |
| Chiens | Non applicable |
| Type de bâtiment | Entrée d'un centre de conférence, salle de réception ou espace événementiel extérieur à Douala |
| Éclairage | Lumière artificielle d'événement (chaleureuse en arrière-plan) contrebalancée par un étalonnage global froid |
| Heure | Soirée |
| Cadrage | Plan large, agent gérant un point de contrôle d'accès avec des invités en arrière-plan flou |
| Focale | Équivalent 35mm |
| Niveau de réalisme | Photoréalisme absolu, foule en arrière-plan crédible (pas de visages déformés) |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Cohue/bousculade, éclairage de type discothèque criard, logo concurrent, visages déformés en arrière-plan |

**Prompt final assemblé :**
> Ultra-realistic event security editorial photograph of a professional agent managing an access checkpoint at the entrance of a conference or reception venue in Douala, Cameroon, in the evening. Dark navy tailored uniform, visible badge, discreet earpiece, composed and attentive. Cool neutral color grading overall, with warm ambient event lighting visible but not dominant in the background. Wide shot, 35mm equivalent, softly blurred guests in the background with realistic, undistorted faces. Fully photorealistic. No crowd crush, no garish nightclub-style lighting, no competitor branding, no distorted background faces. 4:3 aspect ratio, 1200×900 minimum.

---

## 5. Patrouilles

**Destination :** `assets/images/patrols/patrol-round-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Reportage procédural, sujet en mouvement naturel |
| Ambiance | Vigilance active, discipline |
| Couleurs | Froid/neutre, dominante Watt Navy Deep (scène nocturne) |
| Vêtements | Uniforme sombre, lampe torche tactique en main, badge visible |
| Véhicules | Véhicule de patrouille flouté en arrière-plan, floqué discrètement |
| Chiens | Non applicable |
| Type de bâtiment | Périmètre de site industriel ou résidentiel, clôture, allée |
| Éclairage | Éclairage nocturne de site + faisceau de lampe torche |
| Heure | Nuit |
| Cadrage | Plan moyen-large, agent en marche le long d'un périmètre |
| Focale | Équivalent 35mm |
| Niveau de réalisme | Photoréalisme absolu, faisceau lumineux crédible (pas d'effet "rayon laser") |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Posture menaçante, arme dégainée, effet lumineux exagéré façon jeu vidéo |

**Prompt final assemblé :**
> Ultra-realistic procedural photograph of a professional security agent walking a night patrol round along the perimeter fence of a site in Douala, Cameroon. Dark navy tailored uniform, badge visible, holding a tactical flashlight with a realistic, natural beam. A subtly branded navy patrol vehicle softly blurred in the background. Cool neutral color grading, deep navy night tones, site perimeter lighting. Medium-wide shot, 35mm equivalent, natural mid-stride walking posture. Fully photorealistic, no video-game-style light beams. No threatening posture, no drawn weapon, no exaggerated lighting effects. 4:3 aspect ratio, 1200×900 minimum.

---

## 6. Contrôle d'accès

**Destination :** `assets/images/access-control/access-control-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Reportage procédural rapproché |
| Ambiance | Rigueur, courtoisie professionnelle |
| Couleurs | Froid/neutre, dominante Watt Navy |
| Vêtements | Uniforme sombre, badge visible ; visiteur en tenue professionnelle courante |
| Véhicules | Non applicable |
| Chiens | Non applicable |
| Type de bâtiment | Poste de contrôle d'accès / guérite à l'entrée d'un site d'entreprise ou industriel |
| Éclairage | Lumière de jour naturelle |
| Heure | Milieu de journée |
| Cadrage | Plan rapproché sur l'agent vérifiant un badge/pièce d'identité d'un visiteur |
| Focale | Équivalent 50mm |
| Niveau de réalisme | Photoréalisme absolu, mains et documents crédibles |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Document/texte illisible et absurde généré par erreur, mains déformées, logo concurrent |

**Prompt final assemblé :**
> Ultra-realistic close-up editorial photograph of a professional security agent carefully verifying a visitor's ID badge at an access control checkpoint at a corporate site entrance in Douala, Cameroon, at midday. Dark navy tailored uniform, visible badge, calm and rigorous demeanor; the visitor is dressed in ordinary professional attire. Cool neutral color grading, navy-dominant tones, natural daylight. Close shot, 50mm equivalent, realistic hands and ID card/document. Fully photorealistic, no distorted hands, no garbled or nonsensical text on the ID card. No competitor branding. 4:3 aspect ratio, 1200×900 minimum.

---

## 7. Centre de contrôle

**Destination :** `assets/images/control-room/control-room-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Reportage technique intérieur |
| Ambiance | Concentration, maîtrise technologique calme |
| Couleurs | Froid/neutre, dominante Watt Navy Deep, lueurs d'écrans bleu-gris |
| Vêtements | Uniforme ou tenue d'opérateur sombre, badge discret |
| Véhicules | Non applicable |
| Chiens | Non applicable |
| Type de bâtiment | Salle de contrôle/supervision intérieure, murs d'écrans de vidéosurveillance |
| Éclairage | Faible éclairage ambiant, dominante des écrans (lumière froide bleutée) |
| Heure | Indifférent (scène intérieure sans fenêtre) |
| Cadrage | Plan large ou moyen, opérateur de dos ou de trois-quarts face aux écrans |
| Focale | Équivalent 35mm |
| Niveau de réalisme | Photoréalisme absolu, interfaces d'écran crédibles et non-lisibles en détail (éviter tout texte halluciné) |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Interface façon film de science-fiction improbable, texte d'écran absurde/illisible mis en avant, logo concurrent |

**Prompt final assemblé :**
> Ultra-realistic technical editorial photograph of a security control room operator monitoring a wall of CCTV screens in Douala, Cameroon. Dark, understated operator attire with a discreet badge, calm and focused posture, shown from behind or three-quarter angle facing the monitor wall. Cool neutral color grading, low ambient light dominated by the bluish glow of the screens, deep navy undertones. Wide-to-medium shot, 35mm equivalent. Fully photorealistic, credible but non-legible screen interfaces (avoid any readable or nonsensical on-screen text), no far-fetched sci-fi UI. No competitor branding. 4:3 aspect ratio, 1200×900 minimum.

---

## 8. Équipes cynophiles K9

**Destination :** `assets/images/k9/k9-gallery-01.webp` (+ `.jpg`) — *distincte de l'image vedette de la section K9, voir `03-k9-section.md`*

| Critère | Spécification |
|---|---|
| Style photographique | Reportage procédural extérieur |
| Ambiance | Discipline, complicité maître-chien, vigilance |
| Couleurs | Froid/neutre, dominante Watt Navy |
| Vêtements | Uniforme sombre du maître-chien, harnais/laisse professionnels pour le chien |
| Véhicules | Non applicable |
| Chiens | Berger malinois ou berger allemand, pelage réaliste, en position de patrouille calme (pas agressif, gueule fermée ou légèrement ouverte sans montrer les crocs de façon menaçante) |
| Type de bâtiment | Périmètre extérieur d'un site sensible (industriel ou logistique) |
| Éclairage | Lumière naturelle de jour ou fin de journée |
| Heure | Jour ou crépuscule |
| Cadrage | Plan moyen, maître-chien et chien en marche côte à côte |
| Focale | Équivalent 50mm |
| Niveau de réalisme | Photoréalisme absolu, anatomie canine correcte |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Chien à l'air agressif/crocs sortis, muselière (image anxiogène), race de chien non professionnelle (petit chien de compagnie), anatomie canine déformée |

**Prompt final assemblé :**
> Ultra-realistic procedural photograph of a professional K9 security handler walking alongside a well-trained Belgian Malinois or German Shepherd on a professional leash and harness, patrolling the perimeter of an industrial or logistics site in Douala, Cameroon, during daytime or early dusk. Dark navy tailored handler uniform, discreet badge, calm confident partnership between handler and dog. Cool neutral color grading, navy-dominant tones, natural daylight. Medium shot, 50mm equivalent, both handler and dog in mid-stride. Fully photorealistic, anatomically correct dog. No aggressive bared teeth, no muzzle, no small companion-breed dog, no distorted animal anatomy, no competitor branding. 4:3 aspect ratio, 1200×900 minimum.

---

## 9. Agents en intervention

**Destination :** `assets/images/agents/agents-field-01.webp` (+ `.jpg`)

| Critère | Spécification |
|---|---|
| Style photographique | Reportage d'équipe, posture professionnelle groupée |
| Ambiance | Cohésion, réactivité, discipline collective |
| Couleurs | Froid/neutre, dominante Watt Navy |
| Vêtements | Uniformes sombres identiques, badges Watt Security visibles |
| Véhicules | Véhicule de patrouille floqué, visible en arrière-plan |
| Chiens | Non applicable |
| Type de bâtiment | Terrain extérieur d'un site client (parking, entrée de site) |
| Éclairage | Lumière naturelle de jour |
| Heure | Milieu de journée |
| Cadrage | Plan large, groupe de 2 à 3 agents en position de briefing ou de déploiement |
| Focale | Équivalent 35mm |
| Niveau de réalisme | Photoréalisme absolu, cohérence des visages/postures entre les agents |
| Résolution souhaitée | 1200×900 (source ≥ 2400×1800 recommandée) |
| Ratio | 4:3 |
| Éléments à éviter | Pose façon photo de groupe scolaire figée, armes visibles de façon menaçante, logo concurrent |

**Prompt final assemblé :**
> Ultra-realistic editorial photograph of a team of two to three professional Watt Security agents mobilized on the field at a client site in Douala, Cameroon, during a daytime briefing or deployment moment. Identical dark navy tailored uniforms, visible Watt Security badges, a subtly branded navy patrol vehicle in the background. Cool neutral color grading, navy-dominant tones, natural daylight. Wide shot, 35mm equivalent, natural coordinated team posture — not a stiff posed group photo. Fully photorealistic, consistent faces and postures across the team. No visibly threatening weapons, no competitor branding. 4:3 aspect ratio, 1200×900 minimum.
