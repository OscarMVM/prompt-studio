import type { LibraryItem } from '@/types/library'

export const conceptArtPromptValue = 'Arte conceptual para una lámina de diseño de personaje: vista principal de cuerpo completo con silueta y proporciones claras; rasgos distintivos del rostro, vestuario y equipo; paleta cromática y materiales; incluye variaciones y vistas frontal, lateral y trasera cuando ayuden a comparar; añade anotaciones breves para explicar detalles clave. Acabado profesional.'

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
]

export const cameraLibrary: LibraryItem[] = [
  { id: 'eye-level', category: 'camera', name: 'Ángulo normal (nivel de mirada)', description: 'La cámara queda aproximadamente a la altura de los ojos y apunta horizontalmente. Da una perspectiva cercana a la percepción cotidiana; describe la inclinación, no el tamaño del plano.', tags: ['ángulo', 'inclinación', 'neutro'], promptValue: 'plano a la altura de la mirada, cámara a la altura de los ojos, horizonte nivelado' },
  { id: 'low-angle', category: 'camera', name: 'Contrapicado', description: 'La cámara está por debajo del sujeto y orienta el objetivo hacia arriba. Cuanto más bajo el punto de vista, más dominante puede parecer el sujeto; no exige colocar la cámara a ras de suelo.', tags: ['ángulo', 'inclinación', 'desde abajo'], promptValue: 'contrapicado, cámara por debajo del sujeto, mirando hacia arriba' },
  { id: 'high-angle', category: 'camera', name: 'Picado', description: 'La cámara está por encima del sujeto y orienta el objetivo hacia abajo. Puede reducir visualmente al sujeto; no es necesariamente una vista vertical.', tags: ['ángulo', 'inclinación', 'desde arriba'], promptValue: 'picado, cámara por encima del sujeto, mirando hacia abajo' },
  { id: 'dutch-angle', category: 'camera', name: 'Ángulo holandés (inclinado)', description: 'La cámara rota lateralmente sobre el eje del objetivo, inclinando el horizonte y las verticales. La inclinación es un giro lateral; no significa mirar desde arriba o desde abajo.', tags: ['ángulo', 'giro lateral', 'horizonte inclinado'], promptValue: 'ángulo holandés, giro lateral de cámara, horizonte inclinado' },
  { id: 'over-shoulder', category: 'camera', name: 'Plano sobre el hombro', description: 'La cámara encuadra desde detrás de un personaje e incluye parte de su hombro o cabeza en primer término, mirando hacia otro sujeto. Es un encuadre de conversación, no una inclinación vertical.', tags: ['encuadre', 'conversación', 'hombro'], promptValue: 'plano sobre el hombro, hombro en primer término enmarcando al sujeto' },
  { id: 'top-down', category: 'camera', name: 'Cenital', description: 'La cámara se coloca directamente sobre el sujeto y apunta casi perpendicularmente hacia el suelo (aprox. 90°). Es una vista vertical extrema, más específica que un picado.', tags: ['ángulo', 'vertical', 'desde arriba'], promptValue: 'vista cenital, cámara directamente sobre el sujeto, mirando verticalmente hacia abajo' },
  { id: 'bottom-up', category: 'camera', name: 'Nadir', description: 'La cámara se sitúa directamente debajo del sujeto y apunta casi perpendicularmente hacia arriba. Es el opuesto vertical del cenital, no cualquier contrapicado.', tags: ['ángulo', 'vertical', 'desde abajo'], promptValue: 'vista nadir, cámara directamente debajo del sujeto, mirando verticalmente hacia arriba' },
  { id: 'three-quarter', category: 'camera', name: 'Vista de tres cuartos', description: 'El sujeto se gira aproximadamente 30–45° respecto a la cámara, de modo que se ven el frente y un lateral. Indica la orientación del sujeto, no la altura ni la inclinación de cámara.', tags: ['orientación', 'vista', 'tres cuartos'], promptValue: 'vista de tres cuartos, sujeto girado unos 45 grados hacia la cámara' },
  { id: 'shoulder-height', category: 'camera', name: 'Altura de hombro', description: 'La cámara queda aproximadamente a la altura de los hombros. Describe la altura física de cámara; el objetivo aún puede apuntar horizontalmente, hacia arriba o hacia abajo.', tags: ['altura', 'cámara', 'hombro'], promptValue: 'cámara situada a la altura de los hombros del sujeto' },
  { id: 'hip-height', category: 'camera', name: 'Altura de cadera', description: 'La cámara se sitúa aproximadamente a la altura de la cadera o cintura. Es una posición baja respecto a la mirada, pero no implica por sí sola un contrapicado.', tags: ['altura', 'cámara', 'cadera'], promptValue: 'cámara situada a la altura de la cadera del sujeto' },
  { id: 'knee-height', category: 'camera', name: 'Altura de rodilla', description: 'La cámara queda aproximadamente a la altura de las rodillas. La altura baja puede combinarse con un eje horizontal o con un contrapicado.', tags: ['altura', 'cámara', 'rodilla'], promptValue: 'cámara situada a la altura de las rodillas del sujeto' },
  { id: 'ground-level', category: 'camera', name: 'A ras de suelo', description: 'La cámara se coloca en el suelo o muy cerca de él. Esto define la altura, no hacia dónde apunta el objetivo; no equivale necesariamente a nadir.', tags: ['altura', 'cámara', 'suelo'], promptValue: 'plano a ras de suelo, cámara en el suelo o justo por encima' },
]

