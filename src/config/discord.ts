import { Client, GatewayIntentBits } from 'discord.js'
import { KEYS } from './env'

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageTyping
  ]
})

client.login(KEYS.DS_TOKEN).catch(console.error)
