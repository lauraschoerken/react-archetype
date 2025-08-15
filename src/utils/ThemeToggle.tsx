import { ThemeContext } from '@/providers/theme-context'
import { useContext } from 'react'

export default function ThemeToggle() {
	const { theme, toggle } = useContext(ThemeContext)
	return (
		<button className='theme-toggle' onClick={toggle} aria-label='Change theme'>
			{theme === 'light' ? '🌞 Light' : '🌙 Dark'}
		</button>
	)
}
