import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import es from './es'

const LANGUAGE_KEY = 'lang'
const detected =
	(localStorage.getItem(LANGUAGE_KEY) as string | null) ??
	(navigator.language?.startsWith('es') ? 'es' : 'en')

void i18n.use(initReactI18next).init({
	resources: {
		es: { common: es },
		en: { common: en },
	},
	lng: detected,
	fallbackLng: 'es',
	ns: Object.keys(en), // p.ej. ["common","demo",...]
	defaultNS: 'common',
	interpolation: { escapeValue: false },
	returnEmptyString: false,
})

i18n.on('languageChanged', (lng) => {
	try {
		localStorage.setItem(LANGUAGE_KEY, lng)
	} catch {
		//
	}
})

export default i18n
