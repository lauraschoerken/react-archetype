import { createContext } from 'react'
import type { Theme } from '../lib/theme'

export const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
	theme: 'light',
	toggle: () => {},
})
