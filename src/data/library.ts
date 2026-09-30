import type { LibraryItem } from '@/types/library'

export const conceptArtPromptValue = 'arte conceptual para una lámina de diseño de personaje: vista principal de cuerpo completo con silueta y proporciones claras; rasgos distintivos del rostro, vestuario y equipo; paleta cromática y materiales; incluye variaciones y vistas frontal, lateral y trasera cuando ayuden a comparar; añade anotaciones breves para explicar detalles clave. Acabado profesional.'

export const styleLibrary: LibraryItem[] = [
  { id: 'anime', category: 'style', name: 'Anime', tags: ['anime', 'japonés'], promptValue: 'estilo anime, sombreado por celdas, colores vibrantes' },
  { id: 'semi-realistic', category: 'style', name: 'Semirrealista', tags: ['realista', 'semi'], promptValue: 'estilo semirrealista, acabado detallado' },
  { id: 'comic', category: 'style', name: 'Cómic', tags: ['cómic', 'Marvel', 'DC'], promptValue: 'estilo de cómic, líneas marcadas, trama de semitonos' },
  { id: 'disney', category: 'style', name: 'Disney', tags: ['Disney', 'dibujo animado'], promptValue: 'estilo Disney, dibujo animado en 3D, rasgos expresivos' },
  { id: 'pixar', category: 'style', name: 'Pixar', tags: ['Pixar', '3D'], promptValue: 'estilo Pixar, renderizado en 3D, iluminación suave' },
  { id: 'arcane', category: 'style', name: 'Arcane', tags: ['Arcane', 'videojuego'], promptValue: 'estilo Arcane, texturas pictóricas, realismo estilizado' },
  { id: 'final-fantasy', category: 'style', name: 'Final Fantasy', tags: ['FF', 'Square Enix'], promptValue: 'estilo Final Fantasy, diseño fantástico detallado' },
  { id: 'dark-fantasy', category: 'style', name: 'Fantasía oscura', tags: ['oscuro', 'gótico'], promptValue: 'fantasía oscura, atmósfera ominosa, tonos apagados' },
  { id: 'ghibli', category: 'style', name: 'Studio Ghibli', tags: ['Ghibli', 'Miyazaki'], promptValue: 'estilo Studio Ghibli, acuarela suave, atmósfera fantástica' },
  { id: 'cyberpunk', category: 'style', name: 'Ciberpunk', tags: ['cibernética', 'neón', 'ciencia ficción'], promptValue: 'estética ciberpunk, luces de neón, ambiente futurista' },
  { id: 'steampunk', category: 'style', name: 'Fantasía de vapor', tags: ['vapor', 'victoriano'], promptValue: 'estética de fantasía de vapor, engranajes de latón, estilo victoriano' },
  { id: 'dieselpunk', category: 'style', name: 'Fantasía diésel', tags: ['diésel', 'retro'], promptValue: 'estética retroindustrial, ambiente industrial, aire futurista retro' },
  { id: 'watercolor', category: 'style', name: 'Acuarela', tags: ['pintura', 'tradicional'], promptValue: 'pintura en acuarela, bordes suaves, colores fluidos' },
  { id: 'oil-painting', category: 'style', name: 'Pintura al óleo', tags: ['pintura', 'clásica'], promptValue: 'pintura al óleo, texturas ricas, técnica clásica' },
  { id: 'sketch', category: 'style', name: 'Boceto', tags: ['dibujo', 'lápiz'], promptValue: 'boceto a lápiz, dibujo a mano, trazos preliminares' },
  { id: 'ink', category: 'style', name: 'Tinta', tags: ['tinta', 'blanco y negro'], promptValue: 'ilustración a tinta, alto contraste, entintado detallado' },
  { id: 'pixel-art', category: 'style', name: 'Arte pixelado', tags: ['píxel', 'retro', '8 bits'], promptValue: 'arte pixelado, estilo de 16 bits, estética de videojuegos retro' },
  { id: 'low-poly', category: 'style', name: 'Bajo poligonaje', tags: ['3D', 'geométrico'], promptValue: 'estilo de bajo poligonaje, formas geométricas, 3D minimalista' },
  { id: 'cell-shading', category: 'style', name: 'Sombreado por celdas', tags: ['celdas', 'dibujo animado'], promptValue: 'sombreado por celdas, colores planos, contornos marcados' },
  { id: 'photorealistic', category: 'style', name: 'Fotorrealista', tags: ['fotografía', 'realismo'], promptValue: 'fotorrealista, detalle extremo, resolución 8K' },
  { id: 'fantasy-illustration', category: 'style', name: 'Ilustración fantástica', tags: ['fantasía', 'arte'], promptValue: 'ilustración fantástica, épica, entorno detallado' },
  { id: 'concept-art', category: 'style', name: 'Arte conceptual', tags: ['concepto', 'diseño'], promptValue: conceptArtPromptValue },
]

