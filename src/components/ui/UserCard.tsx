'use client'

interface IUserCard {
	id: string
	name: string
	callbackDrag: (id: string) => void
	deletes: boolean
}

const UserCard = ({
	id,
	name,
	callbackDrag,
	deletes = false
}: IUserCard): JSX.Element => {
	const onDragEnd = event => {
		const { id } = event.target

		callbackDrag(id)
	}

	return (
		<div
			id={id}
			className={deletes ? 'border p-2 w-35 flex' : 'border p-2 w-20'}
			draggable
			onDragEnd={event => onDragEnd(event)}
		>
			{name}
			{deletes && (
				<button
					className=' ml-auto'
					onClick={() => callbackDrag(id)}
				>
					x
				</button>
			)}
		</div>
	)
}

export default UserCard
