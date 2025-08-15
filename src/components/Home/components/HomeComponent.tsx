import './HomeComponent.scss'

interface Props {
	name: string
	next: () => void
	before: () => void
}
const HomeComponent: React.FC<Props> = (props) => {
	const { name, next, before } = props
	return (
		<div className='main'>
			{name}
			<button onClick={before}>Before</button>
			<button onClick={next}>Next</button>
		</div>
	)
}

export default HomeComponent
