import { Configuration, OpenAIApi } from 'openai'
import { KEYS } from './env'

interface IResponse {
  prompt: string
  maxTokens?: number
}

const config = new Configuration({
  apiKey: KEYS.OPENAI_KEY,
  organization: KEYS.OPENAI_ORG
})

export const openai = new OpenAIApi(config)

export const response = async ({ prompt, maxTokens }: IResponse): Promise<string | any> => {
  return await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: maxTokens ? `generate ${prompt}` : prompt,
    temperature: 0.9,
    max_tokens: maxTokens ?? 100
  }).then((res) => {
    const { choices } = res.data
    return choices[0].text
  }
  ).catch((error) => console.error(error))
}
