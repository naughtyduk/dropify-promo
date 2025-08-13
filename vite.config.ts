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
	},
	plugins: [
		{
			name: 'redirect-docs-trailing-slash',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					if (req.url === '/docs') {
						res.statusCode = 301
						res.setHeader('Location', '/docs/')
						res.end()
						return
					}
					next()
				})
			}
		}
	]
})


