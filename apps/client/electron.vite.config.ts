import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()],
        build: {
            lib: {
                entry: 'node_modules/main/src/index.ts'
            }
        }
    },
    preload: {
        plugins: [externalizeDepsPlugin()],
        build: {
            lib: {
                entry: 'node_modules/preload/src/index.ts'
            }
        }
    },
    renderer: {
        plugins: [react()],
        root: 'node_modules/renderer',
        build: {
            rollupOptions: {
                input: 'node_modules/renderer/index.html',
            }
        }
    }
})