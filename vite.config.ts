import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
  root: './src',
  base: './',
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      dirs: ['composables', 'stores']
    }),
    Components({ dirs: ['components'] }),
    VueRouter({ dts: './src/router.d.ts' }),
    Vue()
  ],
  server: {
    port: 8888,
    strictPort: true,
    fs: {
      strict: false
    }
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    },
    minify: 'esbuild' // or `false`
  }
})
