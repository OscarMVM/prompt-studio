import { env } from 'node:process'
import { expect, test, type Page } from '@playwright/test'

async function fillField(page: Page, label: string, value: string) {
  const field = page
    .locator('label')
    .filter({ hasText: new RegExp(`^${label}$`) })
    .locator('xpath=../..')
    .locator('input, textarea')

  await expect(field).toHaveCount(1)
  await field.fill(value)
}

async function selectStage(page: Page, label: string) {
  const stageButton = page.getByRole('button', { name: label, exact: true })
  if (await stageButton.count() && await stageButton.first().isVisible()) {
    await stageButton.first().click()
    return
  }

  const stageSelect = page.getByRole('combobox').first()
  if (await stageSelect.count()) {
    await stageSelect.click()
    await page.getByRole('option', { name: label, exact: true }).click()
    return
  }
}

async function showEditorOnMobile(page: Page) {
  const editorTab = page.getByRole('tab', { name: 'Editor', exact: true })
  if (await editorTab.count()) await editorTab.click()
}

async function getPromptPreview(page: Page) {
  const promptTab = page.getByRole('tab', { name: 'Prompt', exact: true })
  if (await promptTab.count()) await promptTab.click()

  return page
    .locator('[data-slot="card"]')
    .filter({ hasText: 'Vista Previa' })
    .locator('p.whitespace-pre-wrap')
}

async function fillNegativePrompt(page: Page, value: string) {
  const field = page.getByPlaceholder('Elementos a evitar...')
  await expect(field).toHaveCount(1)
  await field.fill(value)
}

