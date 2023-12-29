'use client'
import { db } from '@/firebase'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'

type Props = {
	chatId: string
}

function ChatInput({ chatId }: Props) {
	const [prompt, setPrompt] = useState('')
	const { data: session } = useSession()

	//model gpt
	const model = 'gpt-3.5-turbo-16k'

	const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!prompt) return

		const input = prompt.trim()
		setPrompt('')

		const message: Message = {
			text: input,
			createdAt: serverTimestamp(),
			user: {
				_id: session?.user?.email!,
				name: session?.user?.name!,
				avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
			},
		}

		await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)

		const notification = toast.loading('Twój asystent AI myśli ...')

		//notification
		await fetch('/api/askQuestion', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ prompt: input, chatId, model, session }),
		}).then(() => {
			toast.success('Twój asystent AI odpowiedział!', { id: notification })
		})

		await fetch('/api/analyzeText', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text: input, chatId, model, session }),
		}).then(() => {
			toast.success('Tekst odebrany z analizy...', { id: notification })
		})
	}

	return (
		<div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
			<form className='p-5 space-x-5 flex' onSubmit={sendMessage}>
				<textarea
					disabled={!session}
					value={prompt}
					onChange={e => setPrompt(e.target.value)}
					placeholder='Wklej Swój tekst tutaj ...'
					className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 h-60'
				/>
				<button
					type='submit'
					disabled={!prompt || !session}
					className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'>
					<PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
				</button>
			</form>
		</div>
	)
}

export default ChatInput
