import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelect from '@/components/elements/Languague/LanguagueSelect'
import '../layout.scss'
import { APP_NAME } from '@/utils/constants'
import ThemeToggle from '@/components/elements/Theme/ThemeToggle'

export default function Header() {
	const active = 'link-active'
	const { t } = useTranslation()

	return (
		<header className='header'>
			<div className='container header__inner'>
				<Link to='/' className='link brand'>
					{APP_NAME}
				</Link>
				<nav className='nav'>
					<NavLink to='/' end className={({ isActive }) => (isActive ? active : 'link')}>
						{t('home')}
					</NavLink>
					<NavLink to='/demo' className={({ isActive }) => (isActive ? active : 'link')}>
						{t('demo')}
					</NavLink>
					<ThemeToggle />
					<LanguageSelect />
				</nav>
			</div>
		</header>
	)
}
