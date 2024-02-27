'use client'

import { useState } from 'react'

import UserCard from './UserCard'

const DropUser = ({ droppable, callbackDrop }) => {
	const [drop, onDrop] = useState(false)

	const over = () => {
		onDrop(true)
	}

	const drops = () => {
		onDrop(false)
	}

	const style = { border: '1px solid black' }
	const overStyle = { border: '1px solid red' }

	return (
		<div
			className=' w-40 h-80'
			style={drop ? overStyle : style}
			onDragOver={() => over()}
			onDragLeave={() => drops()}
		>
			{droppable.map(({ id, name }) => (
				<UserCard
					key={id}
					id={id}
					name={name}
					callbackDrag={callbackDrop}
					deletes={true}
				/>
			))}
		</div>
	)
}

export default DropUser
