import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import general_en from './en/en.json'
import general_es from './es/es.json'

const LANGUAGE_KEY = 'lang'

const detected =
	(localStorage.getItem(LANGUAGE_KEY) as string | null) ??
	(navigator.language?.startsWith('es') ? 'es' : 'en')

void i18n.use(initReactI18next).init({
	resources: {
		es: { common: general_es },
		en: { common: general_en },
	},
	lng: detected,
	fallbackLng: 'es',
	ns: ['common'],
	defaultNS: 'common',
	interpolation: { escapeValue: false },
	returnEmptyString: false,
})

i18n.on('languageChanged', (lng) => {
	try {
		localStorage.setItem(LANGUAGE_KEY, lng)
	} catch (e) {
		console.error('Error guardando idioma:', e)
	}
})

export default i18n
