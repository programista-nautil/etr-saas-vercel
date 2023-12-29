import SideBar from '@/components/SideBar'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'

const ChatsPage = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
				<h1 className='text-5xl font-bold mb-20'>Stwórz prosy tekst</h1>
				<div className='flex space-x-2 text-center'>
					<div className=''>
						<div className='flex flex-col items-center justify-center mb-5'>
							<SunIcon className='h-8 w-8' />
							<h2>Przykłady</h2>
						</div>

						<div className='space-y-2'>
							<p className='infoText'>prompt1</p>
							<p className='infoText'>prompt2</p>
							<p className='infoText'>prompt3</p>
						</div>
					</div>
					<div className=''>
						<div className='flex flex-col items-center justify-center mb-5'>
							<BoltIcon className='h-8 w-8' />
							<h2>Możliwości</h2>
						</div>

						<div className='space-y-2'>
							<p className='infoText'>prompt4</p>
							<p className='infoText'>prompt5</p>
							<p className='infoText'>prompt6</p>
						</div>
					</div>
					<div className=''>
						<div className='flex flex-col items-center justify-center mb-5'>
							<ExclamationTriangleIcon className='h-8 w-8' />
							<h2>Ograniczenia</h2>
						</div>

						<div className='space-y-2'>
							<p className='infoText'>prompt7</p>
							<p className='infoText'>prompt8</p>
							<p className='infoText'>prompt9</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatsPage
