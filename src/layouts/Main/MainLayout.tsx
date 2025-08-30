import Header from '../elements/Header'
import Footer from '../elements/Footer'
import '../layout.scss'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
	return (
		<div className='main-layout'>
			<Header />
			<main className='main container'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
