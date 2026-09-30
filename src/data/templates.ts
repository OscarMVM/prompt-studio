import type { EngineTemplate } from '@/types/prompt'

export const engineTemplates: EngineTemplate[] = [
  {
    id: 'midjourney',
    name: 'MidJourney',
    prefix: '',
    suffix: ' --ar 2:3 --v 6.1 --style raw',
    separator: ', ',
    negativePrefix: '--no ',
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    prefix: '',
    suffix: '',
    separator: ', ',
    negativePrefix: 'Prompt negativo: ',
  },
  {
    id: 'flux',
    name: 'Flux',
    prefix: '',
    suffix: '',
    separator: ', ',
    negativePrefix: '',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    prefix: 'Genera una ilustración detallada del personaje: ',
    suffix: '',
    separator: '. ',
    negativePrefix: '',
  },
  {
    id: 'dalle',
    name: 'DALL-E',
    prefix: 'Crea una ilustración detallada de ',
    suffix: '',
    separator: '. ',
    negativePrefix: '',
  },
  {
    id: 'leonardo',
    name: 'Leonardo AI',
    prefix: '',
    suffix: '',
    separator: ', ',
    negativePrefix: 'Prompt negativo: ',
  },
]
