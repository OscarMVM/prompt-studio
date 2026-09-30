import type { LibraryItem } from '@/types/library'

export const styleLibrary: LibraryItem[] = [
  { id: 'anime', category: 'style', name: 'Anime', tags: ['anime', 'japonés'], promptValue: 'anime style, cel shading, vibrant colors' },
  { id: 'semi-realistic', category: 'style', name: 'Semi Realista', tags: ['realista', 'semi'], promptValue: 'semi-realistic, detailed rendering' },
  { id: 'comic', category: 'style', name: 'Cómic', tags: ['cómic', 'marvel', 'dc'], promptValue: 'comic book style, bold lines, halftone dots' },
  { id: 'disney', category: 'style', name: 'Disney', tags: ['disney', 'cartoon'], promptValue: 'Disney style, 3D cartoon, expressive features' },
  { id: 'pixar', category: 'style', name: 'Pixar', tags: ['pixar', '3d'], promptValue: 'Pixar style, 3D render, soft lighting' },
  { id: 'arcane', category: 'style', name: 'Arcane', tags: ['arcane', 'league'], promptValue: 'Arcane style, painterly textures, stylized realism' },
  { id: 'final-fantasy', category: 'style', name: 'Final Fantasy', tags: ['ff', 'square'], promptValue: 'Final Fantasy style, detailed fantasy design' },
  { id: 'dark-fantasy', category: 'style', name: 'Fantasía Oscura', tags: ['oscuro', 'gótico'], promptValue: 'dark fantasy, ominous atmosphere, muted tones' },
  { id: 'ghibli', category: 'style', name: 'Studio Ghibli', tags: ['ghibli', 'miyazaki'], promptValue: 'Studio Ghibli style, soft watercolor, whimsical' },
  { id: 'cyberpunk', category: 'style', name: 'Cyberpunk', tags: ['cyber', 'neón', 'sci-fi'], promptValue: 'cyberpunk style, neon lights, futuristic' },
  { id: 'steampunk', category: 'style', name: 'Steampunk', tags: ['steam', 'victoriano'], promptValue: 'steampunk style, brass gears, Victorian aesthetic' },
  { id: 'dieselpunk', category: 'style', name: 'Dieselpunk', tags: ['diesel', 'retro'], promptValue: 'dieselpunk style, industrial, retro-futuristic' },
  { id: 'watercolor', category: 'style', name: 'Acuarela', tags: ['pintura', 'tradicional'], promptValue: 'watercolor painting, soft edges, flowing colors' },
  { id: 'oil-painting', category: 'style', name: 'Pintura al Óleo', tags: ['pintura', 'clásica'], promptValue: 'oil painting, rich textures, classical technique' },
  { id: 'sketch', category: 'style', name: 'Boceto', tags: ['dibujo', 'lápiz'], promptValue: 'pencil sketch, hand-drawn, rough lines' },
  { id: 'ink', category: 'style', name: 'Tinta', tags: ['tinta', 'blanco-negro'], promptValue: 'ink illustration, high contrast, detailed linework' },
  { id: 'pixel-art', category: 'style', name: 'Pixel Art', tags: ['pixel', 'retro', '8bit'], promptValue: 'pixel art, 16-bit style, retro gaming' },
  { id: 'low-poly', category: 'style', name: 'Low Poly', tags: ['3d', 'geométrico'], promptValue: 'low poly style, geometric shapes, minimalist 3D' },
  { id: 'cell-shading', category: 'style', name: 'Cel Shading', tags: ['cel', 'toon'], promptValue: 'cel shading, flat colors, bold outlines' },
  { id: 'photorealistic', category: 'style', name: 'Fotorrealista', tags: ['foto', 'real'], promptValue: 'photorealistic, hyper detailed, 8K resolution' },
  { id: 'fantasy-illustration', category: 'style', name: 'Ilustración de Fantasía', tags: ['fantasía', 'arte'], promptValue: 'fantasy illustration, epic, detailed environment' },
  { id: 'concept-art', category: 'style', name: 'Concept Art', tags: ['concepto', 'diseño'], promptValue: 'concept art, character design sheet, professional' },
]

