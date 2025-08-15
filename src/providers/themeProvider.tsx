import { useEffect, useMemo, useState } from 'react'
import { applyTheme, getInitialTheme, type Theme } from '../lib/theme'
import { ThemeContext } from './theme-context'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		const initial = getInitialTheme()
		setTheme(initial)
		applyTheme(initial)
	}, [])

	const value = useMemo(
		() => ({
			theme,
			toggle: () => {
				setTheme((t) => {
					const next: Theme = t === 'light' ? 'dark' : 'light'
					applyTheme(next)
					return next
				})
			},
		}),
		[theme]
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
