import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import vue from '@vitejs/plugin-vue'
import adonisjs from '@adonisjs/vite/client'
import { quasar } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [inertia({ ssr: { enabled: false } }), vue(), quasar({sassVariables: `${getDirname(import.meta.url)}/inertia/css/quasar-variables.sass`}
), adonisjs({ entrypoints: ['inertia/app/app.ts'], reload: ['resources/views/**/*.edge'] })],

      
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
