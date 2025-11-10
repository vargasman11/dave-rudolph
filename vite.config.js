import {defineConfig} from "vite"
import ViteRestart from 'vite-plugin-restart'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        manifest: 'manifest.json',
        outDir: 'web/dist',
        rollupOptions: {
            input: {
                app: 'src/app.js',
            }
        },
    },
    plugins: [
        ViteRestart({
            reload: [
                './templates/**/*',
            ]
        }),
        tailwindcss()
    ],
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