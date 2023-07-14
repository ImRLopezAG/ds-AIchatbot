import { Client, Events } from 'discord.js'
import { iteration } from './commands'
import { client, response } from './config'

export const app: Client = client

app.on(Events.MessageCreate, async (message) => {
  try {
    const { author, content } = message
    if (content.startsWith('/')) return
    if (author.bot) return
    await response({ prompt: content })
      .then(async (res) => {
        await message.reply(res).then(async (msg) => await msg.react('✅'))
      })
      .catch((error) => console.error(error))
  } catch (error) {
    console.error(error)
    await message
      .reply('Sorry, I had problems in my code. Please, try again later.')
      .then(async (msg) => await msg.react('🥲'))
  }
})

app.on(Events.InteractionCreate, async (interaction) => {
  try {
    if (!interaction.isCommand()) return
    const { commandName, options } = interaction
    const prompt = options.data[0].value as string
    if (commandName === 'gpt') {
      await iteration({ prompt, interaction })
    } else if (commandName === 'generate') {
      await iteration({ prompt, interaction, maxTokens: 200 })
    } else if (commandName === 'delete') {
      await interaction.channel?.messages
        .fetch({ limit: 100 })
        .then((messages) => {
          messages.forEach(async (message) => {
            await message.delete()
          })
        })
    }
  } catch (error) {
    console.error(error)
  }
})
