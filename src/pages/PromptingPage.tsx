import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clipboard,
  Compass,
  FileText,
  Flag,
  Layers3,
  MessageSquareText,
  RotateCcw,
  Sparkles,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const chapters = [
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
    hint: '¿Qué resultado necesitas?',
    icon: Target,
    color: 'coral',
    placeholder: 'Convierte estas notas en un resumen...',
  },
  {
    key: 'context',
    number: '02',
    label: 'Contexto',
    hint: '¿Qué información cambiaría la respuesta?',
    icon: Compass,
    color: 'blue',
    placeholder: 'La audiencia es el equipo del proyecto...',
  },
  {
    key: 'output',
    number: '03',
    label: 'Formato',
    hint: '¿Cómo vas a usar el resultado?',
    icon: FileText,
    color: 'yellow',
    placeholder: 'Una página; decisiones y próximos pasos primero...',
  },
  {
    key: 'limits',
    number: '04',
    label: 'Límites',
    hint: '¿Qué debe respetar o evitar?',
    icon: Flag,
    color: 'green',
    placeholder: 'No cambies cifras aprobadas; señala lo que falte...',
  },
]

export function PromptingPage() {
  const [values, setValues] = useState<Record<string, string>>({
    goal: '',
    context: '',
    output: '',
    limits: '',
  })
  const [selectedExample, setSelectedExample] = useState(0)
  const [copied, setCopied] = useState(false)

  const prompt = anatomy
    .map(({ key, label }) => values[key].trim() ? `${label}: ${values[key].trim()}` : '')
    .filter(Boolean)
    .join('\n\n')

  const copyPrompt = async () => {
    if (!prompt) return
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const clearPrompt = () => {
    setValues({ goal: '', context: '', output: '', limits: '' })
    setCopied(false)
  }

  const example = examples[selectedExample]

  return (
    <div className="prompt-guide">
      <header className="guide-cover" id="inicio">
        <div className="guide-cover-copy">
          <div className="guide-kicker"><Sparkles size={14} /> CUADERNO ABIERTO · PROMPTING</div>
          <h1>Una buena idea<br /><span>merece una buena</span><br />instrucción.</h1>
          <p className="guide-cover-lede">
            Aprende a pedir lo que necesitas, con claridad y sin fórmulas rígidas. Un prompt es el comienzo de una conversación, no un comando perfecto.
          </p>
          <a className="guide-cover-link" href="#anatomia">
            Explorar la anatomía <ArrowDown size={16} />
          </a>
          <div className="guide-cover-footnote">CONCEPTOS TRANSFERIBLES · SINTAXIS SEGÚN LA HERRAMIENTA</div>
        </div>
        <div className="guide-cover-art" aria-label="Diagrama visual de las partes de una instrucción" role="img">
          <div className="guide-art-topline"><span>UN PROMPT, EN CAPAS</span><span>FIG. 01</span></div>
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
        <span className="guide-toc-title">EXPLORAR</span>
        {chapters.map(({ id, label, icon: Icon }, index) => (
          <a href={`#${id}`} key={id}><Icon size={15} /><span>{label}</span><small>0{index + 1}</small></a>
        ))}
        <span className="guide-toc-source">BASADO EN LA GUÍA DE OPENAI</span>
      </nav>

      <section className="guide-section anatomy-section" id="anatomia">
        <div className="guide-section-heading">
          <div className="guide-section-index">A / ESTRUCTURA FLEXIBLE</div>
          <div>
            <h2>Cuatro piezas.<br /><em>Solo las que hagan falta.</em></h2>
            <p>Empieza por el resultado. Añade contexto, formato o límites cuando ayuden a que la respuesta sea más útil.</p>
          </div>
        </div>

        <div className="anatomy-workbench">
          <div className="anatomy-inputs">
            {anatomy.map(({ key, number, label, hint, icon: Icon, color, placeholder }) => (
              <label className={`anatomy-field field-${color}`} key={key}>
                <span className="anatomy-field-head">
                  <span className="anatomy-field-number">{number}</span>
                  <Icon size={17} />
                  <strong>{label}</strong>
                </span>
                <span className="anatomy-field-hint">{hint}</span>
                <textarea
                  value={values[key]}
                  onChange={(event) => setValues((current) => ({ ...current, [key]: event.target.value }))}
                  placeholder={placeholder}
                  rows={2}
                />
              </label>
            ))}
            <p className="anatomy-footnote"><span>*</span> No hace falta llenar todos los campos. Una petición breve puede ser suficiente.</p>
          </div>

          <aside className="prompt-output" aria-live="polite">
            <div className="prompt-output-bar"><span><i /> VISTA DE TU PROMPT</span><span>EN VIVO</span></div>
            <div className="prompt-output-body">
              {prompt ? (
                <pre>{prompt}</pre>
              ) : (
                <div className="prompt-output-empty">
                  <div className="empty-brackets">[ &nbsp; ]</div>
                  <p>Tu instrucción toma forma aquí.</p>
                  <span>Escribe en una o más piezas para empezar.</span>
                </div>
              )}
            </div>
            <div className="prompt-output-actions">
              <Button variant="outline" size="sm" onClick={clearPrompt} disabled={!prompt} aria-label="Limpiar prompt">
                <RotateCcw size={15} /> Limpiar
              </Button>
              <Button size="sm" onClick={copyPrompt} disabled={!prompt}>
                {copied ? <Check size={15} /> : <Clipboard size={15} />}
                {copied ? 'Copiado' : 'Copiar prompt'}
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="guide-section compare-section" id="comparar">
        <div className="guide-section-heading compare-heading">
          <div className="guide-section-index">B / MÁS SEÑAL, MENOS ADIVINANZA</div>
          <div>
            <h2>La diferencia está<br /><em>en lo que importa.</em></h2>
            <p>Una petición no necesita ser larga. Necesita incluir los detalles que cambian la respuesta.</p>
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
            <div className="example-bottom"><span className="example-dot" /> El objetivo todavía deja muchas interpretaciones.</div>
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
          <div className="guide-section-index">C / LA CONVERSACIÓN SIGUE</div>
          <h2>El primer intento<br />no es <em>el final.</em></h2>
          <p>Revisa la respuesta y pide el cambio concreto que necesitas. Puedes añadir una fuente, corregir el rumbo o cambiar el nivel de detalle sin empezar de cero.</p>
        </div>
        <div className="iteration-track" aria-label="Ciclo de mejora del prompt">
          <div className="iteration-line" />
          <article className="iteration-step step-ask">
            <span className="iteration-number">01</span>
            <div className="iteration-icon"><MessageSquareText size={19} /></div>
            <h3>Pide</h3>
            <p>Describe el resultado que buscas.</p>
            <div className="iteration-bubble">“Prepara un resumen para el equipo.”</div>
          </article>
          <article className="iteration-step step-review">
            <span className="iteration-number">02</span>
            <div className="iteration-icon"><Compass size={19} /></div>
            <h3>Revisa</h3>
            <p>Detecta qué falta o qué sobra.</p>
            <div className="iteration-bubble">¿Faltan responsables y fechas?</div>
          </article>
          <article className="iteration-step step-steer">
            <span className="iteration-number">03</span>
            <div className="iteration-icon"><RotateCcw size={19} /></div>
            <h3>Ajusta</h3>
            <p>Da una indicación puntual.</p>
            <div className="iteration-bubble">“Añade responsables y fechas límite.”</div>
          </article>
        </div>
      </section>

      <section className="guide-practice" id="practica">
        <div className="practice-stamp"><Sparkles size={20} /><span>EN RESUMEN</span></div>
        <div className="practice-copy">
          <div className="guide-section-index">D / UNA REFERENCIA, NO UNA RECETA</div>
          <h2>Piensa en el resultado.<br /><em>Deja espacio para llegar.</em></h2>
          <p>Indica qué necesitas, comparte lo que puede cambiar la respuesta y explica cómo vas a utilizarla. Pon límites donde un error tendría consecuencias. Luego revisa y afina.</p>
          <a className="source-link" href="https://learn.chatgpt.com/docs/prompting?translationFallback=es-419" target="_blank" rel="noreferrer">
            Consultar la guía de prompting de OpenAI <ArrowRight size={16} />
          </a>
        </div>
        <div className="practice-mark" aria-hidden="true">?</div>
      </section>

      <footer className="guide-footer">
        <span>PROMPT STUDIO <i>×</i> CUADERNO DE PROMPTING</span>
        <a href="#inicio">Volver al inicio <ArrowDown size={14} /></a>
      </footer>
    </div>
  )
}
