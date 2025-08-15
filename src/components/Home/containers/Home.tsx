import { useState } from 'react'
import HomeComponent from '../components/HomeComponent'

interface Props {
	title: string
}

const Card: React.FC<Props> = (props) => {
	const { title } = props
	const [counter, setCounter] = useState<number>(1)
	const [name, setName] = useState<string>(`${title} ${counter}`)

	const next = () => {
		setCounter((prev) => {
			const newValue = prev + 1
			setName(`${title} ${newValue}`)
			return newValue
		})
	}

	return <HomeComponent name={name} next={next} />
}

export default Card
