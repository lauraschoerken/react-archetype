import { useTranslation } from 'react-i18next'
import './LanguageSelect.scss'
import { AVAILABLE_LANGS } from '../constants'

export default function LanguageSelect() {
	const { i18n } = useTranslation()
	const current =
		i18n.language && i18n.language.includes('-')
			? i18n.language.split('-')[0]
			: i18n.language || 'es'

	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const lng = e.target.value
		i18n.changeLanguage(lng)
		try {
			localStorage.setItem('lang', lng)
		} catch {
			console.log('Error in lang')
		}
	}

	return (
		<select
			aria-label='Seleccionar idioma'
			className='lang-select'
			value={current}
			onChange={onChange}>
			{AVAILABLE_LANGS.map((l) => (
				<option key={l.code} value={l.code}>
					{l.label}
				</option>
			))}
		</select>
	)
}