export const cameraLibrary: LibraryItem[] = [
  { id: 'eye-level', category: 'camera', name: 'Ángulo normal (nivel de mirada)', description: 'La cámara queda aproximadamente a la altura de los ojos y apunta horizontalmente. Da una perspectiva cercana a la percepción cotidiana; describe la inclinación, no el tamaño del plano.', tags: ['ángulo', 'inclinación', 'neutro'], promptValue: 'eye-level shot, camera at subject eye height, level horizon' },
  { id: 'low-angle', category: 'camera', name: 'Contrapicado', description: 'La cámara está por debajo del sujeto y orienta el objetivo hacia arriba. Cuanto más bajo el punto de vista, más dominante puede parecer el sujeto; no exige colocar la cámara a ras de suelo.', tags: ['ángulo', 'inclinación', 'desde abajo'], promptValue: 'low-angle shot, camera below subject, looking upward' },
  { id: 'high-angle', category: 'camera', name: 'Picado', description: 'La cámara está por encima del sujeto y orienta el objetivo hacia abajo. Puede reducir visualmente al sujeto; no es necesariamente una vista vertical.', tags: ['ángulo', 'inclinación', 'desde arriba'], promptValue: 'high-angle shot, camera above subject, looking downward' },
  { id: 'dutch-angle', category: 'camera', name: 'Ángulo holandés (inclinado)', description: 'La cámara rota lateralmente sobre el eje del objetivo, inclinando el horizonte y las verticales. La inclinación es roll; no significa mirar desde arriba o desde abajo.', tags: ['ángulo', 'roll', 'horizonte inclinado'], promptValue: 'dutch angle, camera roll, tilted horizon' },
  { id: 'over-shoulder', category: 'camera', name: 'Plano sobre el hombro (OTS)', description: 'La cámara encuadra desde detrás de un personaje e incluye parte de su hombro o cabeza en primer término, mirando hacia otro sujeto. Es un encuadre de conversación, no una inclinación vertical.', tags: ['encuadre', 'conversación', 'ots'], promptValue: 'over-the-shoulder shot, foreground shoulder framing the subject' },
  { id: 'top-down', category: 'camera', name: 'Cenital', description: 'La cámara se coloca directamente sobre el sujeto y apunta casi perpendicularmente hacia el suelo (aprox. 90°). Es una vista vertical extrema, más específica que un picado.', tags: ['ángulo', 'vertical', 'desde arriba'], promptValue: 'overhead top-down shot, camera directly above subject, looking straight down' },
  { id: 'bottom-up', category: 'camera', name: 'Nadir', description: 'La cámara se sitúa directamente debajo del sujeto y apunta casi perpendicularmente hacia arriba. Es el opuesto vertical del cenital, no cualquier contrapicado.', tags: ['ángulo', 'vertical', 'desde abajo'], promptValue: 'worm’s-eye nadir view, camera directly below subject, looking straight up' },
  { id: 'three-quarter', category: 'camera', name: 'Vista de tres cuartos', description: 'El sujeto se gira aproximadamente 30–45° respecto a la cámara, de modo que se ven el frente y un lateral. Indica la orientación del sujeto, no la altura ni la inclinación de cámara.', tags: ['orientación', 'vista', 'tres cuartos'], promptValue: 'three-quarter view, subject turned about 45 degrees toward camera' },
  { id: 'shoulder-height', category: 'camera', name: 'Altura de hombro', description: 'La cámara queda aproximadamente a la altura de los hombros. Describe la altura física de cámara; el objetivo aún puede apuntar horizontalmente, hacia arriba o hacia abajo.', tags: ['altura', 'cámara', 'hombro'], promptValue: 'camera positioned at subject shoulder height' },
  { id: 'hip-height', category: 'camera', name: 'Altura de cadera', description: 'La cámara se sitúa aproximadamente a la altura de la cadera o cintura. Es una posición baja respecto a la mirada, pero no implica por sí sola un contrapicado.', tags: ['altura', 'cámara', 'cadera'], promptValue: 'camera positioned at subject hip height' },
  { id: 'knee-height', category: 'camera', name: 'Altura de rodilla', description: 'La cámara queda aproximadamente a la altura de las rodillas. La altura baja puede combinarse con un eje horizontal o con un contrapicado.', tags: ['altura', 'cámara', 'rodilla'], promptValue: 'camera positioned at subject knee height' },
  { id: 'ground-level', category: 'camera', name: 'A ras de suelo', description: 'La cámara se coloca en el suelo o muy cerca de él. Esto define la altura, no hacia dónde apunta el objetivo; no equivale necesariamente a nadir.', tags: ['altura', 'cámara', 'suelo'], promptValue: 'ground-level shot, camera at or just above the ground' },
]

