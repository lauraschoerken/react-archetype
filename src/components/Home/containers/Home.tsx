import { useState } from 'react'
import HomeComponent from '../components/HomeComponent'

const Home = () => {
	const title = 'Home'
	const [counter, setCounter] = useState<number>(1)
	const [name, setName] = useState<string>(`${title} ${counter}`)

	const next = () => {
		setCounter((prev) => {
			const newValue = prev + 1
			setName(`${title} ${newValue}`)
			return newValue
		})
	}

	const before = () => {
		setCounter((prev) => {
			const newValue = prev - 1
			setName(`${title} ${newValue}`)
			return newValue
		})
	}

	return <HomeComponent name={name} next={next} before={before} />
}

export default Home
