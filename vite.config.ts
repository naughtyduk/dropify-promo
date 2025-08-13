import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 5174,
		proxy: {
			'/docs': {
				target: 'http://localhost:5173',
				changeOrigin: true,
				rewrite: (path) => path
			}
		}
	}
})