export const lensLibrary: LibraryItem[] = [
  { id: '24mm', category: 'lens', name: '24mm Gran Angular', tags: ['lente', 'angular'], promptValue: '24mm wide angle lens' },
  { id: '35mm', category: 'lens', name: '35mm', tags: ['lente', 'estándar'], promptValue: '35mm lens' },
  { id: '50mm', category: 'lens', name: '50mm', tags: ['lente', 'retrato'], promptValue: '50mm lens, natural perspective' },
  { id: '85mm', category: 'lens', name: '85mm Retrato', tags: ['lente', 'retrato', 'bokeh'], promptValue: '85mm portrait lens, shallow depth of field' },
  { id: '135mm', category: 'lens', name: '135mm Telephoto', tags: ['lente', 'tele'], promptValue: '135mm telephoto lens, compressed perspective' },
]

export const distanceLibrary: LibraryItem[] = [
  { id: 'extreme-close-up', category: 'distance', name: 'Primerísimo primer plano', description: 'Encuadra una parte muy concreta del rostro (por ejemplo, ojos y boca) o un detalle pequeño. El fragmento ocupa casi todo el encuadre y el contexto queda fuera.', tags: ['plano', 'detalle', 'rostro'], promptValue: 'extreme close-up, tightly framed facial detail' },
  { id: 'close-up', category: 'distance', name: 'Primer plano', description: 'Encuadra el rostro, normalmente desde la cabeza hasta los hombros. Prioriza la expresión facial y deja poco entorno visible.', tags: ['plano', 'rostro', 'expresión'], promptValue: 'close-up shot, head and shoulders filling the frame' },
  { id: 'medium-close-up', category: 'distance', name: 'Plano medio corto', description: 'Encuadra desde la cabeza hasta el pecho, aproximadamente. Mantiene legible la expresión y añade algo de lenguaje corporal.', tags: ['plano', 'pecho', 'retrato'], promptValue: 'medium close-up, framed from head to chest' },
  { id: 'medium-shot', category: 'distance', name: 'Plano medio', description: 'Encuadra al sujeto desde la cabeza hasta la cintura. Equilibra expresión, gestos de manos y contexto inmediato.', tags: ['plano', 'cintura', 'gestos'], promptValue: 'medium shot, framed from head to waist' },
  { id: 'medium-long-shot', category: 'distance', name: 'Plano medio largo', description: 'Encuadra aproximadamente desde la cabeza hasta las caderas o mitad del muslo. Muestra más postura y acción que el plano medio.', tags: ['plano', 'caderas', 'postura'], promptValue: 'medium long shot, framed from head to hips' },
  { id: 'american-shot', category: 'distance', name: 'Plano americano', description: 'Encuadra desde la cabeza hasta medio muslo, dejando las rodillas fuera. Se popularizó en el western para mostrar el arma y las manos sin perder la expresión.', tags: ['plano', 'medio muslo', 'western'], promptValue: 'cowboy shot, framed from head to mid-thigh, knees out of frame' },
  { id: 'full-body', category: 'distance', name: 'Plano entero', description: 'Muestra la figura completa de pies a cabeza, con el personaje ocupando la mayor parte del encuadre y poco espacio alrededor.', tags: ['plano', 'cuerpo entero', 'figura'], promptValue: 'full shot, entire figure visible head to toe, minimal surrounding space' },
  { id: 'long-shot', category: 'distance', name: 'Plano general', description: 'Muestra al personaje de cuerpo entero junto con una parte significativa del entorno. El espacio aporta contexto, pero el sujeto sigue siendo claramente identificable.', tags: ['plano', 'entorno', 'contexto'], promptValue: 'long shot, full figure visible within a clearly readable environment' },
  { id: 'wide-shot', category: 'distance', name: 'Gran plano general', description: 'El entorno domina la imagen y el personaje aparece pequeño o puede ser apenas una parte del paisaje. Sirve para establecer lugar, escala o aislamiento.', tags: ['plano', 'paisaje', 'escala'], promptValue: 'extreme long shot, environment dominates, subject small in frame' },
  { id: 'detail-shot', category: 'distance', name: 'Plano detalle', description: 'Aísla un objeto o una parte específica del cuerpo para dirigir la atención a su forma, textura o importancia narrativa. No tiene por qué ser un rostro.', tags: ['plano', 'detalle', 'objeto'], promptValue: 'insert shot, tightly framed detail of a specific object or body part' },
]

