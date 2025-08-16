import { ThemeContext } from '@/utils/Theme/theme-context'
import { useContext } from 'react'
import { SunIcon, MoonIcon } from './icons'
import './ThemeToggle.scss'

export const ThemeToggle = () => {
	const { theme, toggle } = useContext(ThemeContext)

	return (
		<button className={`theme-toggle ${theme}`} onClick={toggle} aria-label='Cambiar tema'>
			<span className='icon'>{theme === 'light' ? <SunIcon /> : <MoonIcon />}</span>
		</button>
	)
}
