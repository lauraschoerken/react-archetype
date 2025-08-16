import type { Demo } from '@/models/components/Demo'
import './DemoComponent.scss'
import { Card as DemoCard } from '@/components/elements'

interface Props {
	loading: boolean
	demos: Demo[]
	onReload: () => void
	error?: string
}

export default function DemoComponent({ loading, error, demos, onReload }: Props) {
	const hasData = demos.length > 0

	// Si no hay datos aún y está cargando → skeletons
	if (loading && !hasData) {
		return (
			<div className='demo-grid'>
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className='demo-card skeleton'>
						<div className='skeleton-img' />
						<div className='skeleton-line title' />
						<div className='skeleton-line' />
						<div className='skeleton-line short' />
						<div className='skeleton-pill' />
					</div>
				))}
			</div>
		)
	}

	// Si hay error y no hay datos previos → muestra error
	if (error && !hasData) {
		return (
			<div className='demo-error'>
				<p>Error: {error}</p>
				<button onClick={onReload}>Reintentar</button>
			</div>
		)
	}

	// Caso general: mostramos datos; si loading, enseñamos estado "actualizando"
	return (
		<div>
			<div className='demo-toolbar'>
				<button onClick={onReload} disabled={loading}>
					{loading ? 'Actualizando…' : 'Recargar'}
				</button>
				{loading && <span className='spinner' aria-hidden='true' />}
			</div>

			<div
				className={`demo-grid ${loading ? 'is-refreshing' : ''}`}
				aria-busy={loading ? 'true' : 'false'}>
				{demos.map((d) => (
					<DemoCard key={d.id} demo={d} />
				))}
			</div>
		</div>
	)
}
