import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'

type Props = {
	params: {
		id: string
	}
}

function ChatPage({ params: { id } }: Props) {
	return (
		<div className='flex flex-col overflow-hidden w-full'>
			<Chat chatId={id} />
			<ChatInput chatId={id} />
			{/* chat window */}
		</div>
	)
}

export default ChatPage
