import { defineConfig } from 'electron-vite'

export default defineConfig({
    main: {
        build: {
            lib: {
                entry: 'node_modules/main/src/index.ts'
            }
        }
    },
    preload: {
        build: {
            lib: {
                entry: 'node_modules/preload/src/index.ts'
            }
        }
    },
    renderer: {
        build: {
            rollupOptions: {
                input: 'node_modules/renderer/index.html'
            }
        }
    }
})