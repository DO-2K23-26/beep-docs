import 'unpoly'
import Alpine from 'alpinejs'
import mediumZoom from 'medium-zoom'
import docsearch from '@docsearch/js'
import { tabs } from 'edge-uikit/tabs'
import Persist from '@alpinejs/persist'
import {
  initZoomComponent,
  initBaseComponents,
  initSearchComponent,
} from '@dimerapp/docs-theme/scripts'
import mermaid from 'mermaid'

import.meta.glob(['../content/**/*.png', '../content/**/*.jpeg', '../content/**/*.jpg'])

Alpine.plugin(tabs)
Alpine.plugin(Persist)
Alpine.plugin(initBaseComponents)
Alpine.plugin(initSearchComponent(docsearch))
Alpine.plugin(initZoomComponent(mediumZoom))
Alpine.start()

up.on('up:fragment:offline', () => {
  window.location.reload()
})

mermaid.initialize({startOnLoad: false})
up.on('up:fragment:inserted', async () => {
  await mermaid.run({ querySelector: '.mermaid' })
})
