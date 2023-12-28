import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'
import { adminDb } from '@/firebaseAdmin'
import e from 'express'
// Zaimportuj odpowiednie biblioteki do obsługi Concraft-pl i Morfeusz 2

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { text, chatId, model, session } = req.body

	if (req.method === 'POST') {
		// Przetwórz tekst za pomocą Concraft-pl i Morfeusz 2
		console.log('Email:', session?.user?.email, 'ChatId:', chatId)
		const analysisResults = await analyzeText(text, session?.user?.email, chatId)

		// Zwróć wyniki
		res.status(200).json({ data: analysisResults })
	} else {
		// Obsługa innych metod niż POST
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}

async function analyzeText(text: string, email: string, chatId: string) {
	try {
		const response = await fetch('http://127.0.0.1:5000/analyze', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text: text }),
		})

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`)
		}

		const result = await response.json()
		console.log(result)

		const message: Message = {
			text: result || 'Nie udało się odpowiedzieć na twoje pytanie',
			createdAt: admin.firestore.Timestamp.now(),
			user: {
				_id: 'ChatGPT',
				name: 'ChatGPT',
				avatar: 'https://links.papareact.com/89k',
			},
		}
		await adminDb.collection('users').doc(email).collection('chats').doc(chatId).collection('messages').add(message)
	} catch (error) {
		console.error('Error during text analysis: ', error)
		throw error
	}
}
