import { fetchDemoMock } from '@/mocks/demo'
import type { Demo } from '@/models/components/Demo'
import { useEffect, useState } from 'react'
import DemoComponent from '../components/DemoComponent'

const DemoPageContainer = () => {
	const [demo, setDemo] = useState<Demo[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | undefined>(undefined)

	const loadData = async () => {
		setLoading(true)
		setError(undefined)
		const { data, error } = await fetchDemoMock()
		setDemo(data)
		if (error) setError(error)
		setLoading(false)
	}

	useEffect(() => {
		loadData()
	}, [])

	return <DemoComponent loading={loading} error={error} demos={demo} onReload={loadData} />
}

export default DemoPageContainer
