'use client'
import { db } from '@/firebase'
import { collection, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Messages from './Messages'

type Props = {
	chatId: string
}

function Chat({ chatId }: Props) {
	const { data: session } = useSession()

	const [messages] = useCollection(
		session &&
			query(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), orderBy('createdAt', 'asc'))
	)

	return (
		<div className='h-[72.4vh] overflow-auto sm:h-[77vh]'>
			{messages?.docs.map(message => (
				<Messages key={message.id} message={message.data()} />
			))}
		</div>
	)
}

export default Chat
