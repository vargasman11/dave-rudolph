import {defineConfig} from "vite"

export default defineConfig(({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        manifest: true,
        outDir: 'web/dist',
        rollupOptions: {
            input: {
                app: 'src/app.js',
            }
        },
    },
    server: {
        allowedHosts: true,
        cors: {
            origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/
        },
        fs: {
            strict: false
        },
        headers: {
            "Access-Control-Allow-Private-Network": "true",
        },
        host: '0.0.0.0',
        origin: 'https://daverudolphmusic.ddev.site:5173',
        port: 5173,
        strictPort: true,
    }
}));