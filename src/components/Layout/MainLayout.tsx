import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './layout.scss'

export default function MainLayout() {
	return (
		<div className='main-layout'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}
