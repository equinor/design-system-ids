import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      name: 'generate',
      fileName: 'generate',
      entry: 'src/generate/index.ts',
    },
    rollupOptions: {
      output: {
        dir: 'build-generate',
      },
      external: [
        'fs',
        'path',
        'os',
        'crypto',
        'style-dictionary',
        'style-dictionary-utils',
        '@equinor/eds-tokens-sync',
        '@equinor/eds-tokens-build',
      ],
    },
  },
})
