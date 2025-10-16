import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  title: 'eID Easy Public Assets',
  description: 'Browse and access eID Easy public assets',
  base: '/',
  dest: 'dist',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [],
    sidebar: false,
    colorMode: 'light',
    colorModeSwitch: true
  }),
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://assets.eideasy.com/brand/favicon/monochrome/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://assets.eideasy.com/brand/favicon/monochrome/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://assets.eideasy.com/brand/favicon/monochrome/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://assets.eideasy.com/brand/favicon/monochrome/favicon-96x96.png' }]
  ]
}