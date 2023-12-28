import { DocumentData } from 'firebase/firestore'

type Props = {
	message: DocumentData
}

function Messages({ message }: Props) {
	const isChatGPT = message.user.name === 'ChatGPT'

	const renderAnalysisData = () => {
		if (typeof message.text === 'object' && message.text.sentence_count !== undefined) {
			// Render analysis data
			return (
				<>
					<strong>Ilość zdań:</strong> {message.text.sentence_count}
					<br />
					<strong>Współczynnik trudności tekstu:</strong> {message.text.flesch_kincaid_readability.toFixed(2)}
					<br />
					<strong>Ilość trudnych słów:</strong> {message.text.difficult_words_count}
					<br />
					<strong>Średnia długość zdań:</strong> {message.text.average_sentence_length}
					<br />
					<strong>Średnia długość paragrafu:</strong> {message.text.average_paragraph_length}
					<br />
					<strong>Średnia długość słowa:</strong> {message.text.average_word_length.toFixed(2)}
					<br />
					<strong>Ilość słów:</strong> {message.text.word_count}
					<br />
					<strong>Ilość paragrafów:</strong> {message.text.paragraph_count}
					<br />
				</>
			)
		} else {
			// Render plain text
			return <>{message.text}</>
		}
	}

	return (
		<div className={`py-5 ${isChatGPT && 'bg-[#434654]'}`}>
			<div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
				<img src={message.user.avatar} alt='' className='h-8 w-8' />
				<div>
					<p className='pt-1 text-sm' style={{ whiteSpace: 'pre-wrap' }}>
						{renderAnalysisData()}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Messages
