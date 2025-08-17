import { Header } from './Header'
import { Footer } from '../elements/Footer'
import '../layout.scss'
import { Outlet } from 'react-router-dom'

export const MinimalLayout = () => {
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