export const cameraLibrary: LibraryItem[] = [
  { id: 'eye-level', category: 'camera', name: 'A la altura de los ojos', tags: ['cámara', 'ángulo'], promptValue: 'plano a la altura de los ojos' },
  { id: 'low-angle', category: 'camera', name: 'Ángulo bajo', tags: ['cámara', 'ángulo', 'dramático'], promptValue: 'contrapicado, cámara mirando hacia arriba' },
  { id: 'high-angle', category: 'camera', name: 'Ángulo alto', tags: ['cámara', 'ángulo'], promptValue: 'picado, cámara mirando hacia abajo' },
  { id: 'dutch-angle', category: 'camera', name: 'Ángulo holandés', tags: ['cámara', 'inclinado'], promptValue: 'ángulo holandés, cámara inclinada' },
  { id: 'over-shoulder', category: 'camera', name: 'Sobre el hombro', tags: ['cámara', 'punto de vista'], promptValue: 'plano sobre el hombro' },
  { id: 'top-down', category: 'camera', name: 'Vista superior', tags: ['cámara', 'cenital'], promptValue: 'vista cenital, perspectiva de pájaro' },
  { id: 'bottom-up', category: 'camera', name: 'Vista inferior', tags: ['cámara', 'contrapicado'], promptValue: 'vista desde abajo, mirada hacia arriba desde el suelo' },
  { id: 'three-quarter', category: 'camera', name: 'Tres cuartos', tags: ['cámara', 'clásico'], promptValue: 'vista en tres cuartos' },
]

export const lensLibrary: LibraryItem[] = [
  { id: '24mm', category: 'lens', name: 'Gran angular de 24 mm', tags: ['lente', 'angular'], promptValue: 'objetivo gran angular de 24 mm' },
  { id: '35mm', category: 'lens', name: '35 mm', tags: ['lente', 'estándar'], promptValue: 'objetivo de 35 mm' },
  { id: '50mm', category: 'lens', name: '50 mm', tags: ['lente', 'retrato'], promptValue: 'objetivo de 50 mm, perspectiva natural' },
  { id: '85mm', category: 'lens', name: 'Teleobjetivo para retrato de 85 mm', tags: ['lente', 'retrato', 'desenfoque'], promptValue: 'objetivo para retrato de 85 mm, poca profundidad de campo' },
  { id: '135mm', category: 'lens', name: 'Teleobjetivo de 135 mm', tags: ['lente', 'teleobjetivo'], promptValue: 'teleobjetivo de 135 mm, perspectiva comprimida' },
]

export const distanceLibrary: LibraryItem[] = [
  { id: 'close-up', category: 'distance', name: 'Primer plano', tags: ['plano', 'rostro'], promptValue: 'primer plano, detalle del rostro' },
  { id: 'medium-shot', category: 'distance', name: 'Plano medio', tags: ['plano', 'cintura'], promptValue: 'plano medio, encuadre de cintura hacia arriba' },
  { id: 'american-shot', category: 'distance', name: 'Plano americano', tags: ['plano', 'rodilla'], promptValue: 'plano americano, encuadre desde las rodillas hacia arriba' },
  { id: 'full-body', category: 'distance', name: 'Plano entero', tags: ['plano', 'completo'], promptValue: 'cuerpo completo, personaje visible de la cabeza a los pies' },
  { id: 'long-shot', category: 'distance', name: 'Plano general', tags: ['plano', 'lejos'], promptValue: 'plano general, personaje dentro de su entorno' },
  { id: 'wide-shot', category: 'distance', name: 'Plano abierto', tags: ['plano', 'ambiente'], promptValue: 'plano abierto, presentación de la escena' },
]

