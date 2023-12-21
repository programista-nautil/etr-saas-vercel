import SideBar from '@/components/SideBar'
import { Toaster } from 'react-hot-toast'

export default function ChatsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex-1 w-full flex max-w-6xl mx-auto'>
			<Toaster position='top-right' />
			<SideBar />
			{children}
		</div>
	)
}
