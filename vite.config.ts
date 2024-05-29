import { resolve } from 'path'

console.log('Loading vite config')

export default {
    root: 'src',
    build: {
        outDir: '../build',
        lib: {
            entry: resolve(__dirname, 'src/app.ts'),
            name: 'Relictify API',
            fileName: 'relictify-api'
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        },
    },
};