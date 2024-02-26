import Draggable from '@/components/ui/Draggable'
import { Heading } from '@/components/ui/Heading'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Heading title='Здесь пока ничего нет' />
			<Draggable />
		</main>
	)
}
