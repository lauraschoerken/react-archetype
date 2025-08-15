import './HomeComponent.scss'

interface Props {
	name: string
	next: () => void
}
const HomeComponent: React.FC<Props> = (props) => {
	const { name, next } = props
	return (
		<div className='main'>
			{name}
			<button onClick={next}>Click</button>
		</div>
	)
}

export default HomeComponent
