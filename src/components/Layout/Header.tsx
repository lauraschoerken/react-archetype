import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from '@/utils/ThemeToggle'
import LanguageSelect from '@/utils/Languague/LanguagueSelect'
import './layout.scss'
import { appName } from '@/utils/constants'

export default function Header() {
	const active = 'link-active'
	const { t } = useTranslation()

	return (
		<header className='header'>
			<div className='container header__inner'>
				<Link to='/' className='link brand'>
					{appName}
				</Link>
				<nav className='nav'>
					<NavLink to='/' end className={({ isActive }) => (isActive ? active : 'link')}>
						{t('home')}
					</NavLink>
					<NavLink to='/about' className={({ isActive }) => (isActive ? active : 'link')}>
						{t('about')}
					</NavLink>
					<ThemeToggle />
					<LanguageSelect />
				</nav>
			</div>
		</header>
	)
}
