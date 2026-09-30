import { useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  AudioLines,
  Compass,
  Image,
  FileText,
  Flag,
  Layers3,
  MessageSquareText,
  RotateCcw,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const chapters = [
  { id: 'fundamentos', label: 'Fundamentos', icon: MessageSquareText },
  { id: 'anatomia', label: 'Anatomía', icon: Layers3 },
  { id: 'comparar', label: 'Comparar', icon: Target },
  { id: 'iterar', label: 'Iterar', icon: RotateCcw },
  { id: 'practica', label: 'En práctica', icon: MessageSquareText },
]

const examples = [
  {
    label: 'Programación',
    vague: 'Arregla esta función.',
    useful: 'Encuentra por qué esta función de TypeScript devuelve una lista vacía cuando hay coincidencias. Corrige el error sin cambiar su API y añade una prueba para ese caso.',
    note: 'Comportamiento observado + restricción + verificación.',
  },
  {
    label: 'Diseño',
    vague: 'Diseña una página para mi app.',
    useful: 'Diseña la pantalla principal de una app de finanzas personales para móvil. Prioriza el saldo y los gastos recientes, usa una jerarquía clara y asegúrate de que los controles sean legibles y accesibles.',
    note: 'Producto + dispositivo + prioridad + accesibilidad.',
  },
  {
    label: 'Arte',
    vague: 'Dibuja un personaje fantástico.',
    useful: 'Crea el concepto de una exploradora de ruinas antiguas. Muestra la figura completa en una pose curiosa, con ropa práctica y materiales envejecidos; usa una paleta verde y cobre sobre un fondo sencillo.',
    note: 'Sujeto + encuadre + rasgos visuales + paleta.',
  },
]

const anatomy = [
  {
    key: 'goal',
    number: '01',
    label: 'Objetivo',
    hint: '¿Qué tarea y resultado esperas?',
    icon: Target,
    color: 'coral',
    example: 'Resume las notas del lanzamiento en tres ideas clave.',
    explanation: 'Empieza con una acción y define el resultado. Una instrucción concreta reduce la ambigüedad sin necesidad de hacerla larga.',
  },
  {
    key: 'context',
    number: '02',
    label: 'Contexto',
    hint: '¿Quién lo usará y qué necesita saber?',
    icon: Compass,
    color: 'blue',
    example: 'Lo leerá el equipo directivo antes de la revisión semanal.',
    explanation: 'Incluye antecedentes y audiencia que cambien la respuesta. Omite los datos que no influyen en esta tarea.',
  },
  {
    key: 'output',
    number: '03',
    label: 'Formato',
    hint: '¿En qué forma te sirve la respuesta?',
    icon: FileText,
    color: 'yellow',
    example: 'Devuelve tres apartados: Decisiones, Riesgos y Próximos pasos.',
    explanation: 'El formato esperado hace que la respuesta sea más fácil de revisar, compartir o llevar a otra herramienta.',
  },
  {
    key: 'limits',
    number: '04',
    label: 'Límites',
    hint: '¿Qué debe respetar o cómo debe actuar?',
    icon: Flag,
    color: 'green',
    example: 'No deduzcas acuerdos, fechas ni responsables; señala lo que no aparezca en las notas.',
    explanation: 'Formula límites que se puedan comprobar. Si indicas qué evitar, aclara también qué hacer en su lugar.',
  },
]

export function PromptingPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [selectedExample, setSelectedExample] = useState(0)
  const currentStep = anatomy[activeStep]
  const completedSteps = anatomy.slice(0, activeStep + 1)
  const example = examples[selectedExample]

  return (
    <div className="prompt-guide">
      <header className="guide-cover" id="inicio">
        <div className="guide-cover-copy">
          <h1>Guía de prompts</h1>
          <p className="guide-cover-support">Pide con claridad.<br />Ajusta sobre la marcha.</p>
          <p className="guide-cover-lede">
            Empieza con una tarea sencilla. Añade contexto, formato o límites cuando ayuden a obtener una respuesta útil; luego revisa y afina.
          </p>
          <a className="guide-cover-link" href="#anatomia">
            Explorar la anatomía <ArrowDown size={16} />
          </a>
        </div>
        <div className="guide-cover-art" aria-label="Diagrama visual de las partes de una instrucción" role="img">
          <div className="guide-art-orbit orbit-one" />
          <div className="guide-art-orbit orbit-two" />
          <div className="guide-art-center"><MessageSquareText size={25} /><span>RESULTADO<br />QUE BUSCAS</span></div>
          <div className="guide-art-label art-goal"><i>01</i> Objetivo</div>
          <div className="guide-art-label art-context"><i>02</i> Contexto</div>
          <div className="guide-art-label art-output"><i>03</i> Formato</div>
          <div className="guide-art-label art-limits"><i>04</i> Límites</div>
          <div className="guide-art-caption">No todas las capas hacen falta siempre.<br />Incluye las que cambian el resultado.</div>
        </div>
      </header>

      <nav className="guide-toc" aria-label="Secciones de la guía">
        {chapters.map(({ id, label, icon: Icon }) => (
          <a href={`#${id}`} key={id}><Icon size={15} /><span>{label}</span></a>
        ))}
      </nav>

      <section className="guide-foundations" id="fundamentos">
        <div className="guide-foundations-heading">
            <h2>¿Qué hace claro un <em>prompt?</em></h2>
            <p>Plantea una tarea y, si hace falta, suma contexto, material de entrada y una forma esperada para la respuesta. No todos los encargos necesitan cada elemento.</p>
        </div>
        <div className="foundation-visuals">
          <article className="foundation-card foundation-text">
            <MessageSquareText size={22} />
            <h3>Una instrucción directa</h3>
            <p>Un verbo concreto marca la tarea: resumir, comparar, traducir, ordenar o explicar.</p>
          </article>
          <article className="foundation-card foundation-image">
            <Image size={22} />
            <h3>Contexto visual</h3>
            <p>Adjunta una imagen si es parte de la tarea y señala qué necesitas observar, comparar o transformar.</p>
          </article>
          <article className="foundation-card foundation-audio">
            <AudioLines size={22} />
            <h3>Audio como material</h3>
            <p>Incluye una grabación cuando quieras transcribirla, resumirla o trabajar con lo que se dijo.</p>
          </article>
        </div>
        <div className="prompt-engineering-note">
          <p>Diseñar un prompt es un proceso iterativo: empieza simple, observa la respuesta y añade solo lo que falta.</p>
        </div>
      </section>

      <section className="guide-section anatomy-section" id="anatomia">
        <div className="guide-section-heading">
          <div>
            <h2>Cuatro piezas.<br /><em>Úsalas si aportan.</em></h2>
            <p>Define la tarea. Añade contexto para orientar, un formato para usar la respuesta y límites cuando haya algo que respetar.</p>
          </div>
        </div>

        <div className="anatomy-workbench">
          <div className="anatomy-steps">
            <div className="anatomy-step-live" aria-live="polite" aria-atomic="true">
              <article className={`anatomy-step field-${currentStep.color}`} key={currentStep.key}>
                <div className="anatomy-step-progress">PIEZA {currentStep.number} DE 04</div>
                <div className="anatomy-step-head">
                  <span className="anatomy-field-number">{currentStep.number}</span>
                  <currentStep.icon size={17} />
                  <strong>{currentStep.label}</strong>
                </div>
                <p className="anatomy-field-hint">{currentStep.hint}</p>
                <p className="anatomy-step-example">“{currentStep.example}”</p>
                <p className="anatomy-step-explanation">{currentStep.explanation}</p>
              </article>
            </div>
            <div className="anatomy-navigation" aria-label="Navegación entre piezas">
              <Button variant="outline" size="sm" onClick={() => setActiveStep((step) => Math.max(0, step - 1))} disabled={activeStep === 0}>
                <ArrowLeft size={15} /> Anterior
              </Button>
              {activeStep < anatomy.length - 1 ? (
                <Button size="sm" onClick={() => setActiveStep((step) => Math.min(anatomy.length - 1, step + 1))}>
                  Siguiente: {anatomy[activeStep + 1].label} <ArrowRight size={15} />
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={() => setActiveStep(0)}>
                  <RotateCcw size={15} /> Reiniciar
                </Button>
              )}
            </div>
            <p className="anatomy-footnote"><span>*</span> Puedes empezar solo con una instrucción y completar lo que falte.</p>
          </div>

          <aside className="prompt-output" aria-label="Ejemplo de prompt en construcción">
            <div className="prompt-output-bar"><span><i /> EJEMPLO EN CONSTRUCCIÓN</span><span>{String(completedSteps.length).padStart(2, '0')} / 04</span></div>
            <div className="prompt-output-body">
              <div className="prompt-output-pieces" aria-live="polite" aria-relevant="additions removals">
                {completedSteps.map(({ key, label, color, example }) => (
                  <p className={`prompt-output-piece field-${color}`} key={key}>
                    <strong>{label}</strong>{example}
                  </p>
                ))}
              </div>
            </div>
            <p className="prompt-output-note">Cada pieza es opcional: añade una solo si cambia qué sería una buena respuesta.</p>
          </aside>
        </div>
      </section>

      <section className="guide-section compare-section" id="comparar">
        <div className="guide-section-heading compare-heading">
          <div>
            <h2>De una petición abierta<br /><em>a un encargo claro.</em></h2>
            <p>La especificidad no es añadir más palabras: es incluir la tarea y los detalles que definen una respuesta útil.</p>
          </div>
        </div>
        <div className="example-switcher" role="group" aria-label="Elige un ejemplo por tipo de tarea">
          {examples.map((item, index) => (
            <button
              aria-pressed={selectedExample === index}
              className={selectedExample === index ? 'example-tab active' : 'example-tab'}
              key={item.label}
              onClick={() => setSelectedExample(index)}
            >
              <span>0{index + 1}</span>{item.label}
            </button>
          ))}
        </div>
        <div className="example-compare">
          <article className="example-side example-vague">
            <div className="example-label"><span>ANTES</span><span>ABIERTO</span></div>
            <p>“{example.vague}”</p>
            <div className="example-bottom"><span className="example-dot" /> Faltan la tarea concreta y el resultado esperado.</div>
          </article>
          <div className="example-arrow"><ArrowRight size={20} /></div>
          <article className="example-side example-clear">
            <div className="example-label"><span>DESPUÉS</span><span>CON ENFOQUE</span></div>
            <p>“{example.useful}”</p>
            <div className="example-bottom"><span className="example-dot" /> {example.note}</div>
          </article>
        </div>
      </section>

      <section className="guide-section iterate-section" id="iterar">
        <div className="iterate-title">
          <h2>Prueba. Observa.<br /><em>Ajusta.</em></h2>
          <p>La primera respuesta muestra qué falta. Cambia una instrucción o un dato concreto y compara el resultado antes de añadir más detalles.</p>
        </div>
        <div className="iteration-track" aria-label="Ciclo de mejora del prompt">
          <article className="iteration-step step-ask">
            <span className="iteration-number">01</span>
            <div className="iteration-icon"><MessageSquareText size={19} /></div>
            <h3>Define</h3>
            <p>Indica una tarea y el resultado que buscas.</p>
            <div className="iteration-bubble">“Prepara un resumen para el equipo.”</div>
          </article>
          <article className="iteration-step step-review">
            <span className="iteration-number">02</span>
            <div className="iteration-icon"><Compass size={19} /></div>
            <h3>Verifica</h3>
            <p>Busca la diferencia con lo que esperabas.</p>
            <div className="iteration-bubble">¿Faltan responsables y fechas?</div>
          </article>
          <article className="iteration-step step-steer">
            <span className="iteration-number">03</span>
            <div className="iteration-icon"><RotateCcw size={19} /></div>
            <h3>Ajusta</h3>
            <p>Añade el dato o criterio que faltó.</p>
            <div className="iteration-bubble">“Incluye responsables y fechas si aparecen en las notas.”</div>
          </article>
        </div>
      </section>

      <section className="guide-best-practices" aria-labelledby="best-practices-title">
        <h2 id="best-practices-title">Sé directo.<br /><em>Define qué es útil<br className="tone-title-break" /> para ti.</em></h2>
        <div className="best-practice-grid">
          <article className="best-practice-card clarity-card">
            <span className="best-practice-number">01</span>
            <h3>Especifica la tarea</h3>
            <p>Usa una acción concreta y criterios observables. Añade el contexto necesario para distinguir una respuesta útil de una genérica.</p>
            <div className="clarity-visual"><span>“Hazlo mejor”</span><ArrowRight size={17} /><strong>“Reduce el texto a 3 frases y conserva los datos.”</strong></div>
          </article>
          <article className="best-practice-card tone-card">
            <span className="best-practice-number">02</span>
            <h3>Orienta el tono</h3>
            <p>Indica la voz según quién leerá el resultado y dónde se usará. Elige una descripción que ayude a reconocer el estilo.</p>
            <div className="tone-swatches" aria-label="Ejemplos de tonos">
              <span>Profesional</span><span>Amigable</span><span>Humorístico</span><span>Serio</span>
            </div>
            <blockquote>“Explícalo con un tono cordial y directo para alguien que recién empieza.”</blockquote>
          </article>
        </div>
      </section>

      <section className="guide-practice" id="practica">
        <div className="practice-copy">
          <h2>Empieza simple.<br /><em>Mejora con cada respuesta.</em></h2>
          <p>Formula la tarea y comparte los datos relevantes. Si el resultado no funciona, precisa qué cambiar: el contexto, el formato o un límite. Prueba un ajuste cada vez.</p>
          <a className="source-link" href="https://learn.chatgpt.com/docs/prompting?translationFallback=es-419" target="_blank" rel="noreferrer">
            Leer la guía de prompting de OpenAI <ArrowRight size={16} />
          </a>
        </div>
        <div className="practice-mark" aria-hidden="true">?</div>
      </section>

      <section className="guide-resources" aria-labelledby="resources-title">
        <div>
          <h2 id="resources-title">Sigue aprendiendo.<br /><em>Prueba lo que te sirva.</em></h2>
          <p>Estas guías amplían los conceptos y ofrecen recomendaciones prácticas. Algunas están dirigidas a desarrolladores y usan la API; sus ideas de claridad y estructura también son útiles en ChatGPT.</p>
        </div>
        <ul className="resource-list">
          <li><a href="https://platform.openai.com/docs/guides/text?api-mode=chat#prompt-engineering" target="_blank" rel="noreferrer"><span>01</span><strong>Guía básica de ingeniería de prompts</strong><ArrowRight size={16} /></a></li>
          <li><a href="https://platform.openai.com/docs/guides/reasoning-best-practices" target="_blank" rel="noreferrer"><span>02</span><strong>Buenas prácticas para modelos de razonamiento</strong><ArrowRight size={16} /></a></li>
          <li><a href="https://help.openai.com/es-419/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model" target="_blank" rel="noreferrer"><span>03</span><strong>Cómo crear un buen prompt para un modelo de IA</strong><ArrowRight size={16} /></a></li>
          <li><a href="https://help.openai.com/es-419/articles/8096356-custom-instructions-for-chatgpt" target="_blank" rel="noreferrer"><span>04</span><strong>Instrucciones personalizadas de ChatGPT</strong><ArrowRight size={16} /></a></li>
          <li><a href="https://help.openai.com/es-419/articles/9260256-chatgpt-capabilities-overview" target="_blank" rel="noreferrer"><span>05</span><strong>Capacidades de ChatGPT</strong><ArrowRight size={16} /></a></li>
        </ul>
      </section>

      <footer className="guide-footer">
        <a href="#inicio">Volver al inicio <ArrowDown size={14} /></a>
      </footer>
    </div>
  )
}
