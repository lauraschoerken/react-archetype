import { RouterProvider } from 'react-router-dom'
import I18nProvider from './providers/I18nProvider'
import { router } from './routes'

import './styles/index.scss'
import ThemeProvider from './providers/themeProvider'

export default function App() {
	return (
		<ThemeProvider>
			<I18nProvider>
				<RouterProvider router={router} />
			</I18nProvider>
		</ThemeProvider>
	)
}
