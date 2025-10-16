<template>
  <div class="assets-gallery">
    <div v-for="category in categories" :key="category.name" class="category">
      <h2>{{ category.name }}</h2>
      <div class="assets-grid">
        <div v-for="asset in category.assets" :key="asset.path" class="asset-card">
          <img :src="asset.url" :alt="asset.name" />
          <p class="asset-name">{{ asset.name }}</p>
          <input
            type="text"
            :value="asset.url"
            readonly
            @click="copyToClipboard(asset.url, $event)"
            class="url-input"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: 'https://assets.eideasy.com',
      categories: [
        {
          name: 'Logos',
          assets: [
            { name: 'Logo Black', path: 'brand/images/logo/eideasy-logo-black.svg' },
            { name: 'Logo Padded Black', path: 'brand/images/logo/eideasy-logo-padded-black.svg' },
            { name: 'Logo Padded White', path: 'brand/images/logo/eideasy-logo-padded-white.svg' },
            { name: 'Logo Padded Yellow', path: 'brand/images/logo/eideasy-logo-padded-yellow.svg' },
            { name: 'Logo White', path: 'brand/images/logo/eideasy-logo-white.svg' },
            { name: 'Logo Yellow', path: 'brand/images/logo/eideasy-logo-yellow.svg' }
          ]
        },
        {
          name: 'Symbols',
          assets: [
            { name: 'Symbol Black', path: 'brand/images/symbol/eideasy-symbol-black.svg' },
            { name: 'Symbol Padded Black', path: 'brand/images/symbol/eideasy-symbol-padded-black.svg' },
            { name: 'Symbol Padded White', path: 'brand/images/symbol/eideasy-symbol-padded-white.svg' },
            { name: 'Symbol Padded Yellow', path: 'brand/images/symbol/eideasy-symbol-padded-yellow.svg' },
            { name: 'Symbol White', path: 'brand/images/symbol/eideasy-symbol-white.svg' },
            { name: 'Symbol Yellow', path: 'brand/images/symbol/eideasy-symbol-yellow.svg' }
          ]
        },
        {
          name: 'Wordmarks',
          assets: [
            { name: 'Wordmark Black', path: 'brand/images/wordmark/eideasy-wordmark-black.svg' },
            { name: 'Wordmark Padded Black', path: 'brand/images/wordmark/eideasy-wordmark-padded-black.svg' },
            { name: 'Wordmark Padded White', path: 'brand/images/wordmark/eideasy-wordmark-padded-white.svg' },
            { name: 'Wordmark Padded Yellow', path: 'brand/images/wordmark/eideasy-wordmark-padded-yellow.svg' },
            { name: 'Wordmark White', path: 'brand/images/wordmark/eideasy-wordmark-white.svg' },
            { name: 'Wordmark Yellow', path: 'brand/images/wordmark/eideasy-wordmark-yellow.svg' }
          ]
        },
        {
          name: 'Favicons (Monochrome)',
          assets: [
            { name: 'Apple Touch Icon', path: 'brand/favicon/monochrome/apple-touch-icon.png' },
            { name: 'Favicon 96x96', path: 'brand/favicon/monochrome/favicon-96x96.png' },
            { name: 'Favicon ICO', path: 'brand/favicon/monochrome/favicon.ico' },
            { name: 'Favicon SVG', path: 'brand/favicon/monochrome/favicon.svg' },
            { name: 'Web Manifest 192', path: 'brand/favicon/monochrome/web-app-manifest-192x192.png' },
            { name: 'Web Manifest 512', path: 'brand/favicon/monochrome/web-app-manifest-512x512.png' }
          ]
        },
      ]
    }
  },
  computed: {
    categories() {
      return this.categories.map(cat => ({
        ...cat,
        assets: cat.assets.map(asset => ({
          ...asset,
          url: `${this.baseUrl}/${asset.path}`
        }))
      }))
    }
  },
  methods: {
    copyToClipboard(text, event) {
      event.target.select()
      navigator.clipboard.writeText(text)
    }
  }
}
</script>

<style scoped>
.assets-gallery {
  padding: 20px;
}
.category {
  margin-bottom: 40px;
}
.assets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.asset-card {
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}
.asset-card img {
  max-width: 100%;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}
.asset-name {
  font-weight: 600;
  margin: 10px 0;
}
.url-input {
  width: 100%;
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}
.url-input:focus {
  outline: none;
  border-color: #42b983;
}
</style>