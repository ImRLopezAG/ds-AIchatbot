import { config } from 'dotenv'

config()

interface IKeys {
  OPENAI_KEY: string
  OPENAI_ORG: string
  DS_TOKEN: string
  DS_CLIENT: string
  DS_GUILD: string
}

export const KEYS: IKeys = {
  OPENAI_KEY: process.env.OPENAI_KEY as string,
  OPENAI_ORG: process.env.OPENAI_ORG as string,
  DS_TOKEN: process.env.DS_TOKEN as string,
  DS_CLIENT: process.env.DS_CLIENT as string,
  DS_GUILD: process.env.DS_GUILD as string
}
