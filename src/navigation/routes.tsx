import { createBrowserRouter } from 'react-router-dom'
import Demo from '../components/Demo/containers/Demo'
import { Home } from '@/components/Home/containers/Home'
import { IndexLayout } from '@/layouts'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexLayout />,
		children: [
			{ index: true, element: <Home /> },
			// { path: '*', element: <NotFound /> },
		],
	},
	{
		path: '/demo',
		element: <IndexLayout layout='minimal' />,
		children: [{ index: true, element: <Demo /> }],
	},
])
