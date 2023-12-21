import LogoImage from '@logos/logo.svg'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

const Logo = () => {
	return (
		<Link href='/' prefetch={false} className='overflow-hidden'>
			<div className='flex items-center w-72 h-14'>
				<AspectRatio ratio={16 / 9} className='flex items-center justify-center'>
					<Image priority src={LogoImage} alt='logo' className='dark:filter dark:invert' />
				</AspectRatio>
			</div>
		</Link>
	)
}

export default Logo
