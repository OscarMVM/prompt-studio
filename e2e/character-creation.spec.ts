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
  await page.getByRole('tab', { name: 'Prompt', exact: true }).click()
  const generatedPrompt = page
    .getByRole('tabpanel', { name: 'Prompt' })
    .locator('p.whitespace-pre-wrap')
  await expect(generatedPrompt).toContainText('Genera una imagen conceptual')
  await expect(generatedPrompt).not.toContainText(/(?:^|\n)(?:Objetivo|Contexto|Formato|Límites):/)

  if (env.PLAYWRIGHT_KEEP_OPEN === '1') {
    test.setTimeout(0)
    console.log('Ferrum está creado y el prompt está visible. Cierra Chromium para finalizar la prueba.')
    await page.waitForEvent('close')
    return
  }

  const stagePrompts = [
    { label: 'Concepto y Dirección', opening: 'Genera una imagen conceptual' },
    { label: 'Boceto y Lineart', opening: 'Genera una imagen de boceto y lineart' },
    { label: 'Vistas del Personaje', opening: 'Genera una imagen tipo hoja de referencia' },
    { label: 'Paleta y Color', opening: 'Genera una imagen del personaje' },
    { label: 'Rostro y Expresiones', opening: 'Genera una imagen tipo hoja de expresiones' },
    { label: 'Acciones y Poses', opening: 'Genera una imagen de cuerpo completo' },
    { label: 'Render Final', opening: 'Genera una ilustración final' },
  ]

  for (const stage of stagePrompts) {
    await page.getByRole('combobox').click()
    await page.getByRole('option', { name: stage.label, exact: true }).click()
    await expect(generatedPrompt).toContainText(stage.opening)
    await expect(generatedPrompt).not.toContainText(/(?:^|\n)(?:Objetivo|Contexto|Formato|Límites):/)
  }

  await page.getByRole('link', { name: 'Editar', exact: true }).click()
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