export const lensLibrary: LibraryItem[] = [
  { id: '24mm', category: 'lens', name: 'Gran angular de 24 mm', tags: ['lente', 'angular'], promptValue: 'objetivo gran angular de 24 mm' },
  { id: '35mm', category: 'lens', name: '35 mm', tags: ['lente', 'estándar'], promptValue: 'objetivo de 35 mm' },
  { id: '50mm', category: 'lens', name: '50 mm', tags: ['lente', 'retrato'], promptValue: 'objetivo de 50 mm, perspectiva natural' },
  { id: '85mm', category: 'lens', name: 'Teleobjetivo para retrato de 85 mm', tags: ['lente', 'retrato', 'desenfoque'], promptValue: 'objetivo para retrato de 85 mm, poca profundidad de campo' },
  { id: '135mm', category: 'lens', name: 'Teleobjetivo de 135 mm', tags: ['lente', 'teleobjetivo'], promptValue: 'teleobjetivo de 135 mm, perspectiva comprimida' },
]

export const distanceLibrary: LibraryItem[] = [
  { id: 'extreme-close-up', category: 'distance', name: 'Primerísimo primer plano', description: 'Encuadra una parte muy concreta del rostro (por ejemplo, ojos y boca) o un detalle pequeño. El fragmento ocupa casi todo el encuadre y el contexto queda fuera.', tags: ['plano', 'detalle', 'rostro'], promptValue: 'primerísimo primer plano, detalle del rostro encuadrado muy de cerca' },
  { id: 'close-up', category: 'distance', name: 'Primer plano', description: 'Encuadra el rostro, normalmente desde la cabeza hasta los hombros. Prioriza la expresión facial y deja poco entorno visible.', tags: ['plano', 'rostro', 'expresión'], promptValue: 'primer plano, cabeza y hombros ocupando el encuadre' },
  { id: 'medium-close-up', category: 'distance', name: 'Plano medio corto', description: 'Encuadra desde la cabeza hasta el pecho, aproximadamente. Mantiene legible la expresión y añade algo de lenguaje corporal.', tags: ['plano', 'pecho', 'retrato'], promptValue: 'plano medio corto, encuadre desde la cabeza hasta el pecho' },
  { id: 'medium-shot', category: 'distance', name: 'Plano medio', description: 'Encuadra al sujeto desde la cabeza hasta la cintura. Equilibra expresión, gestos de manos y contexto inmediato.', tags: ['plano', 'cintura', 'gestos'], promptValue: 'plano medio, encuadre desde la cabeza hasta la cintura' },
  { id: 'medium-long-shot', category: 'distance', name: 'Plano medio largo', description: 'Encuadra aproximadamente desde la cabeza hasta las caderas o mitad del muslo. Muestra más postura y acción que el plano medio.', tags: ['plano', 'caderas', 'postura'], promptValue: 'plano medio largo, encuadre desde la cabeza hasta las caderas' },
  { id: 'american-shot', category: 'distance', name: 'Plano americano', description: 'Encuadra desde la cabeza hasta medio muslo, dejando las rodillas fuera. Se popularizó en el western para mostrar el arma y las manos sin perder la expresión.', tags: ['plano', 'medio muslo', 'western'], promptValue: 'plano americano, encuadre desde la cabeza hasta medio muslo, rodillas fuera del encuadre' },
  { id: 'full-body', category: 'distance', name: 'Plano entero', description: 'Muestra la figura completa de pies a cabeza, con el personaje ocupando la mayor parte del encuadre y poco espacio alrededor.', tags: ['plano', 'cuerpo entero', 'figura'], promptValue: 'plano entero, figura completa visible de pies a cabeza, poco espacio alrededor' },
  { id: 'long-shot', category: 'distance', name: 'Plano general', description: 'Muestra al personaje de cuerpo entero junto con una parte significativa del entorno. El espacio aporta contexto, pero el sujeto sigue siendo claramente identificable.', tags: ['plano', 'entorno', 'contexto'], promptValue: 'plano general, figura completa en un entorno claramente reconocible' },
  { id: 'wide-shot', category: 'distance', name: 'Gran plano general', description: 'El entorno domina la imagen y el personaje aparece pequeño o puede ser apenas una parte del paisaje. Sirve para establecer lugar, escala o aislamiento.', tags: ['plano', 'paisaje', 'escala'], promptValue: 'gran plano general, el entorno domina la imagen y el sujeto ocupa una parte pequeña del encuadre' },
  { id: 'detail-shot', category: 'distance', name: 'Plano detalle', description: 'Aísla un objeto o una parte específica del cuerpo para dirigir la atención a su forma, textura o importancia narrativa. No tiene por qué ser un rostro.', tags: ['plano', 'detalle', 'objeto'], promptValue: 'plano detalle, encuadre muy cerrado de un objeto o una parte específica del cuerpo' },
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
