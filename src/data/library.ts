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
  { id: 'eye-level', category: 'camera', name: 'Nivel de los Ojos', tags: ['cámara', 'ángulo'], promptValue: 'eye level shot' },
  { id: 'low-angle', category: 'camera', name: 'Ángulo Bajo', tags: ['cámara', 'ángulo', 'dramático'], promptValue: 'low angle shot, looking up' },
  { id: 'high-angle', category: 'camera', name: 'Ángulo Alto', tags: ['cámara', 'ángulo'], promptValue: 'high angle shot, looking down' },
  { id: 'dutch-angle', category: 'camera', name: 'Ángulo Holandés', tags: ['cámara', 'inclinado'], promptValue: 'dutch angle, tilted camera' },
  { id: 'over-shoulder', category: 'camera', name: 'Sobre el Hombro', tags: ['cámara', 'ots'], promptValue: 'over the shoulder shot' },
  { id: 'top-down', category: 'camera', name: 'Vista Superior', tags: ['cámara', 'pájaro'], promptValue: 'top down view, bird eye view' },
  { id: 'bottom-up', category: 'camera', name: 'Vista Inferior', tags: ['cámara', 'gusano'], promptValue: 'worm eye view, looking up from ground' },
  { id: 'three-quarter', category: 'camera', name: 'Tres Cuartos', tags: ['cámara', 'clásico'], promptValue: 'three quarter view' },
]

export const lensLibrary: LibraryItem[] = [
  { id: '24mm', category: 'lens', name: '24mm Gran Angular', tags: ['lente', 'angular'], promptValue: '24mm wide angle lens' },
  { id: '35mm', category: 'lens', name: '35mm', tags: ['lente', 'estándar'], promptValue: '35mm lens' },
  { id: '50mm', category: 'lens', name: '50mm', tags: ['lente', 'retrato'], promptValue: '50mm lens, natural perspective' },
  { id: '85mm', category: 'lens', name: '85mm Retrato', tags: ['lente', 'retrato', 'bokeh'], promptValue: '85mm portrait lens, shallow depth of field' },
  { id: '135mm', category: 'lens', name: '135mm Telephoto', tags: ['lente', 'tele'], promptValue: '135mm telephoto lens, compressed perspective' },
]

export const distanceLibrary: LibraryItem[] = [
  { id: 'close-up', category: 'distance', name: 'Primer Plano', tags: ['plano', 'cara'], promptValue: 'close-up shot, face detail' },
  { id: 'medium-shot', category: 'distance', name: 'Plano Medio', tags: ['plano', 'cintura'], promptValue: 'medium shot, waist up' },
  { id: 'american-shot', category: 'distance', name: 'Plano Americano', tags: ['plano', 'rodilla'], promptValue: 'american shot, knee up' },
  { id: 'full-body', category: 'distance', name: 'Plano Entero', tags: ['plano', 'completo'], promptValue: 'full body shot, character visible head to toe' },
  { id: 'long-shot', category: 'distance', name: 'Plano General', tags: ['plano', 'lejos'], promptValue: 'long shot, character in environment' },
  { id: 'wide-shot', category: 'distance', name: 'Plano Abierto', tags: ['plano', 'ambiente'], promptValue: 'wide shot, establishing scene' },
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