export const lightingLibrary: LibraryItem[] = [
  { id: 'studio', category: 'lighting', name: 'Iluminación de estudio', tags: ['luz', 'estudio'], promptValue: 'iluminación de estudio, acabado profesional' },
  { id: 'soft', category: 'lighting', name: 'Luz suave', tags: ['luz', 'suave'], promptValue: 'iluminación difusa y suave, sombras delicadas' },
  { id: 'hard', category: 'lighting', name: 'Luz dura', tags: ['luz', 'dramática'], promptValue: 'iluminación dramática y dura, sombras marcadas' },
  { id: 'rembrandt', category: 'lighting', name: 'Luz Rembrandt', tags: ['luz', 'clásica'], promptValue: 'iluminación Rembrandt, triángulo de luz en la mejilla' },
  { id: 'butterfly', category: 'lighting', name: 'Luz mariposa', tags: ['luz', 'retrato'], promptValue: 'iluminación mariposa, luz de belleza' },
  { id: 'split', category: 'lighting', name: 'Luz dividida', tags: ['luz', 'mitad'], promptValue: 'iluminación dividida, mitad del rostro iluminada' },
  { id: 'neon', category: 'lighting', name: 'Luz de neón', tags: ['luz', 'ciberpunk', 'colorida'], promptValue: 'iluminación de neón, resplandor colorido' },
  { id: 'moonlight', category: 'lighting', name: 'Luz de luna', tags: ['luz', 'noche'], promptValue: 'luz de luna, tonos azules fríos, escena nocturna' },
  { id: 'golden-hour', category: 'lighting', name: 'Hora dorada', tags: ['luz', 'cálida', 'atardecer'], promptValue: 'iluminación de hora dorada, tonos cálidos anaranjados' },
  { id: 'volumetric', category: 'lighting', name: 'Iluminación volumétrica', tags: ['luz', 'niebla', 'rayos'], promptValue: 'iluminación volumétrica, rayos de luz, atmósfera envolvente' },
  { id: 'backlight', category: 'lighting', name: 'Contraluz', tags: ['luz', 'contorno'], promptValue: 'contraluz, luz de contorno, silueta perfilada' },
  { id: 'ambient', category: 'lighting', name: 'Luz ambiental', tags: ['luz', 'natural'], promptValue: 'iluminación ambiental, luz natural' },
]

export const compositionLibrary: LibraryItem[] = [
  { id: 'centered', category: 'composition', name: 'Centrada', tags: ['composición', 'simétrica'], promptValue: 'composición centrada y simétrica' },
  { id: 'golden-ratio', category: 'composition', name: 'Proporción áurea', tags: ['composición', 'clásica'], promptValue: 'composición basada en la proporción áurea' },
  { id: 'rule-of-thirds', category: 'composition', name: 'Regla de los tercios', tags: ['composición', 'estándar'], promptValue: 'composición según la regla de los tercios' },
  { id: 'diagonal', category: 'composition', name: 'Diagonal', tags: ['composición', 'dinámica'], promptValue: 'composición diagonal, líneas dinámicas' },
  { id: 'dynamic', category: 'composition', name: 'Dinámica', tags: ['composición', 'acción'], promptValue: 'composición dinámica, sensación de movimiento' },
  { id: 'symmetry', category: 'composition', name: 'Simetría', tags: ['composición', 'equilibrada'], promptValue: 'simetría perfecta, composición equilibrada' },
  { id: 'negative-space', category: 'composition', name: 'Espacio negativo', tags: ['composición', 'minimalista'], promptValue: 'espacio negativo, composición minimalista' },
]

