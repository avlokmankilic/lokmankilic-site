import { defineConfig } from 'astro/config';

// Alan adını aldığında burayı güncelle (sitemap ve mutlak bağlantılar için).
export default defineConfig({
  site: 'https://lokmankilic.av.tr',
  trailingSlash: 'never',
  build: { format: 'file' },
});
