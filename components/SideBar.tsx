import NewChat from './NewChat'

async function SideBar() {
	return (
		<div className='p-2 flex flex-col min-w-[10rem] h-screen overflow-y-auto md:min-w-[20rem]'>
			<div className='flex-1'>
				<div>
					{/* new chat */}
					<NewChat />

					<div>{/* modSelection */}</div>

					{/* chatrows history */}
				</div>
			</div>
		</div>
	)
}

export default SideBar