export const poseLibrary: LibraryItem[] = [
  { id: 'idle', category: 'pose', name: 'En reposo', tags: ['pose', 'de pie'], promptValue: 'postura de pie en reposo, relajada' },
  { id: 'walk', category: 'pose', name: 'Caminar', tags: ['pose', 'movimiento'], promptValue: 'postura al caminar, paso en movimiento' },
  { id: 'run', category: 'pose', name: 'Correr', tags: ['pose', 'acción'], promptValue: 'postura al correr, movimiento dinámico' },
  { id: 'attack', category: 'pose', name: 'Atacar', tags: ['pose', 'combate'], promptValue: 'postura de ataque, actitud agresiva' },
  { id: 'magic', category: 'pose', name: 'Lanzar un hechizo', tags: ['pose', 'magia'], promptValue: 'postura al lanzar un hechizo, manos alzadas, energía mágica' },
  { id: 'death', category: 'pose', name: 'Caído', tags: ['pose', 'derrota'], promptValue: 'postura de personaje caído, derrotado' },
  { id: 'jump', category: 'pose', name: 'Saltar', tags: ['pose', 'aire'], promptValue: 'postura de salto, en el aire' },
  { id: 'victory', category: 'pose', name: 'Victoria', tags: ['pose', 'celebración'], promptValue: 'postura triunfal de victoria' },
  { id: 'sit', category: 'pose', name: 'Sentarse', tags: ['pose', 'descanso'], promptValue: 'postura sentada, en descanso' },
  { id: 'fly', category: 'pose', name: 'Volar', tags: ['pose', 'aéreo'], promptValue: 'postura de vuelo, en el aire' },
]

export const expressionLibrary: LibraryItem[] = [
  { id: 'neutral', category: 'expression', name: 'Neutra', tags: ['rostro', 'calma'], promptValue: 'expresión neutra, rostro tranquilo' },
  { id: 'happy', category: 'expression', name: 'Feliz', tags: ['rostro', 'alegría'], promptValue: 'expresión feliz, sonrisa' },
  { id: 'angry', category: 'expression', name: 'Enfadada', tags: ['rostro', 'ira'], promptValue: 'expresión de enfado, cejas fruncidas' },
  { id: 'sad', category: 'expression', name: 'Triste', tags: ['rostro', 'pena'], promptValue: 'expresión triste y melancólica' },
  { id: 'fear', category: 'expression', name: 'Asustada', tags: ['rostro', 'miedo'], promptValue: 'expresión de miedo, ojos muy abiertos' },
  { id: 'surprise', category: 'expression', name: 'Sorpresa', tags: ['rostro', 'impacto'], promptValue: 'expresión de sorpresa, cejas levantadas' },
  { id: 'laugh', category: 'expression', name: 'Risa', tags: ['rostro', 'alegría'], promptValue: 'expresión de risa, boca abierta' },
  { id: 'scream', category: 'expression', name: 'Grito', tags: ['rostro', 'intensidad'], promptValue: 'expresión de grito, boca muy abierta' },
]

export const moodLibrary: LibraryItem[] = [
  { id: 'heroic', category: 'mood', name: 'Heroico', tags: ['ambiente', 'valentía'], promptValue: 'ambiente heroico, épico y majestuoso' },
  { id: 'dark', category: 'mood', name: 'Oscuro', tags: ['ambiente', 'gótico'], promptValue: 'ambiente oscuro, ominoso e inquietante' },
  { id: 'mystical', category: 'mood', name: 'Místico', tags: ['ambiente', 'magia'], promptValue: 'ambiente místico, etéreo y sobrenatural' },
  { id: 'peaceful', category: 'mood', name: 'Pacífico', tags: ['ambiente', 'calma'], promptValue: 'ambiente pacífico, sereno y tranquilo' },
  { id: 'dramatic', category: 'mood', name: 'Dramático', tags: ['ambiente', 'intensidad'], promptValue: 'ambiente dramático, intenso y cinematográfico' },
  { id: 'whimsical', category: 'mood', name: 'Fantasioso', tags: ['ambiente', 'juguetón'], promptValue: 'ambiente fantasioso, juguetón y encantador' },
  { id: 'epic', category: 'mood', name: 'Épico', tags: ['ambiente', 'grandioso'], promptValue: 'ambiente épico, escala grandiosa y monumental' },
  { id: 'melancholic', category: 'mood', name: 'Melancólico', tags: ['ambiente', 'tristeza'], promptValue: 'ambiente melancólico, nostálgico y agridulce' },
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