export const lightingLibrary: LibraryItem[] = [
  { id: 'studio', category: 'lighting', name: 'Iluminación de Estudio', tags: ['luz', 'estudio'], promptValue: 'studio lighting, professional' },
  { id: 'soft', category: 'lighting', name: 'Luz Suave', tags: ['luz', 'suave'], promptValue: 'soft diffused lighting, gentle shadows' },
  { id: 'hard', category: 'lighting', name: 'Luz Dura', tags: ['luz', 'dramática'], promptValue: 'hard dramatic lighting, strong shadows' },
  { id: 'rembrandt', category: 'lighting', name: 'Rembrandt', tags: ['luz', 'clásica'], promptValue: 'Rembrandt lighting, triangle of light on cheek' },
  { id: 'butterfly', category: 'lighting', name: 'Mariposa', tags: ['luz', 'belleza'], promptValue: 'butterfly lighting, beauty lighting' },
  { id: 'split', category: 'lighting', name: 'Luz Dividida', tags: ['luz', 'mitad'], promptValue: 'split lighting, half face illuminated' },
  { id: 'neon', category: 'lighting', name: 'Neón', tags: ['luz', 'cyber', 'colorida'], promptValue: 'neon lighting, colorful glow' },
  { id: 'moonlight', category: 'lighting', name: 'Luz de Luna', tags: ['luz', 'noche'], promptValue: 'moonlight, cool blue tones, night scene' },
  { id: 'golden-hour', category: 'lighting', name: 'Hora Dorada', tags: ['luz', 'cálida', 'atardecer'], promptValue: 'golden hour lighting, warm orange tones' },
  { id: 'volumetric', category: 'lighting', name: 'Volumétrica', tags: ['luz', 'niebla', 'rayos'], promptValue: 'volumetric lighting, god rays, atmospheric' },
  { id: 'backlight', category: 'lighting', name: 'Contraluz', tags: ['luz', 'borde'], promptValue: 'backlight, rim lighting, silhouette edges' },
  { id: 'ambient', category: 'lighting', name: 'Ambiente', tags: ['luz', 'natural'], promptValue: 'ambient lighting, natural illumination' },
]

export const compositionLibrary: LibraryItem[] = [
  { id: 'centered', category: 'composition', name: 'Centrada', tags: ['composición', 'simétrica'], promptValue: 'centered composition, symmetrical' },
  { id: 'golden-ratio', category: 'composition', name: 'Proporción Áurea', tags: ['composición', 'clásica'], promptValue: 'golden ratio composition' },
  { id: 'rule-of-thirds', category: 'composition', name: 'Regla de Tercios', tags: ['composición', 'estándar'], promptValue: 'rule of thirds composition' },
  { id: 'diagonal', category: 'composition', name: 'Diagonal', tags: ['composición', 'dinámica'], promptValue: 'diagonal composition, dynamic lines' },
  { id: 'dynamic', category: 'composition', name: 'Dinámica', tags: ['composición', 'acción'], promptValue: 'dynamic composition, movement' },
  { id: 'symmetry', category: 'composition', name: 'Simetría', tags: ['composición', 'equilibrada'], promptValue: 'perfect symmetry, balanced composition' },
  { id: 'negative-space', category: 'composition', name: 'Espacio Negativo', tags: ['composición', 'minimalista'], promptValue: 'negative space, minimalist composition' },
]

