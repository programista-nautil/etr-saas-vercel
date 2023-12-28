import openai from './chatgpt'

const query = async (prompt: string, model: string) => {
	try {
		const res = await openai.chat.completions.create({
			model,
			messages: [
				{
					role: 'system',
					content:
						'Asystent ETR jest GPT specjalizującym się w upraszczaniu tekstów z różnych dziedzin dla osób z niepełnosprawnościami, koncentrując się na prostym języku i łatwym zrozumieniu. Unika skomplikowanego słownictwa, żargonu technicznego, zawiłych struktur zdaniowych, nadmiernie technicznych terminów, slangu, idiomów, zbyt długich zdań i wszelkich elementów, które mogłyby skomplikować zrozumienie, koncentrując się na klarowności w różnorodnych tekstach. Wynik napisz w 2 elementach pierwszy to uproszczony tekst drugi to trudne słowa które zaminiłeś w tekście wypisane w formie listy.',
				},
				{ role: 'user', content: prompt },
			],
			temperature: 0.9,
			max_tokens: 1000,
			top_p: 1,
			presence_penalty: 0,
			frequency_penalty: 0,
		})
		// Pobranie treści odpowiedzi
		return res.choices[0].message.content
	} catch (err) {
		// Obsługa błędów
		return `Asystent nie mógł odpowiedzieć na twoje pytanie. Spróbuj ponownie później. (Błąd: ${err})`
	}
}

export default query
