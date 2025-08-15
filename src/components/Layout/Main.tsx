import { Outlet } from 'react-router-dom'
import './layout.scss'

export default function MainSection() {
	return (
		<main className='main container'>
			<Outlet />
		</main>
	)
}
