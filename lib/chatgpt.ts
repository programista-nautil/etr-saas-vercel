import OpenAI from 'openai'
import http from 'http'
import { HttpsProxyAgent } from 'https-proxy-agent'

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

export default openai
