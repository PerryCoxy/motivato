'use client'

import { useState } from 'react'

import DropUser from './DropUser'
import UserCard from './UserCard'

const Draggable = (): JSX.Element => {
	const [draggable, setDraggable] = useState([
		{ id: '1', name: 'user 1' },
		{ id: '2', name: 'user 2' },
		{ id: '3', name: 'user 3' },
		{ id: '4', name: 'user 4' },
		{ id: '5', name: 'user 5' }
	])
	const [droppable, setDroppable] = useState([])

	const callbackDrag = (id: string) => {
		setDroppable([...droppable, draggable.find(item => item.id === id)])
		setDraggable(prev => prev.filter(item => item.id !== id))
	}

	const callbackDrop = (id: string) => {
		setDraggable([...draggable, droppable.find(item => item.id === id)])
		setDroppable(prev => prev.filter(item => item.id !== id))
	}

	const setAllDroppable = () => {
		setDroppable([...draggable, ...droppable])
		setDraggable([])
	}

	const setAllDraggable = () => {
		setDraggable([...draggable, ...droppable])
		setDroppable([])
	}

	return (
		<div className='flex gap-2 items-center justify-center'>
			<div
				className='border-red-600 border w-20 h-80'
				draggable
			>
				{draggable.map(({ id, name }) => (
					<UserCard
						key={id}
						id={id}
						name={name}
						callbackDrag={callbackDrag}
					/>
				))}
			</div>
			<div className='grid gap-5'>
				<div
					onClick={setAllDroppable}
					className=' text-blue-600 h-1'
				>
					{'>>>'}
				</div>
				<div
					onClick={setAllDraggable}
					className=' text-red-600 h-1'
				>
					{'<<<'}
				</div>
			</div>
			<DropUser
				droppable={droppable}
				callbackDrop={callbackDrop}
			/>
		</div>
	)
}

export default Draggable
