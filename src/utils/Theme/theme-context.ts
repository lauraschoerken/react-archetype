import type { Theme } from '@/models/utils/Theme'
import { createContext } from 'react'

export const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
	theme: 'light',
	toggle: () => {},
})
