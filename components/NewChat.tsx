'use client'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { addDoc, collection, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '@/firebase'
import ChatRow from './ChatRow'

function NewChat() {
	const router = useRouter()
	const { data: session } = useSession()

	const [chats, loading, error] = useCollection(
		session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
	)

	const createNewChat = async () => {
		// Sprawdź, czy użytkownik jest zalogowany
		if (!session || !session.user || !session.user.email) {
			console.error('Użytkownik nie jest zalogowany lub brakuje informacji o emailu')
			return // Wyjście z funkcji, jeśli brak sesji
		}

		const chatData = {
			userId: session.user.email,
			createdAt: serverTimestamp(),
		}

		console.log('Próba utworzenia nowego czatu z danymi:', chatData)

		try {
			const docRef = collection(db, 'users', session.user.email, 'chats')
			const doc = await addDoc(docRef, chatData)

			router.push(`/chat/${doc.id}`)
		} catch (error) {
			console.error('Błąd podczas tworzenia nowego czatu:', error)
		}
	}

	return (
		<div className='h-1/2'>
			<div className='border-gray-700 border chatRow' style={{ width: 'max-content' }} onClick={createNewChat}>
				<PlusIcon className='h-4 w-4' />
				<p>Nowy Chat</p>
			</div>
			{chats?.docs.map(chat => (
				<ChatRow key={chat.id} id={chat.id} />
			))}
		</div>
	)
}

export default NewChat
