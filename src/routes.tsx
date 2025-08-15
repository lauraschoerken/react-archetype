import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout'
import Home from './components/Home/containers/Home'

//import NotFound from './components/NotFound'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ index: true, element: <Home /> },
			//{ path: 'about', element: <About /> },
			//{ path: '*', element: <NotFound /> },
		],
	},
])
