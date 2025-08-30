import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
	// Carga variables de .env (según entorno)
	const env = loadEnv(mode, process.cwd(), '')

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		define: {
			__APP_NAME__: JSON.stringify(env.VITE_APP_NAME),
		},
	}
})