test('crea un monstruo metálico desde el asistente', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Comienza a diseñar un nuevo personaje desde cero', { exact: true }).click()
  await expect(page.getByText('Paso 1 de 6')).toBeVisible()

  await fillField(page, 'Nombre', 'Ferrum')
  await fillField(page, 'Alias', 'El Centinela de Hierro')
  await fillField(page, 'Edad', 'Siglos')
  await fillField(page, 'Especie', 'Gólem metálico')
  await fillField(page, 'Profesión', 'Guardián de las ruinas')
  await fillField(page, 'Altura', '2,4 m')
  await fillField(page, 'Peso', '1.200 kg')
  await fillField(page, 'Alineación', 'Neutral protector')
  await fillField(page, 'Personalidad', 'Silencioso, leal y paciente; protege a quienes considera aliados.')
  await fillField(page, 'Historia', 'Fue forjado hace siglos para custodiar un templo enterrado.')
  await fillField(page, 'Motivaciones', 'Proteger el templo y mantener a salvo su núcleo de energía.')
  await fillField(page, 'Miedos', 'Que su núcleo se apague y olvidar a quienes juró proteger.')
  await page.getByRole('button', { name: 'Siguiente', exact: true }).click()

  await expect(page.getByText('Paso 2 de 6')).toBeVisible()
  await fillField(page, 'Color de Piel', 'Placas de acero oscuro')
  await fillField(page, 'Forma del Rostro', 'Máscara angular de hierro remachado')
  await fillField(page, 'Estilo de Cabello', 'Filamentos finos de cobre')
  await fillField(page, 'Color de Cabello', 'Cobre oxidado')
  await fillField(page, 'Forma de Ojos', 'Ópticas circulares')
  await fillField(page, 'Color de Ojos', 'Ámbar luminoso')
  await fillField(page, 'Pestañas', 'No tiene')
  await fillField(page, 'Cejas', 'Ranuras de acero')
  await fillField(page, 'Nariz', 'Rejilla respiratoria')
  await fillField(page, 'Labios', 'Placas articuladas')
  await fillField(page, 'Mandíbula', 'Mandíbula pesada con engranajes')
  await fillField(page, 'Mentón', 'Remache central')
  await fillField(page, 'Orejas', 'Sensores laterales')
  await fillField(page, 'Barba', 'No tiene')
  await fillField(page, 'Bigote', 'No tiene')
  await fillField(page, 'Pecas', 'Motas de óxido')
  await fillField(page, 'Cicatrices', 'Grietas reparadas con cobre')
  await fillField(page, 'Tatuajes', 'Runas grabadas alrededor del núcleo')
  await fillField(page, 'Prótesis', 'Brazo izquierdo reforzado con placas adicionales')
  await page.getByRole('button', { name: 'Siguiente', exact: true }).click()

  await expect(page.getByText('Paso 3 de 6')).toBeVisible()
  const serious = page.getByRole('button', { name: 'Serio', exact: true })
  const mysterious = page.getByRole('button', { name: 'Misterioso', exact: true })
  const technological = page.getByRole('button', { name: 'Tecnológico', exact: true })
  const military = page.getByRole('button', { name: 'Militar', exact: true })
  await serious.click()
  await mysterious.click()
  await technological.click()
  await military.click()
  await expect(serious).toHaveAttribute('aria-pressed', 'true')
  await expect(technological).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: 'Siguiente', exact: true }).click()

  await expect(page.getByText('Paso 4 de 6')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Ropa', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Equipo', exact: true })).toBeVisible()
  await expect(page.getByText('Materiales', { exact: true })).toHaveCount(0)
  await fillField(page, 'Cabeza', 'Yelmo de acero con visera estrecha')
  await fillField(page, 'Torso', 'Coraza de placas ennegrecidas')
  await fillField(page, 'Piernas', 'Grebas articuladas de hierro')
  await fillField(page, 'Calzado', 'Botas pesadas con suela de hierro')
  await fillField(page, 'Guantes', 'Guanteletes de cinco dedos mecánicos')
  await fillField(page, 'Capa', 'Capa corta de lona gris')
  await fillField(page, 'Cinturón', 'Cinturón con hebilla de cobre')
  await fillField(page, 'Armadura', 'Armadura integral de acero ennegrecido')
  await fillField(page, 'Joyería', 'Amuleto con un fragmento de ámbar')
  await fillField(page, 'Accesorios', 'Linterna fijada al hombro')
  await fillField(page, 'Armas', 'Martillo de guerra con cabeza de hierro')
  await fillField(page, 'Escudos', 'Escudo redondo de acero')
  await fillField(page, 'Herramientas', 'Juego de reparación mecánica')
  await fillField(page, 'Mochila', 'Mochila de lona reforzada')
  await fillField(page, 'Instrumentos', 'Diapasón de calibración')
  await fillField(page, 'Objetos Mágicos', 'Núcleo de energía arcana')
  await fillField(page, 'Tecnología', 'Engranajes internos y ópticas de precisión')
  await fillField(page, 'Mascotas', 'Cuervo mecánico explorador')
  await page.getByRole('button', { name: 'Siguiente', exact: true }).click()

  await expect(page.getByText('Paso 5 de 6')).toBeVisible()
  await fillField(page, 'Color Primario', 'Acero grafito')
  await fillField(page, 'Color Secundario', 'Cobre oxidado')
  await fillField(page, 'Color de Acento', 'Ámbar brillante')
  await fillField(page, 'Temperatura', 'Fría')
  await fillField(page, 'Contraste', 'Alto')
  await fillField(page, 'Saturación', 'Baja')
  await page.getByRole('button', { name: 'Siguiente', exact: true }).click()

  await expect(page.getByText('Paso 6 de 6')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Ropa y Equipo', exact: true })).toBeVisible()
  await expect(page.getByText('Armadura integral de acero ennegrecido')).toBeVisible()
  await expect(page.getByText('Martillo de guerra con cabeza de hierro')).toBeVisible()
  await page.getByRole('button', { name: 'Crear Personaje', exact: true }).click()

  await expect(page).toHaveURL(/\/characters\/[^/]+\/workflow$/)
  await expect(page.getByRole('link', { name: 'Ferrum', exact: true })).toBeVisible()
  const generatedPrompt = await getPromptPreview(page)
  await expect(generatedPrompt).toContainText('Cabello: Filamentos finos de cobre, Cobre oxidado')
  await expect(generatedPrompt).toContainText('Ojos: Ópticas circulares, Ámbar luminoso')
  await expect(generatedPrompt).not.toContainText(
    /\b(?:hair|eyes|scarred|tattoos|reference image provided|technology|military|serious|mystical)\b/i
  )
  await expect(generatedPrompt).toContainText('Genera una imagen conceptual')
  await expect(generatedPrompt).toContainText('vista principal de cuerpo completo con silueta y proporciones claras')
  await expect(generatedPrompt).toContainText(/^Información del personaje: /m)
  await expect(generatedPrompt).not.toContainText(/(?:^|\n)(?:Objetivo|Contexto|Formato|Límites):/)

  const characterFields = [
    'Edad: Siglos',
    'Pestañas: No tiene',
    'Cejas: Ranuras de acero',
    'Pecas: Motas de óxido',
    'Cabeza: Yelmo de acero con visera estrecha',
    'Piernas de ropa: Grebas articuladas de hierro',
    'Calzado: Botas pesadas con suela de hierro',
    'Guantes: Guanteletes de cinco dedos mecánicos',
    'Capa: Capa corta de lona gris',
    'Cinturón: Cinturón con hebilla de cobre',
    'Joyería: Amuleto con un fragmento de ámbar',
    'Accesorios: Linterna fijada al hombro',
    'Escudos: Escudo redondo de acero',
    'Herramientas: Juego de reparación mecánica',
    'Mochila: Mochila de lona reforzada',
    'Instrumentos: Diapasón de calibración',
    'Objetos mágicos: Núcleo de energía arcana',
    'Tecnología: Engranajes internos y ópticas de precisión',
    'Mascotas: Cuervo mecánico explorador',
    'Temperatura: Fría',
    'Contraste: Alto',
    'Saturación: Baja',
  ]
  for (const field of characterFields) {
    await expect(generatedPrompt).toContainText(field)
  }

  for (const field of [
    'Alias',
    'Rol',
    'Personalidad',
    'Historia',
    'Motivaciones',
    'Miedos',
    'Virtudes',
    'Defectos',
    'Alineación',
  ]) {
    await expect(generatedPrompt).not.toContainText(new RegExp(`(?:^|;\\s*)${field}:`))
  }

  await page.getByText('Prompt Negativo', { exact: true }).hover()
  await expect(page.getByText(/Se añade al final del prompt/)).toBeVisible()
  await fillNegativePrompt(page, 'el color rojo')
  await expect(generatedPrompt).toContainText('Debes evitar: el color rojo.')
  await fillNegativePrompt(page, 'el color rojo\ntexto en pantalla')
  await expect(generatedPrompt).toContainText('Debes evitar: el color rojo, texto en pantalla.')
  await fillNegativePrompt(page, '')
  await expect(generatedPrompt).not.toContainText('Debes evitar')

  if (env.PLAYWRIGHT_KEEP_OPEN === '1') {
    test.setTimeout(0)
    console.log('Ferrum está creado y el prompt está visible. Cierra Chromium para finalizar la prueba.')
    await page.waitForEvent('close')
    return
  }

  const noTextLimit = 'libre de texto y anotaciones'
  const conceptArtPhrases = [
    'vista principal de cuerpo completo con silueta y proporciones claras',
    'paleta cromática y materiales',
    'variaciones y vistas frontal, lateral y trasera',
    'anotaciones breves para explicar detalles clave',
  ]
  const stagePrompts = [
    {
      label: 'Concepto y Dirección',
      lead: /^Genera una imagen conceptual[\s\S]*?\n\s*\nArte conceptual para una lámina/mi,
      opening: 'Genera una imagen conceptual',
      content: 'Ferrum',
      forbidsText: false,
    },
    { label: 'Boceto y entintado', opening: 'Genera una imagen de boceto y entintado', content: 'boceto de arte conceptual', forbidsText: true },
    { label: 'Vistas del Personaje', opening: 'Genera una imagen tipo hoja de referencia', content: 'vista frontal', forbidsText: false },
    { label: 'Paleta y Color', opening: 'Genera una imagen del personaje', content: 'paleta de colores vibrante y armoniosa', forbidsText: true },
    { label: 'Rostro y Expresiones', opening: 'Genera una imagen tipo hoja de expresiones', content: 'Ferrum', forbidsText: false },
    { label: 'Acciones y Poses', opening: 'Genera una imagen de cuerpo completo', content: 'Ferrum', forbidsText: true },
    { label: 'Ilustración final', opening: 'Genera una ilustración final', content: 'Ferrum', forbidsText: true },
  ]

  for (const stage of stagePrompts) {
    await selectStage(page, stage.label)
    if ('lead' in stage && stage.lead) {
      await expect(generatedPrompt).toHaveText(stage.lead)
    }
    await expect(generatedPrompt).toContainText(stage.opening)
    await expect(generatedPrompt).toContainText(stage.content)
    await expect(generatedPrompt).toContainText(/^Información del personaje: /m)
    await expect(generatedPrompt).not.toContainText(/(?:^|\n)(?:Objetivo|Contexto|Formato|Límites):/)

    if (stage.forbidsText) {
      await expect(generatedPrompt).toContainText(noTextLimit)
    } else {
      await expect(generatedPrompt).not.toContainText(noTextLimit)
    }
  }

  await fillNegativePrompt(page, 'el color rojo')
  await expect(generatedPrompt).toContainText('Debes evitar: el color rojo.')
  await selectStage(page, 'Concepto y Dirección')
  await expect(generatedPrompt).not.toContainText('Debes evitar')
  await selectStage(page, 'Ilustración final')
  await expect(generatedPrompt).toContainText('Debes evitar: el color rojo.')

  // El prompt de concept art se integra como encabezado de la etapa: presente
  // sin ninguna acción del usuario y sin ofrecerse como estilo elegible.
  await selectStage(page, 'Concepto y Dirección')
  const conceptArtPrompt = await getPromptPreview(page)
  for (const phrase of conceptArtPhrases) {
    await expect(conceptArtPrompt).toContainText(phrase)
  }

  await showEditorOnMobile(page)
  const libraryCategorySelect = page.getByRole('combobox').last()
  await libraryCategorySelect.click()
  await page.getByRole('option', { name: 'Estilo', exact: true }).click()
  await expect(page.getByRole('button', { name: /Arte conceptual/ })).toHaveCount(0)
  await expect(page.getByRole('button', { name: /^Pixar/ })).toHaveCount(1)

  await page.getByRole('link', { name: 'Editar personaje', exact: true }).click()
  await page.getByRole('tab', { name: 'Ropa y Equipo', exact: true }).click()
  await expect(
    page
      .locator('label')
      .filter({ hasText: /^Armadura$/ })
      .locator('xpath=../..')
      .locator('input')
  ).toHaveValue('Armadura integral de acero ennegrecido')
  await expect(
    page
      .locator('label')
      .filter({ hasText: /^Armas$/ })
      .locator('xpath=../..')
      .locator('input')
  ).toHaveValue('Martillo de guerra con cabeza de hierro')

})
