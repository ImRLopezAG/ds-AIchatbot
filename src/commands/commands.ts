import { REST, Routes, SlashCommandBuilder } from 'discord.js'
import { KEYS } from '../config'

const commands = [
  new SlashCommandBuilder()
    .setName('gpt')
    .setDescription('Generate text using GPT-3.')
    .addStringOption((option) =>
      option
        .setName('prompt')
        .setDescription('The prompt to generate text from.')
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName('generate')
    .setDescription('Generate text using GPT-3.')
    .addStringOption((option) =>
      option
        .setName('prompt')
        .setDescription('The prompt to generate text from.')
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName('delete')
    .setDescription('Delete all messages from the channel.')

].map((command) => command.toJSON())

const rest = new REST({ version: '9' }).setToken(KEYS.DS_TOKEN)

rest
  .put(Routes.applicationGuildCommands(KEYS.DS_CLIENT, KEYS.DS_GUILD), {
    body: commands
  })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
