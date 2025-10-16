import { defineClientConfig } from 'vuepress/client'
import AssetsGallery from './components/AssetsGallery.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('AssetsGallery', AssetsGallery)
  }
})