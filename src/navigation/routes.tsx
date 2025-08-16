import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/Main/MainLayout'
import Home from '../components/Home/containers/Home'
import Demo from '../components/Demo/containers/Demo'

//import NotFound from './components/NotFound'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'demo', element: <Demo /> },
			//{ path: '*', element: <NotFound /> },
		],
	},
])
