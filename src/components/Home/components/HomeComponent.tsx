import './HomeComponent.scss'
import homeImage from '@/assets/home.svg'

interface Props {
	name: string
	next: () => void
	before: () => void
}

const HomeComponent: React.FC<Props> = (props) => {
	const { name, next, before } = props
	return (
		<div className='home'>
			<div className='home__content'>
				<h1 className='home__title'>{name}</h1>
				<div className='home__buttons'>
					<button className='btn btn--secondary' onClick={before}>
						←
					</button>
					<button className='btn btn--primary' onClick={next}>
						→
					</button>
				</div>
			</div>

			<div className='home__image'>
				<img src={homeImage} alt='Home illustration' />
			</div>
		</div>
	)
}

export default HomeComponent