export const poseLibrary: LibraryItem[] = [
  { id: 'idle', category: 'pose', name: 'Idle', tags: ['pose', 'de pie'], promptValue: 'standing idle pose, relaxed' },
  { id: 'walk', category: 'pose', name: 'Caminar', tags: ['pose', 'movimiento'], promptValue: 'walking pose, mid-stride' },
  { id: 'run', category: 'pose', name: 'Correr', tags: ['pose', 'acción'], promptValue: 'running pose, dynamic movement' },
  { id: 'attack', category: 'pose', name: 'Atacar', tags: ['pose', 'combate'], promptValue: 'combat attack pose, aggressive stance' },
  { id: 'magic', category: 'pose', name: 'Lanzar Hechizo', tags: ['pose', 'magia'], promptValue: 'casting spell pose, hands raised, magical energy' },
  { id: 'death', category: 'pose', name: 'Muerte', tags: ['pose', 'caído'], promptValue: 'fallen pose, defeated' },
  { id: 'jump', category: 'pose', name: 'Saltar', tags: ['pose', 'aire'], promptValue: 'jumping pose, airborne' },
  { id: 'victory', category: 'pose', name: 'Victoria', tags: ['pose', 'celebrar'], promptValue: 'victory pose, triumphant stance' },
  { id: 'sit', category: 'pose', name: 'Sentarse', tags: ['pose', 'descanso'], promptValue: 'sitting pose, resting' },
  { id: 'fly', category: 'pose', name: 'Volar', tags: ['pose', 'aéreo'], promptValue: 'flying pose, aerial stance' },
]

export const expressionLibrary: LibraryItem[] = [
  { id: 'neutral', category: 'expression', name: 'Neutral', tags: ['cara', 'calma'], promptValue: 'neutral expression, calm face' },
  { id: 'happy', category: 'expression', name: 'Feliz', tags: ['cara', 'alegría'], promptValue: 'happy expression, smiling' },
  { id: 'angry', category: 'expression', name: 'Enfadado', tags: ['cara', 'ira'], promptValue: 'angry expression, furrowed brows' },
  { id: 'sad', category: 'expression', name: 'Triste', tags: ['cara', 'pena'], promptValue: 'sad expression, melancholic' },
  { id: 'fear', category: 'expression', name: 'Miedo', tags: ['cara', 'asustado'], promptValue: 'fearful expression, wide eyes' },
  { id: 'surprise', category: 'expression', name: 'Sorpresa', tags: ['cara', 'impacto'], promptValue: 'surprised expression, raised eyebrows' },
  { id: 'laugh', category: 'expression', name: 'Reír', tags: ['cara', 'alegría'], promptValue: 'laughing expression, open mouth' },
  { id: 'scream', category: 'expression', name: 'Gritar', tags: ['cara', 'intenso'], promptValue: 'screaming expression, mouth wide open' },
]

export const moodLibrary: LibraryItem[] = [
  { id: 'heroic', category: 'mood', name: 'Heroico', tags: ['ambiente', 'valiente'], promptValue: 'heroic mood, epic, majestic' },
  { id: 'dark', category: 'mood', name: 'Oscuro', tags: ['ambiente', 'gótico'], promptValue: 'dark mood, ominous, foreboding' },
  { id: 'mystical', category: 'mood', name: 'Místico', tags: ['ambiente', 'magia'], promptValue: 'mystical mood, ethereal, otherworldly' },
  { id: 'peaceful', category: 'mood', name: 'Pacífico', tags: ['ambiente', 'calma'], promptValue: 'peaceful mood, serene, tranquil' },
  { id: 'dramatic', category: 'mood', name: 'Dramático', tags: ['ambiente', 'intenso'], promptValue: 'dramatic mood, intense, cinematic' },
  { id: 'whimsical', category: 'mood', name: 'Caprichoso', tags: ['ambiente', 'juguetón'], promptValue: 'whimsical mood, playful, charming' },
  { id: 'epic', category: 'mood', name: 'Épico', tags: ['ambiente', 'grandioso'], promptValue: 'epic mood, grand scale, monumental' },
  { id: 'melancholic', category: 'mood', name: 'Melancólico', tags: ['ambiente', 'triste'], promptValue: 'melancholic mood, nostalgic, bittersweet' },
]

export const allLibraries = [
  ...styleLibrary,
  ...cameraLibrary,
  ...lensLibrary,
  ...distanceLibrary,
  ...lightingLibrary,
  ...compositionLibrary,
  ...poseLibrary,
  ...expressionLibrary,
  ...moodLibrary,
]
